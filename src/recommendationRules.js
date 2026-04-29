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
const TRACKED_MAJOR_UNLOCKS = [
  { label: 'Fire Cape', requiresQuest: null, requiresStats: { ranged: 70, defence: 60, prayer: 43 } },
  { label: 'Barrows Gloves', requiresQuest: 'recipeForDisaster' },
  { label: 'Vorkath Access', requiresQuest: 'dragonSlayer2' },
  { label: 'Phantom Muspah Access', requiresQuest: 'secretsOfTheNorth' },
  { label: 'ToA Entry Access', requiresQuest: 'beneathCursedSands' }
];

const IRONMAN_TYPES = new Set(['Ironman', 'Hardcore Ironman', 'UIM', 'Ultimate Ironman']);
const TRADE_BLOCKED_TERMS = ['buy', 'grand exchange', ' ge ', 'purchase', 'flip'];

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

function isIronmanType(accountType) {
  return IRONMAN_TYPES.has(accountType);
}

function convertToIronmanStep(step = '') {
  if (!step) return 'Progress this upgrade through Slayer, boss drops, or quest unlocks.';
  return step
    .replace(/buy/gi, 'work toward')
    .replace(/purchase/gi, 'unlock')
    .replace(/from\s+the\s+grand\s+exchange/gi, 'through drops, Slayer, or quests')
    .replace(/\bGE\b/gi, 'self-sufficient progression')
    .replace(/flip/gi, 'grind');
}

function hasTradeLanguage(value = '') {
  const normalized = ` ${String(value).toLowerCase()} `;
  return TRADE_BLOCKED_TERMS.some((term) => normalized.includes(term));
}

function adjustForAccountType(recommendations, accountType) {
  if (!isIronmanType(accountType)) return recommendations;
  return recommendations.map((rec) => {
    const needsReframe = rec.type === 'gear_upgrade' || hasTradeLanguage(rec.why) || hasTradeLanguage(rec.nextStep);
    if (!needsReframe) return rec;
    return {
      ...rec,
      reason: 'Unlock or grind this gear instead of buying it.',
      why: hasTradeLanguage(rec.why) ? 'Upgrade this setup through boss drops, Slayer rewards, and quest unlocks.' : rec.why,
      nextStep: convertToIronmanStep(rec.nextStep)
    };
  });
}

function buildNextBestAction(profile, raidEvaluations, accountType = 'Main') {
  const { stats, quests } = profile;
  const avgCombat = Math.floor((stats.attack + stats.strength + stats.defence + stats.ranged + stats.magic) / 5);

  if (accountType === 'UIM' || accountType === 'Ultimate Ironman') {
    if (!quests.recipeForDisaster) return 'Complete Recipe for Disaster first for high-impact unlock efficiency and flexible loadouts.';
    return 'Prioritize compact progression: Slayer unlocks and untradeables with low inventory friction.';
  }
  if (accountType === 'Hardcore Ironman') {
    if (avgCombat < 75 || stats.prayer < 70) return 'Build safer foundations first: raise combat stats and Prayer before high-risk bosses.';
    return 'Prioritize safe boss progression and Slayer unlocks; avoid risky content until over-prepared.';
  }
  if (accountType === 'Ironman') {
    if (!quests.recipeForDisaster) return 'Complete Recipe for Disaster to secure Barrows Gloves and self-sufficient combat progression.';
    if (stats.slayer < 75) return `Push Slayer toward 75 for Kraken and core unlock-based upgrades (${stats.slayer}/75).`;
    return 'Prioritize untradeable unlocks, Slayer progression, and boss drops over trade-based shortcuts.';
  }

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

function getAccountStage(stats) {
  const combatLevels = [stats.attack, stats.strength, stats.defence, stats.ranged, stats.magic];
  const averageCombat = combatLevels.reduce((sum, level) => sum + level, 0) / combatLevels.length;
  const highCount = combatLevels.filter((level) => level >= 95).length;

  if (highCount >= 4) return 'End Game';
  if (averageCombat >= 85) return 'Late Mid Game';
  if (averageCombat >= 70) return 'Mid Game';
  if (averageCombat >= 60) return 'Early Mid Game';
  return 'Beginner';
}

function buildProgressionSummary(profile, evaluated, nextBestAction) {
  const { stats, quests } = profile;
  const stage = getAccountStage(stats);
  const bossRecommendations = evaluated.filter((item) => item.rec.category !== 'Raids Readiness');
  const raidRecommendations = evaluated.filter((item) => item.rec.category === 'Raids Readiness');
  const bossEligible = bossRecommendations.filter((item) => item.evaluation.isEligible).length;
  const raidEligible = raidRecommendations.filter((item) => item.evaluation.isEligible).length;

  // Account Progression Score:
  // - Combat readiness (35): averaged core combat stats.
  // - Prayer readiness (15): scales prayer level to key breakpoint 77.
  // - Style readiness (20): melee/ranged/magic tribrid prep.
  // - PvM unlock depth (20): eligible boss count + raid count.
  // - Major unlock progression (10): tracked quest/stat unlocks.
  const coreCombatAverage = (stats.attack + stats.strength + stats.defence + stats.ranged + stats.magic) / 5;
  const combatScore = Math.min(35, Math.round((coreCombatAverage / 99) * 35));
  const prayerScore = Math.min(15, Math.round((stats.prayer / 77) * 15));
  const meleeReadiness = Math.min(stats.attack, stats.strength, stats.defence);
  const rangedReadiness = Math.min(stats.ranged, stats.defence);
  const magicReadiness = Math.min(stats.magic, stats.defence);
  const styleReadinessAverage = (meleeReadiness + rangedReadiness + magicReadiness) / 3;
  const styleScore = Math.min(20, Math.round((styleReadinessAverage / 90) * 20));
  const bossScore = Math.min(14, bossEligible * 2);
  const raidScore = Math.min(6, raidEligible * 2);
  const majorUnlocks = TRACKED_MAJOR_UNLOCKS.map((unlock) => {
    const questMet = unlock.requiresQuest ? Boolean(quests?.[unlock.requiresQuest]) : true;
    const statMet = unlock.requiresStats
      ? Object.entries(unlock.requiresStats).every(([skill, needed]) => getLevel(stats, skill) >= needed)
      : true;
    return { ...unlock, met: questMet && statMet };
  });
  const unlockScore = Math.round((majorUnlocks.filter((u) => u.met).length / TRACKED_MAJOR_UNLOCKS.length) * 10);
  const score = Math.min(100, combatScore + prayerScore + styleScore + bossScore + raidScore + unlockScore);

  const strongestUnlock = majorUnlocks.find((u) => u.met)?.label || 'Not tracked yet';
  const bottlenecks = [];
  if (!majorUnlocks.find((u) => u.label === 'Fire Cape')?.met) bottlenecks.push('No Fire Cape');
  if (stats.prayer < 70) bottlenecks.push('Low Prayer');
  if (stats.ranged < 75) bottlenecks.push('Low Ranged');
  if (stats.magic < 75) bottlenecks.push('Low Magic');

  const nextLateGame = evaluated
    .filter((item) => item.rec.category === 'Late Game Goals' && !item.evaluation.isEligible)
    .sort((a, b) => a.evaluation.totalGap - b.evaluation.totalGap)[0];

  return {
    accountStage: stage,
    progressionScore: score,
    strongestUnlock,
    biggestBottleneck: bottlenecks.length ? bottlenecks.join(' / ') : 'Not tracked yet',
    nextBestAction: nextLateGame ? `Push ${nextLateGame.rec.name}: ${nextLateGame.evaluation.missing.join(', ')}` : nextBestAction
  };
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
        type: 'boss_progression',
        difficulty: rec.difficulty,
        why: rec.reason,
        requirementsMet: evaluation.met,
        missingRequirements: evaluation.missing,
        nextStep: evaluation.isEligible ? `You are ready now: start with ${rec.name}.` : `Close unlock: train/complete ${evaluation.missing.join(', ')}.`,
        recommendedStats: rec.recommendedStats
      });
    }
  });

  Object.keys(byCategory).forEach((category) => {
    byCategory[category] = adjustForAccountType(byCategory[category], accountType);
  });

  const nextBestAction = buildNextBestAction(profile, evaluated.filter((r) => r.rec.category === 'Raids Readiness'), accountType);

  const explanations = [
    'Only activities with met requirements or close gaps are shown.',
    'Skilling bosses are removed from default combat recommendations.',
    `Skilling bosses excluded by default: ${SKILLING_BOSSES.join(', ')}.`,
    `${accountType} profile weighting favors progression unlocks over filler content.`
  ];

  const accountTypeActionNudge = accountType === 'UIM' || accountType === 'Ultimate Ironman'
    ? ' Every slot matters. Choose wisely.'
    : accountType === 'Hardcore Ironman'
      ? ' One mistake ends it. Play smart.'
      : accountType === 'Ironman'
        ? ' You earn everything. No shortcuts.'
        : '';

  return {
    nextBestAction: `${nextBestAction}${accountTypeActionNudge}`,
    progressionSummary: buildProgressionSummary(profile, evaluated, nextBestAction),
    categories: byCategory,
    gearUpgrade: isIronmanType(accountType)
      ? 'Build your next upgrades through quest unlocks, Slayer milestones, and boss drops instead of GE purchases.'
      : suggestedGearByBudget[budget],
    explanations
  };
}
