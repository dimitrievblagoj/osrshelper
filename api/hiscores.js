const SKILL_INDEX = {
  overall: 0,
  attack: 1,
  defence: 2,
  strength: 3,
  hitpoints: 4,
  ranged: 5,
  prayer: 6,
  magic: 7,
  slayer: 19
};

const UPSTREAM_BASE_URL = 'https://secure.runescape.com/m=hiscore_oldschool/index_lite.json';

function isValidPlayerName(name) {
  return /^[A-Za-z0-9 _-]{1,12}$/.test(name);
}

function parseSkillRow(row) {
  if (Array.isArray(row)) {
    const [rank, level, xp] = row;
    return {
      rank: Number.parseInt(rank, 10),
      level: Number.parseInt(level, 10),
      xp: Number.parseInt(xp, 10)
    };
  }

  if (row && typeof row === 'object') {
    return {
      rank: Number.parseInt(row.rank, 10),
      level: Number.parseInt(row.level, 10),
      xp: Number.parseInt(row.xp, 10)
    };
  }

  if (typeof row === 'string') {
    const [rank, level, xp] = row.split(',').map((value) => Number.parseInt(value.trim(), 10));
    return { rank, level, xp };
  }

  return { rank: -1, level: -1, xp: -1 };
}

function normalizeHiscorePayload(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && Array.isArray(payload.skills)) {
    return payload.skills;
  }

  if (payload && Array.isArray(payload.hiscores)) {
    return payload.hiscores;
  }

  return null;
}

function parseFromTextCsv(text) {
  return text
    .trim()
    .split('\n')
    .map((line) => parseSkillRow(line));
}

function extractMappedStats(rows) {
  const getLevel = (index) => {
    const parsed = parseSkillRow(rows[index]);
    return Number.isFinite(parsed.level) && parsed.level >= 1 ? parsed.level : 1;
  };

  return {
    totalLevel: getLevel(SKILL_INDEX.overall),
    attack: getLevel(SKILL_INDEX.attack),
    defence: getLevel(SKILL_INDEX.defence),
    strength: getLevel(SKILL_INDEX.strength),
    hitpoints: getLevel(SKILL_INDEX.hitpoints),
    ranged: getLevel(SKILL_INDEX.ranged),
    prayer: getLevel(SKILL_INDEX.prayer),
    magic: getLevel(SKILL_INDEX.magic),
    slayer: getLevel(SKILL_INDEX.slayer)
  };
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const player = typeof req.query.player === 'string' ? req.query.player.trim() : '';

  if (!player) {
    return res.status(400).json({ error: 'Missing player query parameter.' });
  }

  if (!isValidPlayerName(player)) {
    return res.status(400).json({ error: 'Player name must be 1-12 characters using letters, numbers, spaces, - or _.' });
  }

  try {
    const upstreamUrl = `${UPSTREAM_BASE_URL}?player=${encodeURIComponent(player)}`;
    const upstreamResponse = await fetch(upstreamUrl, {
      headers: {
        Accept: 'application/json, text/plain;q=0.9, */*;q=0.8'
      }
    });

    if (!upstreamResponse.ok) {
      return res.status(404).json({ error: 'Player not found or not ranked on hiscores.', code: 'PLAYER_NOT_FOUND' });
    }

    const contentType = upstreamResponse.headers.get('content-type') || '';
    let skillRows = null;

    if (contentType.includes('application/json')) {
      const payload = await upstreamResponse.json();
      skillRows = normalizeHiscorePayload(payload);
    } else {
      const textPayload = await upstreamResponse.text();
      try {
        const asJson = JSON.parse(textPayload);
        skillRows = normalizeHiscorePayload(asJson);
      } catch {
        skillRows = parseFromTextCsv(textPayload);
      }
    }

    if (!skillRows || skillRows.length <= SKILL_INDEX.slayer) {
      return res.status(502).json({ error: 'Hiscores are currently unavailable.', code: 'HISCORES_UNAVAILABLE' });
    }

    return res.status(200).json({
      player,
      stats: extractMappedStats(skillRows)
    });
  } catch (error) {
    return res.status(502).json({ error: 'Something went wrong while fetching stats.', code: 'UNKNOWN_ERROR' });
  }
}
