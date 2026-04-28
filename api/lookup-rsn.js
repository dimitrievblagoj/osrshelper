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

function parseSkillLevel(rows, rowIndex) {
  const row = rows[rowIndex];

  if (!row) {
    return 1;
  }

  const [, level] = row.split(',').map((value) => value.trim());
  const parsedLevel = Number.parseInt(level, 10);

  return Number.isNaN(parsedLevel) ? 1 : parsedLevel;
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
    const upstreamUrl = `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${encodeURIComponent(rsn)}`;
    const upstreamResponse = await fetch(upstreamUrl);

    if (!upstreamResponse.ok) {
      return res.status(404).json({ error: 'RSN not found on OSRS hiscores.' });
    }

    const payload = await upstreamResponse.text();
    const rows = payload.trim().split('\n');

    const stats = Object.fromEntries(
      Object.entries(HISCORE_SKILL_ROWS).map(([skill, rowIndex]) => [skill, parseSkillLevel(rows, rowIndex)])
    );

    return res.status(200).json({ rsn, stats });
  } catch (error) {
    return res.status(502).json({ error: 'Unable to fetch OSRS hiscores right now.' });
  }
}
