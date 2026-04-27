/**
 * Central rule module for recommendations and readiness scoring.
 * Keep this file data-driven for easy expansion.
 */

export const budgetOptions = ['0–1M', '1–10M', '10–50M', '50M+'];
export const accountTypeOptions = ['Main', 'Ironman', 'Ultimate Ironman', 'Hardcore Ironman'];

export const questList = [
  { key: 'dragonSlayer1', label: 'Dragon Slayer I' },
  { key: 'dragonSlayer2', label: 'Dragon Slayer II' },
  { key: 'monkeyMadness1', label: 'Monkey Madness I' },
  { key: 'monkeyMadness2', label: 'Monkey Madness II' },
  { key: 'recipeForDisaster', label: 'Recipe for Disaster / Barrows Gloves' },
  { key: 'desertTreasure1', label: 'Desert Treasure I' },
  { key: 'desertTreasure2', label: 'Desert Treasure II' },
  { key: 'kingsRansom', label: 'King’s Ransom' },
  { key: 'priestInPeril', label: 'Priest in Peril' },
  { key: 'sinsOfTheFather', label: 'Sins of the Father' },
  { key: 'songOfTheElves', label: 'Song of the Elves' },
  { key: 'beneathCursedSands', label: 'Beneath Cursed Sands' }
];

export const diaryList = [
  { key: 'varrockMedium', label: 'Varrock Medium Diary' },
  { key: 'lumbridgeMedium', label: 'Lumbridge & Draynor Medium Diary' },
  { key: 'morytaniaHard', label: 'Morytania Hard Diary' },
  { key: 'westernProvincesHard', label: 'Western Provinces Hard Diary' }
];

export const untradeableList = [
  { key: 'fireCape', label: 'Fire Cape' },
  { key: 'fighterTorso', label: 'Fighter Torso' },
  { key: 'imbuedGodCape', label: 'Imbued God Cape' },
  { key: 'barrowsGloves', label: 'Barrows Gloves' },
  { key: 'assembler', label: 'Ava’s Assembler' }
];

const gearUpgradePaths = {
  '0–1M': {
    melee: 'Dragon scimitar + strength amulet upgrade.',
    ranged: 'Rune crossbow + broad bolts.',
    magic: 'Iban staff / basic powered staff setup.',
    utility: 'Prayer potions + teleport tabs for safer trips.'
  },
  '1–10M': {
    melee: 'Dragon defender + fighter torso/barrows legs combination.',
    ranged: 'Blowpipe or stronger crossbow progression.',
    magic: 'Trident of the seas + basic magic accuracy switch.',
    utility: 'Stamina + prayer sustain setup for longer PvM trips.'
  },
  '10–50M': {
    melee: 'Abyssal whip + improved strength bonus slots.',
    ranged: 'Blowpipe with stronger ammo and better ranged body.',
    magic: 'Trident upgrade path with better magic damage pieces.',
    utility: 'Dedicated inventory presets per boss style.'
  },
  '50M+': {
    melee: 'Boss-focused melee setup with strong DPS weapon choice.',
    ranged: 'High-tier ranged bossing setup tuned for Vorkath/Zulrah/raids.',
    magic: 'High-tier mage setup with improved damage and switch quality.',
    utility: 'Build specialized loadouts and supply plans per boss/raid.'
  }
};

const readinessDefinitions = [
  {
    key: 'barrows',
    name: 'Barrows readiness',
    explanation: 'Barrows is a safe stepping-stone into repeatable PvM and basic gear swapping.',
    requirements: (p) => [
      levelReq('Magic', p.stats.magic, 60, 30),
      levelReq('Ranged', p.stats.ranged, 70, 20),
      levelReq('Prayer', p.stats.prayer, 43, 25),
      questReq('Priest in Peril', p.quests.priestInPeril, 10),
      untradeableReq('Barrows Gloves (recommended)', p.untradeables.barrowsGloves, 15)
    ]
  },
  {
    key: 'fireCape',
    name: 'Fire Cape readiness',
    explanation: 'Fire Cape is a major account milestone and improves melee progression immediately.',
    requirements: (p) => [
      levelReq('Ranged', p.stats.ranged, 70, 35),
      levelReq('Prayer', p.stats.prayer, 43, 30),
      untradeableReq('Fighter Torso / solid defense body (recommended)', p.untradeables.fighterTorso, 10),
      genericReq('Better ranged gear recommended', p.budget !== '0–1M', 25)
    ]
  },
  {
    key: 'vorkath',
    name: 'Vorkath readiness',
    explanation: 'Vorkath is strong GP and a reliable mid-game farm once mechanics are stable.',
    requirements: (p) => [
      questReq('Dragon Slayer II', p.quests.dragonSlayer2, 35),
      levelReq('Ranged', p.stats.ranged, 75, 25),
      levelReq('Defence', p.stats.defence, 70, 20),
      levelReq('Prayer', p.stats.prayer, 70, 20)
    ]
  },
  {
    key: 'zulrah',
    name: 'Zulrah readiness',
    explanation: 'Zulrah rewards strong switching fundamentals and consistent prayer/positioning.',
    requirements: (p) => [
      levelReq('Ranged', p.stats.ranged, 75, 25),
      levelReq('Magic', p.stats.magic, 75, 25),
      levelReq('Defence', p.stats.defence, 70, 20),
      levelReq('Prayer', p.stats.prayer, 70, 20),
      untradeableReq('Ava’s Assembler (recommended)', p.untradeables.assembler, 10)
    ]
  },
  {
    key: 'toa',
    name: 'Tombs of Amascut beginner readiness',
    explanation: 'TOA entry mode is a flexible first raid for learning movement, supplies, and roles.',
    requirements: (p) => [
      questReq('Beneath Cursed Sands', p.quests.beneathCursedSands, 25),
      levelReq('Attack', p.stats.attack, 75, 10),
      levelReq('Strength', p.stats.strength, 75, 10),
      levelReq('Ranged', p.stats.ranged, 75, 15),
      levelReq('Magic', p.stats.magic, 75, 15),
      levelReq('Prayer', p.stats.prayer, 70, 15),
      untradeableReq('Fire Cape (recommended)', p.untradeables.fireCape, 10)
    ]
  },
  {
    key: 'cox',
    name: 'Chambers of Xeric beginner readiness',
    explanation: 'CoX learner raids benefit from balanced combat stats and stable prayer management.',
    requirements: (p) => [
      levelReq('Attack', p.stats.attack, 80, 12),
      levelReq('Strength', p.stats.strength, 80, 12),
      levelReq('Defence', p.stats.defence, 75, 12),
      levelReq('Ranged', p.stats.ranged, 80, 20),
      levelReq('Magic', p.stats.magic, 80, 20),
      levelReq('Prayer', p.stats.prayer, 70, 12),
      levelReq('Hitpoints', p.stats.hitpoints, 80, 12)
    ]
  }
];

function levelReq(name, current, target, weight) {
  const met = current >= target;
  const progress = Math.min(1, current / target);
  return {
    label: `${name} recommended ${target}+`,
    met,
    weight,
    progress,
    missing: met ? null : `${name} ${current}/${target} (${target - current} levels away)`
  };
}

function questReq(name, completed, weight) {
  return {
    label: `${name} completed`,
    met: completed,
    weight,
    progress: completed ? 1 : 0,
    missing: completed ? null : `${name} not completed`
  };
}

function untradeableReq(name, owned, weight) {
  return {
    label: name,
    met: owned,
    weight,
    progress: owned ? 1 : 0,
    missing: owned ? null : name
  };
}

function genericReq(name, met, weight) {
  return {
    label: name,
    met,
    weight,
    progress: met ? 1 : 0,
    missing: met ? null : name
  };
}

function readinessLabel(score) {
  if (score >= 85) return 'Ready';
  if (score >= 60) return 'Close';
  return 'Not ready';
}

function computeReadiness(profile) {
  return readinessDefinitions.map((def) => {
    const reqs = def.requirements(profile);
    const totalWeight = reqs.reduce((sum, r) => sum + r.weight, 0);
    const earned = reqs.reduce((sum, r) => sum + r.weight * r.progress, 0);
    const score = Math.round((earned / totalWeight) * 100);

    return {
      key: def.key,
      name: def.name,
      score,
      status: readinessLabel(score),
      explanation: def.explanation,
      missingRequirements: reqs.filter((r) => !r.met).map((r) => r.missing)
    };
  });
}

function priority(score) {
  if (score >= 85) return 'Low';
  if (score >= 60) return 'Medium';
  return 'High';
}

function accountTypeNotes(accountType) {
  if (accountType === 'Main') {
    return ['Use GP efficiency: prioritize upgrades with biggest DPS gain per coin.'];
  }
  if (accountType === 'Ironman') {
    return ['Focus on self-sufficient unlock chains over market-dependent purchases.'];
  }
  if (accountType === 'Ultimate Ironman') {
    return ['Prefer low-inventory, low-bank-reliant methods and compact gear plans.'];
  }
  return ['Hardcore note: prioritize safe practice and over-prepare before high-risk bosses.'];
}

function buildMove(title, why, unlocks, priorityLevel) {
  return {
    whatToDo: title,
    whyItMatters: why,
    whatItUnlocks: unlocks,
    priority: priorityLevel
  };
}

function getPrayerMove(stats) {
  if (stats.prayer >= 43) return null;
  const diff = 43 - stats.prayer;
  return buildMove(
    `Get ${diff} Prayer levels to reach 43 Prayer.`,
    'Protection prayers massively increase survivability in quests and PvM.',
    'Reliable protection prayer usage for Fight Caves, Barrows, and safer quest bosses.',
    'High'
  );
}

export function getRecommendations(profile) {
  const { stats, quests, untradeables, budget, accountType } = profile;
  const readinessScores = computeReadiness(profile);
  const fireCape = readinessScores.find((r) => r.key === 'fireCape');
  const vorkath = readinessScores.find((r) => r.key === 'vorkath');

  const moves = [];
  const prayerMove = getPrayerMove(stats);
  if (prayerMove) moves.push(prayerMove);

  if (!quests.recipeForDisaster || !untradeables.barrowsGloves) {
    moves.push(
      buildMove(
        'Finish Recipe for Disaster and secure Barrows Gloves.',
        'Barrows Gloves are one of the highest value upgrades for all combat styles.',
        'Stronger accuracy/damage baseline for nearly all PvM progression.',
        'High'
      )
    );
  }

  if (fireCape && fireCape.status !== 'Ready') {
    moves.push(
      buildMove(
        'Prepare for your first Fire Cape attempt.',
        'Fire Cape is an early major milestone and teaches prayer/ranging fundamentals.',
        'Stronger melee slot and confidence for bigger PvM goals.',
        priority(fireCape.score)
      )
    );
  }

  if (!quests.dragonSlayer2) {
    moves.push(
      buildMove(
        'Work toward Dragon Slayer II requirements and completion.',
        'DS2 unlocks one of the most reliable mid-game money bosses.',
        'Vorkath access and improved dragon-content progression.',
        priority(vorkath.score)
      )
    );
  }

  if (stats.slayer < 75) {
    moves.push(
      buildMove(
        `Train Slayer from ${stats.slayer} to 75.`,
        'Slayer naturally raises combat while opening profitable monsters.',
        'Better PvM-ready stat profile and new monster unlocks.',
        'Medium'
      )
    );
  }

  const next3Moves = [
    moves[0] || buildMove('Improve combat stats evenly to 70+.', 'Balanced stats unlock broad PvM options.', 'General bossing readiness.', 'Medium'),
    moves[1] || buildMove('Complete key combat quests.', 'Quest unlocks are often stronger than raw levels.', 'More bosses and build options.', 'Medium'),
    moves[2] || buildMove('Start raid preparation goals.', 'Raids need broad fundamentals.', 'TOA/CoX learner readiness.', 'Low')
  ];

  const bestNextMove = next3Moves[0];

  const bossesNow = readinessScores.filter((r) => r.status === 'Ready').map((r) => `${r.name} (${r.score}%)`);
  const bossesClose = readinessScores.filter((r) => r.status === 'Close').map((r) => `${r.name} (${r.score}%)`);

  const missingUnlocks = Array.from(
    new Set(
      readinessScores
        .flatMap((r) => r.missingRequirements)
        .filter(Boolean)
        .filter((x) => /completed|recommended|not completed|\//i.test(x) || x.includes('not'))
    )
  );

  const warnings = [];
  if (accountType === 'Hardcore Ironman') {
    warnings.push('Hardcore warning: do practice runs on lower-risk content before attempting Vorkath/Zulrah/raids.');
  }
  if (accountType === 'Ultimate Ironman') {
    warnings.push('UIM warning: prioritize compact setups and avoid recommendation paths requiring large banked gear sets.');
  }
  if (stats.prayer < 43) {
    warnings.push(`Your Prayer is ${stats.prayer}. Prioritize 43 before harder PvM.`);
  }

  const gearSuggestions = gearUpgradePaths[budget];
  const notes = accountTypeNotes(accountType);

  const summaryText = [
    'My OSRS Next Move:',
    `Best move: ${bestNextMove.whatToDo}`,
    `Fire Cape readiness: ${fireCape?.score ?? 0}% (${fireCape?.status ?? 'Not ready'})`,
    `Vorkath readiness: ${vorkath?.score ?? 0}% (${vorkath?.status ?? 'Not ready'})`,
    `Next goals: ${next3Moves.map((m) => m.whatToDo).join(' -> ')}`
  ].join('\n');

  return {
    bestNextMove,
    next3Moves,
    readinessScores,
    bossesNow: bossesNow.length ? bossesNow : ['No major target is fully ready yet.'],
    bossesClose: bossesClose.length ? bossesClose : ['No close boss targets yet — build core stats/quests first.'],
    gearSuggestions,
    missingUnlocks,
    warnings,
    notes,
    summaryText
  };
}
