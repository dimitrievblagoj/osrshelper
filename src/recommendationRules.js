/**
 * Rule + weighted scoring recommendation engine.
 * This file is intentionally data-driven so new quests/bosses/gear can be added quickly.
 */

export const budgetOptions = ['0–1M', '1–10M', '10–50M', '50M+'];
export const accountTypeOptions = ['Main', 'Ironman', 'Group Ironman', 'Hardcore Ironman'];

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

const suggestedGearByBudget = {
  '0–1M': 'Prioritize inexpensive core items: rune crossbow, broad bolts, dragon scimitar, and prayer bonus swaps.',
  '1–10M': 'Add Barrows armor pieces, Trident of the seas, and a stronger ranged setup for early PvM consistency.',
  '10–50M': 'Look for blowpipe/trident upgrades, improved melee strength gear, and specialized switches per boss.',
  '50M+': 'Build role-specific loadouts for Zulrah, Vorkath, and raids with stronger weapons and optimized switches.'
};

const bossTemplates = {
  barrows: {
    name: 'Barrows',
    min: (s) => s.ranged >= 70 && s.prayer >= 43,
    close: (s) => s.ranged >= 65 && s.prayer >= 40,
    gear: {
      '0–1M': ['Rune crossbow', 'Broad bolts', 'Iban blast / wind spells', 'Prayer potions'],
      '1–10M': ['Karil or tank body', 'Trident of the seas', 'Mystic switch', 'Teleport tabs'],
      '10–50M': ['Better mage accuracy gear', 'Blowpipe for tunnels', 'Stamina + prayer setup'],
      '50M+': ['Maximize DPS switch set', 'High prayer bonus gear', 'Quality-of-life teleports']
    },
    checklist: ['43+ Prayer', 'Teleport to Burgh de Rott or Barrows', 'Basic food + prayer potions']
  },
  vorkath: {
    name: 'Vorkath',
    min: (s, q) => q.dragonSlayer2 && s.ranged >= 75,
    close: (s, q) => s.ranged >= 72 && (q.dragonSlayer2 || s.magic >= 75),
    gear: {
      '0–1M': ['Not recommended yet: focus on quest/stat unlocks first'],
      '1–10M': ['Budget crossbow setup', 'Antifire support', 'Salve (ei) if available'],
      '10–50M': ['Stronger crossbow/blowpipe variants', 'Extended antifire supplies', 'Spec weapon option'],
      '50M+': ['Dedicated Vorkath ranged setup', 'High DPS weapon', 'Optimized inventory pathing']
    },
    checklist: ['Dragon Slayer II completed', 'Anti-dragon protection plan', 'Reliable food + potion sustain']
  },
  zulrah: {
    name: 'Zulrah (prep)',
    min: (s) => s.ranged >= 75 && s.magic >= 75 && s.defence >= 70 && s.prayer >= 70,
    close: (s) => s.ranged >= 72 && s.magic >= 72 && s.defence >= 68,
    gear: {
      '0–1M': ['Not recommended yet: finish stat milestones first'],
      '1–10M': ['Simple trident + ranged swap', 'Antipoison support', 'Prayer gear foundation'],
      '10–50M': ['Stronger trident/ranged combo', '2-way to 4-way switches', 'Stamina-friendly setup'],
      '50M+': ['Dedicated mage/ranged loadout', 'High DPS switches', 'Rotation learning setup']
    },
    checklist: ['75+ Ranged and Magic target', 'Rotation helper/practice', 'Consistent prayer switching']
  }
};

const totalCombat = (s) =>
  s.attack + s.strength + s.defence + s.ranged + s.magic + s.prayer + s.hitpoints + s.slayer;

function getGoalScores(profile) {
  const { stats, quests, diaries, untradeables } = profile;
  const scores = [
    {
      key: 'prayer43',
      goal: 'Get 43 Prayer for core protection prayers.',
      score: stats.prayer < 43 ? 100 : 0,
      why: 'Protection prayers are a foundational PvM unlock.'
    },
    {
      key: 'barrowsGloves',
      goal: 'Complete Recipe for Disaster and secure Barrows Gloves.',
      score: !quests.recipeForDisaster || !untradeables.barrowsGloves ? 92 : 0,
      why: 'Barrows Gloves are one of the best account-wide combat upgrades.'
    },
    {
      key: 'piety',
      goal: 'Complete King’s Ransom and unlock Piety.',
      score: !quests.kingsRansom && stats.defence >= 65 && stats.prayer >= 60 ? 88 : 20,
      why: 'Piety dramatically improves melee performance.'
    },
    {
      key: 'fireCape',
      goal: 'Earn your Fire Cape from the Fight Caves.',
      score: !untradeables.fireCape && stats.ranged >= 70 && stats.prayer >= 43 ? 82 : 15,
      why: 'Fire Cape is a major melee progression milestone.'
    },
    {
      key: 'slayer75',
      goal: 'Push Slayer to 75 for better profit and boss paths.',
      score: stats.slayer < 75 ? 84 - Math.floor(stats.slayer / 4) : 18,
      why: 'Slayer naturally improves combat stats and unlocks stronger monsters.'
    },
    {
      key: 'questGateways',
      goal: 'Finish Sins of the Father / Song of the Elves / Beneath Cursed Sands unlock line.',
      score:
        (!quests.sinsOfTheFather ? 18 : 0) + (!quests.songOfTheElves ? 22 : 0) + (!quests.beneathCursedSands ? 22 : 0),
      why: 'These quests unlock major modern progression lanes and PvM content.'
    },
    {
      key: 'diaryUtility',
      goal: 'Complete Medium/Hard diaries for utility upgrades.',
      score:
        (!diaries.varrockMedium ? 8 : 0) +
        (!diaries.lumbridgeMedium ? 8 : 0) +
        (!diaries.morytaniaHard ? 12 : 0) +
        (!diaries.westernProvincesHard ? 12 : 0),
      why: 'Diaries provide passive quality-of-life and strong long-term account value.'
    }
  ];

  return scores.sort((a, b) => b.score - a.score);
}

export function getRecommendations(profile) {
  const { stats, quests, budget, accountType } = profile;

  const explanations = [];
  const bossesNow = [];
  const closeUnlocks = [];
  const bossSetups = [];

  const goalScores = getGoalScores(profile);
  const bestGoal = goalScores[0].goal;

  goalScores.slice(0, 3).forEach((g) => {
    if (g.score > 0) explanations.push(`${g.goal} (priority ${g.score}) — ${g.why}`);
  });

  Object.values(bossTemplates).forEach((boss) => {
    if (boss.min(stats, quests)) {
      bossesNow.push(boss.name);
      bossSetups.push({
        boss: boss.name,
        gear: boss.gear[budget],
        checklist: boss.checklist
      });
    } else if (boss.close(stats, quests)) {
      closeUnlocks.push(`${boss.name}: close to unlock, finish stat/quest requirements.`);
    }
  });

  if (quests.sinsOfTheFather && totalCombat(stats) >= 450) {
    closeUnlocks.push('Darkmeyer progression and Hallowed Sepulchre pathing practice.');
  }

  const highStats =
    stats.attack >= 80 &&
    stats.strength >= 80 &&
    stats.defence >= 75 &&
    stats.ranged >= 80 &&
    stats.magic >= 80 &&
    stats.prayer >= 70;

  if (highStats) {
    bossesNow.push('Chambers of Xeric (learner)');
    closeUnlocks.push('Tombs of Amascut (entry/normal), Theatre of Blood later.');
    bossSetups.push({
      boss: 'Chambers of Xeric (learner)',
      gear: [
        'Generalist tribrid setup',
        'Stamina + prayer management supplies',
        'Team voice/role prep'
      ],
      checklist: ['80+ core combat stats', 'Basic raid role understanding', 'Learner-friendly team']
    });
  }

  let skillToTrain = 'Strength';
  if (stats.prayer < 43) skillToTrain = 'Prayer';
  else if (stats.slayer < 75) skillToTrain = 'Slayer';
  else if (stats.ranged < 80) skillToTrain = 'Ranged';
  else if (stats.magic < 80) skillToTrain = 'Magic';

  if (bossesNow.length === 0) bossesNow.push('Giant Mole / Sarachnis (entry PvM)');
  if (closeUnlocks.length === 0) closeUnlocks.push('Work toward 75+ Ranged/Magic and major quest unlocks.');

  if (accountType !== 'Main') {
    explanations.push('Account type note: prioritize self-sufficient upgrades, skilling supplies, and unlock routes.');
  }

  return {
    bestGoal,
    bossesNow,
    closeUnlocks,
    skillToTrain,
    gearUpgrade: suggestedGearByBudget[budget],
    explanations,
    bossSetups,
    topGoals: goalScores.slice(0, 3)
  };
}
