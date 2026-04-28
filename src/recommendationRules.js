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
  '0–1M': 'Focus on cheap core upgrades: rune crossbow + broad bolts, dragon scimitar, and basic prayer gear switches.',
  '1–10M': 'Aim for Fighter Torso / Barrows pieces, Trident of the seas, and better ammo or imbued god cape setup.',
  '10–50M': 'Upgrade into Blowpipe, toxic trident setup, and stronger defensive pieces for mid-game PvM consistency.',
  '50M+': 'Start building specialized boss setups (Zulrah/Vorkath) with stronger weapons and prayer-boosting gear.'
};

const PVM_BOSSES = [
  { category: 'Combat Boss', name: 'Barrows', difficulty: 'Easy', style: 'Magic / Ranged', useful: 'Great early PvM and useful mid-game gear upgrades.', teaches: 'Prayer management and efficient routing.', requirements: { stats: { attack: 50, strength: 50, defence: 50, ranged: 50, magic: 50 }, prayer: 43 }, priority: 95 },
  { category: 'Combat Boss', name: 'Giant Mole', difficulty: 'Easy', style: 'Melee / Ranged', useful: 'Low-pressure PvM with steady GP and nests.', teaches: 'Longer trip sustain and tracking.', requirements: { stats: { attack: 55, strength: 55, defence: 50 }, prayer: 43 }, priority: 85 },
  { category: 'Combat Boss', name: 'Sarachnis', difficulty: 'Medium', style: 'Melee', useful: 'Strong early-mid melee boss with good learning value.', teaches: 'Prayer timing and add cleanup.', requirements: { stats: { attack: 65, strength: 65, defence: 65 }, prayer: 43 }, priority: 88 },
  { category: 'Combat Boss', name: 'Dagannoth Rex', difficulty: 'Medium', style: 'Magic', useful: 'Excellent ring progression, especially for Ironman accounts.', teaches: 'Safe-spoting and targeted kill control.', requirements: { stats: { magic: 60, defence: 60 }, prayer: 43 }, priority: 90, accountNotes: { Ironman: 'High priority for Berserker Ring.', UIM: 'Very strong progression value despite storage limits.' } },
  { category: 'Combat Boss', name: 'King Black Dragon', difficulty: 'Easy', style: 'Melee / Ranged', useful: 'Classic early dragon boss with decent money.', teaches: 'Antifire prep and positioning.', requirements: { stats: { attack: 60, strength: 60, defence: 60, ranged: 60 }, prayer: 43 }, priority: 80 },
  { category: 'Combat Boss', name: 'Crazy Archaeologist', difficulty: 'Easy', style: 'Ranged', useful: 'Accessible wilderness boss for rune crossbow progression.', teaches: 'Dodging specials under pressure.', warning: 'Wilderness risk: PKers possible.', tags: ['wilderness'], requirements: { stats: { ranged: 60, defence: 45 }, prayer: 43 }, priority: 72 },
  { category: 'Combat Boss', name: 'Chaos Fanatic', difficulty: 'Easy', style: 'Ranged / Magic', useful: 'Quick wilderness boss with decent alchables.', teaches: 'Movement and short-trip execution.', warning: 'Wilderness risk: PKers possible.', tags: ['wilderness'], requirements: { stats: { ranged: 60, magic: 60, defence: 50 }, prayer: 43 }, priority: 70 },
  { category: 'Combat Boss', name: 'Fight Caves / Jad', difficulty: 'Medium', style: 'Ranged', useful: 'Fire cape unlock is a major account milestone.', teaches: 'Prayer switching and wave control.', requirements: { stats: { ranged: 70, defence: 60 }, prayer: 43 }, priority: 92 },
  { category: 'Combat Boss', name: 'Grotesque Guardians', difficulty: 'Medium', style: 'Melee / Ranged', useful: 'Good slayer boss for mid-game PvM growth.', teaches: 'Phase-based mechanics.', requirements: { stats: { attack: 75, strength: 75, defence: 70, ranged: 70 }, slayer: 75, prayer: 43 }, priority: 74 },
  { category: 'Combat Boss', name: 'Kraken', difficulty: 'Medium', style: 'Magic', useful: 'Consistent slayer boss and trident progression.', teaches: 'Steady PvM consistency.', requirements: { stats: { magic: 75, defence: 70 }, slayer: 87, prayer: 43 }, priority: 76 },
  { category: 'Combat Boss', name: 'Thermonuclear Smoke Devil', difficulty: 'Hard', style: 'Magic', useful: 'High-level slayer boss with valuable uniques.', teaches: 'Higher-intensity slayer bossing.', requirements: { stats: { magic: 85, defence: 75 }, slayer: 93, prayer: 70 }, priority: 66 },
  { category: 'Combat Boss', name: 'Demonic Gorillas', difficulty: 'Hard', style: 'Melee / Ranged', useful: 'Zenyte progression and strong GP.', teaches: 'Fast gear/prayer switching.', requirements: { stats: { attack: 75, strength: 75, defence: 75, ranged: 75 }, prayer: 70, quests: ['monkeyMadness2'] }, priority: 78 },
  { category: 'Combat Boss', name: 'Lizardman Shamans', difficulty: 'Medium', style: 'Ranged', useful: 'Important Dragon Warhammer progression for Ironman.', teaches: 'Sustained movement and prayer discipline.', requirements: { stats: { ranged: 70, defence: 70 }, prayer: 60 }, priority: 75, accountNotes: { Ironman: 'Top unlock value due to Dragon Warhammer.' } },
  { category: 'Combat Boss', name: 'Vorkath', difficulty: 'Hard', style: 'Ranged', useful: 'Top solo money maker and account progression check.', teaches: 'Pattern consistency and anti-one-shot mechanics.', warning: 'Punishing mechanics; prepare properly.', tags: ['high-risk'], requirements: { stats: { ranged: 75, defence: 70 }, prayer: 70, quests: ['dragonSlayer2'] }, priority: 94 },
  { category: 'Combat Boss', name: 'Zulrah', difficulty: 'Hard', style: 'Magic / Ranged', useful: 'Strong GP and supplies, especially for long-term progression.', teaches: 'Rotation memory and switch discipline.', warning: 'Steep learning curve and frequent deaths while learning.', tags: ['high-risk'], requirements: { stats: { ranged: 75, magic: 75, defence: 70 }, prayer: 70 }, priority: 91 },
  { category: 'Combat Boss', name: 'Phantom Muspah', difficulty: 'Hard', style: 'Magic / Ranged', useful: 'Strong modern solo money maker.', teaches: 'Switching and movement under pressure.', requirements: { stats: { ranged: 80, magic: 80, defence: 75 }, prayer: 70, quests: ['secretsOfTheNorth'] }, priority: 84 },
  { category: 'Combat Boss', name: 'The Gauntlet', difficulty: 'Hard', style: 'Hybrid', useful: 'Huge progression value and elite mechanics training.', teaches: 'Resource prep and clean execution.', requirements: { stats: { attack: 80, strength: 80, defence: 80, ranged: 80, magic: 80 }, prayer: 70, quests: ['songOfTheElves'] }, priority: 93 },
  { category: 'Combat Boss', name: 'Corrupted Gauntlet', difficulty: 'Endgame', style: 'Hybrid', useful: 'Endgame solo challenge with high progression rewards.', teaches: 'High-APM consistency.', warning: 'Very punishing for mistakes.', tags: ['high-risk'], requirements: { stats: { attack: 85, strength: 85, defence: 85, ranged: 85, magic: 85 }, prayer: 74, quests: ['songOfTheElves'] }, priority: 82 },
  { category: 'Raid', name: 'Tombs of Amascut (Beginner)', difficulty: 'Medium', style: 'Hybrid / Group', useful: 'Most accessible raid with strong account progression value.', teaches: 'Raid fundamentals and team coordination.', tags: ['raid'], requirements: { stats: { attack: 70, strength: 70, defence: 70, ranged: 70, magic: 70 }, prayer: 70, quests: ['beneathCursedSands'] }, priority: 89 },
  { category: 'Raid', name: 'Chambers of Xeric (Beginner)', difficulty: 'Hard', style: 'Hybrid / Group', useful: 'Excellent long-term raid progression and unique upgrades.', teaches: 'Group mechanics and role execution.', tags: ['raid'], requirements: { stats: { attack: 80, strength: 80, defence: 80, ranged: 80, magic: 80 }, prayer: 70 }, priority: 87 },
  { category: 'Raid', name: 'Theatre of Blood (Entry Mode)', difficulty: 'Hard', style: 'Group', useful: 'Strong mechanics practice before normal ToB.', teaches: 'Advanced team movement and role timing.', warning: 'High failure rate while learning.', tags: ['raid', 'high-risk'], requirements: { stats: { attack: 80, strength: 80, defence: 80, ranged: 80, magic: 80 }, prayer: 70 }, priority: 79 }
];

const SKILLING_ACTIVITIES = [
  { category: 'Skilling Boss', name: 'Tempoross', trackedSkill: 'fishing', minimumLevel: 35, recommendedLevel: 60 },
  { category: 'Skilling Boss', name: 'Wintertodt', trackedSkill: 'firemaking', minimumLevel: 50, recommendedLevel: 50 },
  { category: 'Skilling Boss', name: 'Hespori', trackedSkill: 'farming', minimumLevel: 65, recommendedLevel: 65 }
];

function getQuestLabel(questKey) {
  return questList.find((q) => q.key === questKey)?.label || questKey;
}

function evaluatePvm(profile, boss) {
  const { stats, quests } = profile;
  const req = boss.requirements || {};

  const missingStats = Object.entries(req.stats || {})
    .map(([skill, level]) => ({ skill, current: stats[skill] ?? 1, needed: level, gap: Math.max(level - (stats[skill] ?? 1), 0) }))
    .filter((s) => s.gap > 0);

  const missingPrayer = req.prayer && stats.prayer < req.prayer ? req.prayer - stats.prayer : 0;
  const missingSlayer = req.slayer && stats.slayer < req.slayer ? req.slayer - stats.slayer : 0;
  const missingQuests = (req.quests || []).filter((q) => !quests[q]);

  const isNow = missingStats.length === 0 && missingPrayer === 0 && missingSlayer === 0 && missingQuests.length === 0;

  const totalStatGap = missingStats.reduce((sum, s) => sum + s.gap, 0);
  const largestStatGap = missingStats.reduce((max, s) => Math.max(max, s.gap), 0);
  const isClose =
    !isNow &&
    missingQuests.length <= 1 &&
    missingSlayer <= 5 &&
    missingPrayer <= 8 &&
    totalStatGap <= 15 &&
    largestStatGap <= 8;

  return { missingStats, missingPrayer, missingSlayer, missingQuests, isNow, isClose };
}

function mapBossOutput(boss, evaluation, accountType) {
  const met = [];
  const missing = [];

  Object.entries(boss.requirements?.stats || {}).forEach(([skill, needed]) => {
    const current = evaluation.missingStats.find((s) => s.skill === skill)?.current ?? needed;
    if (current >= needed) met.push(`${skill} ${current}/${needed}`);
    else missing.push(`${skill} ${current}/${needed}`);
  });

  if (boss.requirements?.prayer) {
    const current = boss.requirements.prayer - evaluation.missingPrayer;
    if (evaluation.missingPrayer === 0) met.push(`prayer ${current}/${boss.requirements.prayer}`);
    else missing.push(`prayer ${current}/${boss.requirements.prayer}`);
  }

  if (boss.requirements?.slayer) {
    const current = boss.requirements.slayer - evaluation.missingSlayer;
    if (evaluation.missingSlayer === 0) met.push(`slayer ${current}/${boss.requirements.slayer}`);
    else missing.push(`slayer ${current}/${boss.requirements.slayer}`);
  }

  (boss.requirements?.quests || []).forEach((q) => {
    if (evaluation.missingQuests.includes(q)) missing.push(getQuestLabel(q));
    else met.push(getQuestLabel(q));
  });

  const hardcoreExtra =
    accountType === 'Hardcore Ironman' && ((boss.tags || []).includes('wilderness') || (boss.tags || []).includes('high-risk') || (boss.tags || []).includes('raid'))
      ? ' Hardcore note: very high death risk.'
      : '';

  const accountNote = boss.accountNotes?.[accountType] || '';

  return {
    name: boss.name,
    category: boss.category,
    difficulty: boss.difficulty,
    style: boss.style,
    why: boss.useful,
    teaches: boss.teaches,
    requirementsMet: met,
    requirementsMissing: missing,
    warning: `${boss.warning || ''}${hardcoreExtra}`.trim(),
    accountNote,
    priority: boss.priority + (accountType === 'Main' ? 4 : 0) + ((accountType === 'Ironman' || accountType === 'UIM') ? 6 : 0)
  };
}

export function getRecommendations(profile) {
  const { stats, quests, budget, accountType = 'Main' } = profile;

  const explanations = [];
  let bestGoal = 'Build a balanced combat base (70+ combat stats) and keep questing for key unlocks.';
  let skillToTrain = 'Strength';

  if (stats.prayer < 43) {
    bestGoal = 'Get 43 Prayer for all core protection prayers.';
    skillToTrain = 'Prayer';
  } else if (!quests.recipeForDisaster) {
    bestGoal = 'Complete Recipe for Disaster to unlock Barrows Gloves.';
  }

  if (stats.slayer < 75) skillToTrain = 'Slayer';
  else if (stats.ranged < 80) skillToTrain = 'Ranged';
  else if (stats.magic < 80) skillToTrain = 'Magic';

  const now = [];
  const close = [];
  const locked = [];

  PVM_BOSSES.forEach((boss) => {
    const evaluation = evaluatePvm(profile, boss);
    const mapped = mapBossOutput(boss, evaluation, accountType);

    if (evaluation.isNow) now.push(mapped);
    else if (evaluation.isClose) close.push(mapped);
    else locked.push(mapped);
  });

  const sortDesc = (a, b) => b.priority - a.priority;
  now.sort(sortDesc);
  close.sort(sortDesc);
  locked.sort(sortDesc);

  const skillingActivities = SKILLING_ACTIVITIES.map((activity) => {
    const trackedValue = stats[activity.trackedSkill];
    if (typeof trackedValue !== 'number') {
      return {
        name: activity.name,
        category: activity.category,
        note: `Not recommended yet: ${activity.name} — ${activity.trackedSkill} level is not tracked in this version.`
      };
    }

    if (trackedValue < activity.recommendedLevel) {
      return {
        name: activity.name,
        category: activity.category,
        note: `Not recommended yet: ${activity.name} — ${activity.trackedSkill} ${trackedValue}/${activity.recommendedLevel} (minimum ${activity.minimumLevel}).`
      };
    }

    return {
      name: activity.name,
      category: activity.category,
      note: `Ready: ${activity.name} — ${activity.trackedSkill} ${trackedValue}/${activity.recommendedLevel}.`
    };
  });

  if (accountType === 'Main') explanations.push('Account type note: mains are weighted slightly toward efficient GP PvM.');
  if (accountType === 'Ironman' || accountType === 'UIM') explanations.push('Account type note: iron accounts are weighted toward unlock value.');
  if (accountType === 'Hardcore Ironman') explanations.push('Account type note: high-risk content gets stronger warnings for Hardcore safety.');
  explanations.push('Combat Bosses You Can Try Now only includes combat PvM and raids with requirements met.');
  explanations.push('Skilling activities are separated and suppressed from combat recommendations when stats are not tracked.');

  return {
    bestGoal,
    bossesNow: now.slice(0, 8).map((b) => b.name),
    closeUnlocks: close.slice(0, 8).map((b) => b.name),
    lockedForLater: locked.slice(0, 8).map((b) => b.name),
    bossesNowDetailed: now.slice(0, 8),
    closeBossesDetailed: close.slice(0, 8),
    lockedBossesDetailed: locked.slice(0, 8),
    skillingActivities,
    skillToTrain,
    gearUpgrade: suggestedGearByBudget[budget],
    explanations
  };
}
