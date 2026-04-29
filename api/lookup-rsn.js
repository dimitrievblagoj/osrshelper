const HISCORE_SKILL_ROWS = {
  attack: 1,
  defence: 2,
  strength: 3,
  hitpoints: 4,
  ranged: 5,
  prayer: 6,
  magic: 7,
  slayer: 18
};

const HISCORE_ENDPOINTS = {
  normal: 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws',
  ironman: 'https://secure.runescape.com/m=hiscore_oldschool_ironman/index_lite.ws',
  hardcore: 'https://secure.runescape.com/m=hiscore_oldschool_hardcore_ironman/index_lite.ws',
  ultimate: 'https://secure.runescape.com/m=hiscore_oldschool_ultimate/index_lite.ws'
};

const ACCOUNT_TYPE_PRIORITY = [
  { type: 'Ultimate Ironman', mode: 'ultimate' },
  { type: 'Hardcore Ironman', mode: 'hardcore' },
  { type: 'Ironman', mode: 'ironman' },
  { type: 'Main', mode: 'normal' }
];
function parseSkillLevel(rows, rowIndex) {
  const row = rows[rowIndex];

  if (!row) {
    return 1;
  }

  const [, level] = row.split(',').map((value) => value.trim());
  const parsedLevel = Number.parseInt(level, 10);

  return Number.isNaN(parsedLevel) ? 1 : parsedLevel;
}


async function fetchHiscoresForMode(rsn, mode) {
  const endpoint = HISCORE_ENDPOINTS[mode];
  if (!endpoint) return { success: false, rows: [] };

  try {
    const response = await fetch(`${endpoint}?player=${encodeURIComponent(rsn)}`);
    if (!response.ok) return { success: false, rows: [] };

    const payload = await response.text();
    const rows = payload.trim().split('\n');
    const hasCoreRows = rows.length > HISCORE_SKILL_ROWS.slayer;

    return { success: hasCoreRows, rows };
  } catch {
    return { success: false, rows: [] };
  }
}

async function detectAccountType(rsn) {
  for (const check of ACCOUNT_TYPE_PRIORITY) {
    const result = await fetchHiscoresForMode(rsn, check.mode);
    if (result.success) {
      return { accountType: check.type, rows: result.rows };
    }
  }

  return { accountType: 'Unknown', rows: [] };
}

function isValidRsn(rsn) {
  return /^[A-Za-z0-9 _-]{1,12}$/.test(rsn);
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const rsn = typeof req.query.rsn === 'string' ? req.query.rsn.trim() : '';

  if (!rsn) {
    return res.status(400).json({ error: 'Missing rsn query parameter.' });
  }

  if (!isValidRsn(rsn)) {
    return res.status(400).json({ error: 'RSN must be 1-12 characters using letters, numbers, spaces, - or _.' });
  }

  try {
    const normalLookup = await fetchHiscoresForMode(rsn, 'normal');

    if (!normalLookup.success) {
      return res.status(404).json({ error: 'RSN not found on OSRS hiscores.' });
    }

    const { accountType } = await detectAccountType(rsn);
    const stats = Object.fromEntries(
      Object.entries(HISCORE_SKILL_ROWS).map(([skill, rowIndex]) => [skill, parseSkillLevel(normalLookup.rows, rowIndex)])
    );

    return res.status(200).json({ rsn, stats, accountType });
  } catch (error) {
    return res.status(502).json({ error: 'Unable to fetch OSRS hiscores right now.' });
  }
}
