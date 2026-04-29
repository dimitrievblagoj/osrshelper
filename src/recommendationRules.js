export const budgetOptions = ['0–1M', '1–10M', '10–50M', '50M+'];
export const accountTypeOptions = ['Main', 'Ironman', 'UIM', 'Hardcore Ironman'];

export const questList = [
  { key: 'dragonSlayer1', label: 'Dragon Slayer I' },
  { key: 'dragonSlayer2', label: 'Dragon Slayer II' },
  { key: 'monkeyMadness1', label: 'Monkey Madness I' },
  { key: 'monkeyMadness2', label: 'Monkey Madness II' },
  { key: 'recipeForDisaster', label: 'Recipe for Disaster / Barrows Gloves' },
  { key: 'desertTreasure1', label: 'Desert Treasure I' },
  { key: 'desertTreasure2', label: 'Desert Treasure II' },
  { key: 'kingsRansom', label: "King's Ransom" },
  { key: 'priestInPeril', label: 'Priest in Peril' },
  { key: 'sinsOfTheFather', label: 'Sins of the Father' },
  { key: 'songOfTheElves', label: 'Song of the Elves' },
  { key: 'secretsOfTheNorth', label: 'Secrets of the North' },
  { key: 'beneathCursedSands', label: 'Beneath Cursed Sands' }
];

const suggestedGearByBudget = {
  '0–1M': 'Focus on cheap core upgrades: dragon scimitar, rune crossbow + broad bolts, and prayer bonus gear.',
  '1–10M': 'Aim for Fighter Torso / Barrows pieces and a Trident setup to unlock stronger mid-game bosses.',
  '10–50M': 'Upgrade into Blowpipe and toxic trident setups for Zulrah/Vorkath and raid entry readiness.',
  '50M+': 'Build specialized boss/raid setups and prioritize consistency upgrades (spec weapon, swaps, supplies).'
};

const RECOMMENDATIONS = [
  { id: 'obor', name: 'Obor', category: 'Beginner Bosses', difficulty: 'Beginner', reason: 'Easy first boss and key usage progression.', requiredStats: { attack: 45, strength: 45, defence: 40 }, requiredSkills: {}, requiredQuests: [], recommendedStats: { attack: 50, strength: 50 } },
  { id: 'bryophyta', name: 'Bryophyta', category: 'Beginner Bosses', difficulty: 'Beginner', reason: 'Good beginner PvM with light supply pressure.', requiredStats: { magic: 50, ranged: 50, defence: 40 }, requiredSkills: {}, requiredQuests: [], recommendedStats: { magic: 55, ranged: 55 } },
  { id: 'scurrius', name: 'Scurrius', category: 'Beginner Bosses', difficulty: 'Beginner', reason: 'Excellent combat XP and forgiving boss practice.', requiredStats: { attack: 50, strength: 50, defence: 45 }, requiredSkills: { prayer: 43 }, requiredQuests: [], recommendedStats: { attack: 60, strength: 60, defence: 55 } },
  { id: 'giant-mole', name: 'Giant Mole', category: 'Beginner Bosses', difficulty: 'Easy', reason: 'Simple consistent GP and herb support from nests.', requiredStats: { attack: 55, strength: 55, defence: 50 }, requiredSkills: { prayer: 43 }, requiredQuests: [], recommendedStats: { attack: 65, strength: 65, defence: 60 } },
  { id: 'kbd', name: 'King Black Dragon', category: 'Beginner Bosses', difficulty: 'Easy', reason: 'Classic early dragon boss to practice antifire and prayer.', requiredStats: { attack: 60, strength: 60, defence: 60, ranged: 60 }, requiredSkills: { prayer: 43 }, requiredQuests: [], recommendedStats: { attack: 70, strength: 70 } },
  { id: 'hespori', name: 'Hespori', category: 'Beginner Bosses', difficulty: 'Beginner', reason: 'Low-risk patch boss with useful farming supplies.', requiredStats: { attack: 50, strength: 50, defence: 45 }, requiredSkills: {}, requiredQuests: [], recommendedStats: { attack: 60, strength: 60 } },
  { id: 'barrows', name: 'Barrows', category: 'Mid Game Bosses', difficulty: 'Beginner', reason: 'Great early money maker and combat progression boss.', requiredStats: { attack: 50, strength: 50, defence: 50, magic: 50, ranged: 50 }, requiredSkills: { prayer: 43 }, requiredQuests: [], recommendedStats: { magic: 60, defence: 60 } },
  { id: 'sarachnis', name: 'Sarachnis', category: 'Mid Game Bosses', difficulty: 'Medium', reason: 'Strong early-mid PvM for mechanics and decent profit.', requiredStats: { attack: 65, strength: 65, defence: 65 }, requiredSkills: { prayer: 43 }, requiredQuests: [], recommendedStats: { attack: 75, strength: 75, defence: 70 } },
  { id: 'dks', name: 'Dagannoth Kings', category: 'Mid Game Bosses', difficulty: 'Medium', reason: 'Strong ring progression and tribrid fundamentals.', requiredStats: { attack: 70, strength: 70, defence: 70, ranged: 70, magic: 70 }, requiredSkills: { prayer: 43 }, requiredQuests: [], recommendedStats: { attack: 80, strength: 80, defence: 75 } },
  { id: 'fight-caves', name: 'Fight Caves', category: 'Mid Game Bosses', difficulty: 'Medium', reason: 'Fire Cape is a major account power spike.', requiredStats: { ranged: 70, defence: 60 }, requiredSkills: { prayer: 43 }, requiredQuests: [], recommendedStats: { ranged: 75, defence: 70 } },
  { id: 'zulrah', name: 'Zulrah', category: 'Late Game Goals', difficulty: 'Hard', reason: 'Excellent money and upgrade progression once mechanics click.', requiredStats: { ranged: 75, magic: 75, defence: 70 }, requiredSkills: { prayer: 70 }, requiredQuests: [], recommendedStats: { ranged: 85, magic: 85, defence: 75 } },
  { id: 'vorkath', name: 'Vorkath', category: 'Late Game Goals', difficulty: 'Hard', reason: 'Top solo GP benchmark and strong consistency check.', requiredStats: { ranged: 75, defence: 70 }, requiredSkills: { prayer: 70 }, requiredQuests: ['dragonSlayer2'], recommendedStats: { ranged: 85, defence: 80 } },
  { id: 'muspah', name: 'Phantom Muspah', category: 'Late Game Goals', difficulty: 'Hard', reason: 'Strong modern money-maker that rewards clean switches.', requiredStats: { ranged: 80, magic: 80, defence: 75 }, requiredSkills: { prayer: 70 }, requiredQuests: ['secretsOfTheNorth'], recommendedStats: { ranged: 90, magic: 90, defence: 80 } },
  { id: 'toa-entry', name: 'Tombs of Amascut entry mode', category: 'Raids Readiness', difficulty: 'Medium', reason: 'Best first raid to learn team roles and mechanics.', requiredStats: { attack: 70, strength: 70, defence: 70, ranged: 70, magic: 70 }, requiredSkills: { prayer: 70 }, requiredQuests: ['beneathCursedSands'], recommendedStats: { attack: 80, strength: 80, ranged: 80, magic: 80 } },
  { id: 'cox-learner', name: 'Chambers of Xeric learner', category: 'Raids Readiness', difficulty: 'Hard', reason: 'Great long-term raid progression and unique upgrades.', requiredStats: { attack: 80, strength: 80, defence: 80, ranged: 80, magic: 80 }, requiredSkills: { prayer: 70 }, requiredQuests: [], recommendedStats: { attack: 85, strength: 85, ranged: 85, magic: 85 } },
  { id: 'tob-entry', name: 'Theatre of Blood entry mode', category: 'Raids Readiness', difficulty: 'Hard', reason: 'Best introduction to ToB mechanics and role discipline.', requiredStats: { attack: 80, strength: 80, defence: 80, ranged: 80, magic: 80 }, requiredSkills: { prayer: 70 }, requiredQuests: [], recommendedStats: { attack: 85, strength: 85, ranged: 85, magic: 85 } }
];

const SKILLING_BOSSES = ['Tempoross', 'Wintertodt', 'Guardians of the Rift'];

function getQuestLabel(key) {
  return questList.find((q) => q.key === key)?.label || key;
}

function getLevel(stats, skill) {
  return Number.isFinite(stats[skill]) ? stats[skill] : 1;
}

function evaluateRequirements(profile, rec) {
  const { stats, quests } = profile;
  const met = [];
  const missing = [];

  const pushCheck = (label, current, needed) => {
    const line = `${label} ${current}/${needed}`;
    if (current >= needed) met.push(line);
    else missing.push(line);
  };

  Object.entries(rec.requiredStats || {}).forEach(([skill, needed]) => pushCheck(skill, getLevel(stats, skill), needed));
  Object.entries(rec.requiredSkills || {}).forEach(([skill, needed]) => pushCheck(skill, getLevel(stats, skill), needed));

  (rec.requiredQuests || []).forEach((quest) => {
    if (quests?.[quest]) met.push(getQuestLabel(quest));
    else missing.push(getQuestLabel(quest));
  });

  const isEligible = missing.length === 0;
  const totalGap = missing
    .map((line) => line.match(/(\d+)\/(\d+)/))
    .filter(Boolean)
    .reduce((sum, m) => sum + (Number(m[2]) - Number(m[1])), 0);
  const isClose = !isEligible && totalGap <= 18 && (rec.requiredQuests || []).filter((q) => !quests?.[q]).length <= 1;

  return { isEligible, isClose, met, missing, totalGap };
}

function buildNextBestAction(profile, raidEvaluations) {
  const { stats, quests } = profile;
  const avgCombat = Math.floor((stats.attack + stats.strength + stats.defence + stats.ranged + stats.magic) / 5);

  if (avgCombat < 65) return 'Train core combat stats to at least 65 (Attack/Strength/Defence/Ranged/Magic).';
  if (stats.prayer < 43) return `Train Prayer to 43 first (${stats.prayer}/43).`;
  if (!quests.recipeForDisaster) return 'Complete Recipe for Disaster and secure Barrows Gloves.';
  if (stats.prayer < 70) return `Train Prayer toward 70 for late-game bosses and raids (${stats.prayer}/70).`;
  if (!quests.dragonSlayer2 && stats.ranged >= 75 && stats.defence >= 70) return 'Complete Dragon Slayer II to unlock Vorkath.';

  const raidClose = raidEvaluations.find((item) => !item.evaluation.isEligible && item.evaluation.isClose);
  if (raidClose) {
    return `Push for ${raidClose.rec.name}: ${raidClose.evaluation.missing.join(', ')}.`;
  }

  return 'Start consistent Fight Caves attempts for your Fire Cape if you still need it.';
}

export function getRecommendations(profile) {
  const { budget, accountType = 'Main' } = profile;

  // Core recommendation logic is intentionally data-driven: RECOMMENDATIONS holds all PvM entries.
  const evaluated = RECOMMENDATIONS.map((rec) => ({ rec, evaluation: evaluateRequirements(profile, rec) }));

  const byCategory = {
    'Beginner Bosses': [],
    'Mid Game Bosses': [],
    'Late Game Goals': [],
    'Raids Readiness': []
  };

  evaluated.forEach(({ rec, evaluation }) => {
    if (evaluation.isEligible || evaluation.isClose) {
      byCategory[rec.category].push({
        id: rec.id,
        name: rec.name,
        category: rec.category,
        difficulty: rec.difficulty,
        why: rec.reason,
        requirementsMet: evaluation.met,
        missingRequirements: evaluation.missing,
        nextStep: evaluation.isEligible ? `You are ready now: start with ${rec.name}.` : `Close unlock: train/complete ${evaluation.missing.join(', ')}.`,
        recommendedStats: rec.recommendedStats
      });
    }
  });

  const nextBestAction = buildNextBestAction(profile, evaluated.filter((r) => r.rec.category === 'Raids Readiness'));

  const explanations = [
    'Only activities with met requirements or close gaps are shown.',
    'Skilling bosses are removed from default combat recommendations.',
    `Skilling bosses excluded by default: ${SKILLING_BOSSES.join(', ')}.`,
    `${accountType} profile weighting favors progression unlocks over filler content.`
  ];

  return {
    nextBestAction,
    categories: byCategory,
    gearUpgrade: suggestedGearByBudget[budget],
    explanations
  };
}
