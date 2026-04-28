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
  { key: 'kingsRansom', label: 'King’s Ransom' },
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

const BOSSES = [
  { name: 'Obor', difficulty: 'Beginner', style: 'Melee / Ranged', useful: 'Easy early giant boss and beginner key usage.', teaches: 'Basic boss movement and prayer swaps.', requirements: { stats: { attack: 45, strength: 45, defence: 40 }, prayer: 1 }, value: { progression: 4, money: 2, unlock: 2, learning: 5 } },
  { name: 'Bryophyta', difficulty: 'Beginner', style: 'Magic / Ranged', useful: 'Beginner moss giant boss; steady intro PvM drops.', teaches: 'Target priority and preserving supplies.', requirements: { stats: { magic: 50, ranged: 50, defence: 40 }, prayer: 1 }, value: { progression: 4, money: 2, unlock: 2, learning: 5 } },
  { name: 'Barrows', difficulty: 'Easy', style: 'Magic / Ranged', useful: 'Great early PvM and important mid-game gear source.', teaches: 'Prayer management, routing, and low-risk chest runs.', requirements: { stats: { attack: 50, strength: 50, defence: 50, magic: 50, ranged: 50 }, prayer: 43 }, value: { progression: 8, money: 5, unlock: 9, learning: 7 }, accountNotes: { Ironman: 'Very high value for early tank gear and rune supply.', UIM: 'Strong value but bank-space constraints matter for sets.' } },
  { name: 'Giant Mole', difficulty: 'Easy', style: 'Melee / Ranged', useful: 'Simple consistent GP and nests for Herblore.', teaches: 'Tracking and sustaining longer boss trips.', requirements: { stats: { attack: 55, strength: 55, defence: 50 }, prayer: 43 }, value: { progression: 5, money: 5, unlock: 3, learning: 5 } },
  { name: 'Crazy Archaeologist', difficulty: 'Easy', style: 'Ranged', useful: 'Quick wilderness boss for early GP and rune crossbow component.', teaches: 'Dodging special attacks under pressure.', warning: 'Wilderness risk: PKers possible.', tags: ['wilderness'], requirements: { stats: { ranged: 60, defence: 45 }, prayer: 43 }, value: { progression: 4, money: 5, unlock: 3, learning: 5 } },
  { name: 'Chaos Fanatic', difficulty: 'Easy', style: 'Ranged / Magic', useful: 'Fast wilderness kills with useful alchables and shard chance.', teaches: 'Movement and fast banking around PvP zones.', warning: 'Wilderness risk: PKers possible.', tags: ['wilderness'], requirements: { stats: { ranged: 60, magic: 60, defence: 50 }, prayer: 43 }, value: { progression: 4, money: 5, unlock: 3, learning: 6 } },
  { name: 'Scorpia', difficulty: 'Medium', style: 'Magic', useful: 'Wilderness boss with high danger and useful combat practice.', teaches: 'Prayer and add control in dangerous zones.', warning: 'High wilderness danger and PK pressure.', tags: ['wilderness'], requirements: { stats: { magic: 75, defence: 70 }, prayer: 70 }, value: { progression: 4, money: 6, unlock: 2, learning: 7 } },
  { name: 'King Black Dragon', difficulty: 'Easy', style: 'Melee / Ranged', useful: 'Classic early dragon boss with steady profits.', teaches: 'Antifire setup and safe route planning.', requirements: { stats: { attack: 60, strength: 60, defence: 60, ranged: 60 }, prayer: 43 }, value: { progression: 6, money: 5, unlock: 4, learning: 6 } },
  { name: 'Hespori', difficulty: 'Beginner', style: 'Melee', useful: 'Low-risk farming boss and seed/herb support.', teaches: 'Simple timing mechanics and patch routine.', requirements: { stats: { attack: 50, strength: 50, defence: 45 }, prayer: 1 }, value: { progression: 4, money: 3, unlock: 4, learning: 4 } },
  { name: 'Wintertodt', difficulty: 'Beginner', style: 'Skilling', useful: 'Great early resources and Firemaking progression.', teaches: 'Team PvM/skilling rhythm and inventory flow.', requirements: { stats: { hitpoints: 10 }, prayer: 1 }, value: { progression: 6, money: 3, unlock: 5, learning: 3 } },
  { name: 'Tempoross', difficulty: 'Beginner', style: 'Skilling', useful: 'Reliable supplies and low-stress account progression.', teaches: 'Encounter pacing and team objective awareness.', requirements: { stats: { hitpoints: 20 }, prayer: 1 }, value: { progression: 6, money: 3, unlock: 5, learning: 4 } },
  { name: 'Sarachnis', difficulty: 'Medium', style: 'Melee', useful: 'Strong early-mid boss with decent GP and melee practice.', teaches: 'Prayer flicking and add cleanup.', requirements: { stats: { attack: 65, strength: 65, defence: 65 }, prayer: 43 }, value: { progression: 7, money: 6, unlock: 5, learning: 7 } },
  { name: 'Dagannoth Rex', difficulty: 'Medium', style: 'Magic', useful: 'Excellent ring grind and stable mid-game PvM.', teaches: 'Safe-spot control and single-target focus.', requirements: { stats: { magic: 60, defence: 60 }, prayer: 43 }, value: { progression: 8, money: 6, unlock: 9, learning: 6 }, accountNotes: { Ironman: 'Top priority for Berserker Ring progression.', 'Hardcore Ironman': 'Take extra care with setup and exits due to death risk.' } },
  { name: 'Dagannoth Prime', difficulty: 'Medium', style: 'Ranged', useful: 'Adds DK tribrid practice and ring progression.', teaches: 'Target switching and tribrid positioning.', requirements: { stats: { ranged: 70, defence: 70 }, prayer: 43 }, value: { progression: 7, money: 6, unlock: 6, learning: 7 } },
  { name: 'Dagannoth Supreme', difficulty: 'Medium', style: 'Melee', useful: 'Completes DKs progression with melee ring chase.', teaches: 'Melee pathing and tribrid consistency.', requirements: { stats: { attack: 70, strength: 70, defence: 70 }, prayer: 43 }, value: { progression: 7, money: 6, unlock: 6, learning: 7 } },
  { name: 'Fight Caves / Jad', difficulty: 'Medium', style: 'Ranged', useful: 'Fire cape is a major account power spike.', teaches: 'Prayer reaction and wave planning.', requirements: { stats: { ranged: 70, defence: 60 }, prayer: 43 }, value: { progression: 9, money: 2, unlock: 8, learning: 8 } },
  { name: 'Calvar’ion', difficulty: 'Medium', style: 'Melee', useful: 'Accessible wilderness boss for voidwaker progression.', teaches: 'Fast kills and anti-PK awareness.', warning: 'Wilderness risk: PKers possible.', tags: ['wilderness'], requirements: { stats: { attack: 70, strength: 70, defence: 65 }, prayer: 43 }, value: { progression: 6, money: 7, unlock: 6, learning: 7 } },
  { name: 'Spindel', difficulty: 'Medium', style: 'Melee', useful: 'Wilderness progression boss with strong unique value.', teaches: 'Positioning and add handling in dangerous zones.', warning: 'Wilderness risk: PKers possible.', tags: ['wilderness'], requirements: { stats: { attack: 75, strength: 75, defence: 70 }, prayer: 70 }, value: { progression: 6, money: 7, unlock: 6, learning: 7 } },
  { name: 'Artio', difficulty: 'Medium', style: 'Magic / Ranged', useful: 'Wilderness boss with decent GP and unique chase.', teaches: 'Kiting and adapting to pressure.', warning: 'Wilderness risk: PKers possible.', tags: ['wilderness'], requirements: { stats: { magic: 75, ranged: 75, defence: 70 }, prayer: 70 }, value: { progression: 6, money: 7, unlock: 6, learning: 7 } },
  { name: 'Grotesque Guardians', difficulty: 'Medium', style: 'Melee / Ranged', useful: 'Solid slayer boss for mid-game gear and GP.', teaches: 'Multi-phase mechanics and positioning.', requirements: { stats: { attack: 75, strength: 75, defence: 70, ranged: 70 }, slayer: 75, prayer: 43 }, value: { progression: 7, money: 6, unlock: 7, learning: 7 } },
  { name: 'Kraken', difficulty: 'Medium', style: 'Magic', useful: 'Consistent slayer boss GP and trident progression.', teaches: 'Relaxed bossing consistency and trip management.', requirements: { stats: { magic: 75, defence: 70 }, slayer: 87, prayer: 43 }, value: { progression: 8, money: 7, unlock: 7, learning: 5 } },
  { name: 'Thermonuclear Smoke Devil', difficulty: 'Hard', style: 'Magic', useful: 'High-level slayer boss with strong unique drops.', teaches: 'Higher-level slayer boss execution.', requirements: { stats: { magic: 85, defence: 75 }, slayer: 93, prayer: 70 }, value: { progression: 8, money: 8, unlock: 8, learning: 6 } },
  { name: 'Demonic Gorillas', difficulty: 'Hard', style: 'Melee / Ranged', useful: 'Excellent money and zenyte progression.', teaches: 'Gear/prayer switching under pressure.', requirements: { stats: { attack: 75, strength: 75, defence: 75, ranged: 75 }, prayer: 70, quests: ['monkeyMadness2'] }, value: { progression: 8, money: 8, unlock: 7, learning: 8 } },
  { name: 'Lizardman Shamans', difficulty: 'Medium', style: 'Ranged', useful: 'Dragon Warhammer grind and strong long-term value.', teaches: 'Sustained movement and prayer discipline.', requirements: { stats: { ranged: 70, defence: 70 }, prayer: 60 }, value: { progression: 7, money: 7, unlock: 9, learning: 6 }, accountNotes: { Ironman: 'Very high priority for Dragon Warhammer progression.' } },
  { name: 'Vorkath', difficulty: 'Hard', style: 'Ranged', useful: 'Top solo GP boss and strong account progression benchmark.', teaches: 'Pattern recognition and consistent PvM execution.', warning: 'High-damage mechanics punish mistakes.', tags: ['high-risk'], requirements: { stats: { ranged: 75, defence: 70 }, prayer: 70, quests: ['dragonSlayer2'] }, value: { progression: 9, money: 9, unlock: 8, learning: 8 } },
  { name: 'Zulrah', difficulty: 'Hard', style: 'Magic / Ranged', useful: 'Excellent GP and supplies, especially long-term.', teaches: 'Rotations, gear switches, and prayer swaps.', warning: 'Steep learning curve and punishing mistakes.', tags: ['high-risk'], requirements: { stats: { ranged: 75, magic: 75, defence: 70 }, prayer: 70 }, value: { progression: 9, money: 9, unlock: 8, learning: 9 }, accountNotes: { Ironman: 'Important for scales, uniques, and long-term progression.' } },
  { name: 'Phantom Muspah', difficulty: 'Hard', style: 'Magic / Ranged', useful: 'Strong modern money maker and gear check.', teaches: 'Prayer and style switching with movement pressure.', requirements: { stats: { ranged: 80, magic: 80, defence: 75 }, prayer: 70, quests: ['secretsOfTheNorth'] }, value: { progression: 8, money: 8, unlock: 7, learning: 8 } },
  { name: 'The Gauntlet', difficulty: 'Hard', style: 'Hybrid', useful: 'No-gear-entry PvM that builds elite mechanics quickly.', teaches: 'Resource prep, movement, and clean execution.', requirements: { stats: { attack: 80, strength: 80, defence: 80, ranged: 80, magic: 80 }, prayer: 70, quests: ['songOfTheElves'] }, value: { progression: 10, money: 8, unlock: 10, learning: 10 }, accountNotes: { Ironman: 'Huge value for Bowfa progression path.' } },
  { name: 'Corrupted Gauntlet', difficulty: 'Endgame', style: 'Hybrid', useful: 'High-value solo PvM and top-tier mechanical practice.', teaches: 'High APM consistency and advanced movement.', warning: 'High execution requirement; mistake-heavy for learners.', tags: ['high-risk'], requirements: { stats: { attack: 85, strength: 85, defence: 85, ranged: 85, magic: 85 }, prayer: 74, quests: ['songOfTheElves'] }, value: { progression: 10, money: 9, unlock: 10, learning: 10 } },
  { name: 'Duke Sucellus', difficulty: 'Hard', style: 'Melee', useful: 'DT2 post-quest boss with valuable uniques.', teaches: 'Pattern reading and efficient rotations.', warning: 'High damage output if mechanics are missed.', tags: ['high-risk'], requirements: { stats: { attack: 85, strength: 85, defence: 85 }, prayer: 74, quests: ['desertTreasure2'] }, value: { progression: 9, money: 8, unlock: 8, learning: 8 } },
  { name: 'Vardorvis', difficulty: 'Hard', style: 'Melee', useful: 'Fast DT2 boss with excellent melee profit potential.', teaches: 'Tight movement and reaction timing.', warning: 'Very punishing for mistakes.', tags: ['high-risk'], requirements: { stats: { attack: 85, strength: 85, defence: 85 }, prayer: 74, quests: ['desertTreasure2'] }, value: { progression: 9, money: 9, unlock: 8, learning: 9 } },
  { name: 'The Leviathan', difficulty: 'Hard', style: 'Ranged', useful: 'Strong DT2 ranged money-maker with high mechanical demand.', teaches: 'Prayer timing and positioning fundamentals.', warning: 'Very punishing for mistakes.', tags: ['high-risk'], requirements: { stats: { ranged: 85, defence: 85 }, prayer: 74, quests: ['desertTreasure2'] }, value: { progression: 9, money: 9, unlock: 8, learning: 9 } },
  { name: 'The Whisperer', difficulty: 'Hard', style: 'Magic', useful: 'High-level magic-focused DT2 boss with valuable drops.', teaches: 'Movement + prayer composure under stress.', warning: 'Very punishing for mistakes.', tags: ['high-risk'], requirements: { stats: { magic: 85, defence: 85 }, prayer: 74, quests: ['desertTreasure2'] }, value: { progression: 9, money: 9, unlock: 8, learning: 9 } },
  { name: 'Araxxor', difficulty: 'Endgame', style: 'Melee / Ranged', useful: 'Endgame mechanical boss with premium rewards.', teaches: 'Long-form encounter planning and consistency.', warning: 'Endgame-level mechanics and punishment.', tags: ['high-risk'], requirements: { stats: { attack: 90, strength: 90, defence: 88, ranged: 88 }, prayer: 77, slayer: 92 }, value: { progression: 9, money: 9, unlock: 9, learning: 9 } },
  { name: 'Tombs of Amascut (Beginner)', difficulty: 'Medium', style: 'Hybrid / Group', useful: 'Most accessible raid with strong learning and progression value.', teaches: 'Raid mechanics, team roles, and execution.', tags: ['raid'], requirements: { stats: { attack: 70, strength: 70, defence: 70, ranged: 70, magic: 70 }, prayer: 70, quests: ['beneathCursedSands'] }, value: { progression: 10, money: 8, unlock: 8, learning: 10 } },
  { name: 'Chambers of Xeric (Beginner)', difficulty: 'Hard', style: 'Hybrid / Group', useful: 'Excellent long-term raid progression and unique upgrades.', teaches: 'Group coordination and advanced PvM fundamentals.', tags: ['raid'], requirements: { stats: { attack: 80, strength: 80, defence: 80, ranged: 80, magic: 80 }, prayer: 70 }, value: { progression: 10, money: 8, unlock: 9, learning: 10 } },
  { name: 'Theatre of Blood (Entry Mode)', difficulty: 'Hard', style: 'Group', useful: 'Great mechanics training before normal ToB.', teaches: 'Team mechanics, positioning, and role awareness.', warning: 'High failure rate while learning.', tags: ['raid', 'high-risk'], requirements: { stats: { attack: 80, strength: 80, defence: 80, ranged: 80, magic: 80 }, prayer: 70 }, value: { progression: 9, money: 5, unlock: 7, learning: 10 } }
];

function getQuestLabel(questKey) {
  const found = questList.find((q) => q.key === questKey);
  return found ? found.label : questKey;
}

function evaluateBoss(profile, boss) {
  const { stats, quests } = profile;
  const req = boss.requirements || {};

  const missingStats = Object.entries(req.stats || {})
    .map(([skill, level]) => ({ skill, needed: level, current: stats[skill] ?? 1, missing: Math.max(level - (stats[skill] ?? 1), 0) }))
    .filter((entry) => entry.missing > 0);

  const missingPrayer = req.prayer && stats.prayer < req.prayer ? req.prayer - stats.prayer : 0;
  const missingSlayer = req.slayer && stats.slayer < req.slayer ? req.slayer - stats.slayer : 0;
  const missingQuests = (req.quests || []).filter((questKey) => !quests[questKey]);

  const isNow = missingStats.length === 0 && missingPrayer === 0 && missingSlayer === 0 && missingQuests.length === 0;

  const totalStatGap = missingStats.reduce((sum, row) => sum + row.missing, 0);
  const biggestStatGap = missingStats.reduce((max, row) => Math.max(max, row.missing), 0);
  const isClose =
    !isNow &&
    missingQuests.length <= 1 &&
    missingPrayer <= 10 &&
    missingSlayer <= 8 &&
    totalStatGap <= 18 &&
    biggestStatGap <= 10;

  const met = [];
  const missing = [];

  Object.entries(req.stats || {}).forEach(([skill, needed]) => {
    const current = stats[skill] ?? 1;
    if (current >= needed) {
      met.push(`${skill} ${current}/${needed}`);
    } else {
      missing.push(`${skill} ${current}/${needed}`);
    }
  });

  if (req.prayer) {
    if (stats.prayer >= req.prayer) met.push(`prayer ${stats.prayer}/${req.prayer}`);
    else missing.push(`prayer ${stats.prayer}/${req.prayer}`);
  }

  if (req.slayer) {
    if (stats.slayer >= req.slayer) met.push(`slayer ${stats.slayer}/${req.slayer}`);
    else missing.push(`slayer ${stats.slayer}/${req.slayer}`);
  }

  (req.quests || []).forEach((questKey) => {
    if (quests[questKey]) met.push(getQuestLabel(questKey));
    else missing.push(getQuestLabel(questKey));
  });

  return { isNow, isClose, met, missing };
}

function bossPriorityScore(boss, accountType) {
  const base = boss.value.progression * 4 + boss.value.money * 3 + boss.value.unlock * 4 + boss.value.learning * 3;

  if (accountType === 'Ironman' || accountType === 'UIM') {
    return base + boss.value.unlock * 3 + (boss.name.includes('Raid') || boss.name.includes('Gauntlet') ? 6 : 0);
  }

  if (accountType === 'Hardcore Ironman') {
    const risky = (boss.tags || []).includes('wilderness') || (boss.tags || []).includes('high-risk') || (boss.tags || []).includes('raid');
    return base - (risky ? 8 : 0) + boss.value.unlock * 2;
  }

  return base + boss.value.money * 2;
}

function bossWarningForAccount(boss, accountType) {
  if (accountType !== 'Hardcore Ironman') {
    return boss.warning || '';
  }

  const tags = boss.tags || [];
  if (tags.includes('wilderness')) return `${boss.warning || 'Wilderness danger.'} Hardcore note: very high death risk.`;
  if (boss.name === 'Zulrah' || boss.name === 'Vorkath' || tags.includes('high-risk') || tags.includes('raid')) {
    return `${boss.warning || 'High-risk encounter.'} Hardcore note: avoid unless fully prepared.`;
  }

  return boss.warning || '';
}

function formatBossOutput(boss, evaluation, accountType) {
  const accountNote = boss.accountNotes?.[accountType] || '';
  const genericNote = (accountType === 'Ironman' || accountType === 'UIM') && !accountNote
    ? 'Account type note: prioritize unlock value and long-term upgrades over pure GP.'
    : '';

  return {
    name: boss.name,
    difficulty: boss.difficulty,
    style: boss.style,
    why: boss.useful,
    teaches: boss.teaches,
    requirementsMet: evaluation.met,
    requirementsMissing: evaluation.missing,
    warning: bossWarningForAccount(boss, accountType),
    accountNote: accountNote || genericNote,
    priority: bossPriorityScore(boss, accountType)
  };
}

export function getRecommendations(profile) {
  const { stats, quests, budget, accountType = 'Main' } = profile;

  const explanations = [];
  let bestGoal = 'Build a balanced combat base (70+ combat stats) and keep questing for key unlocks.';
  let skillToTrain = 'Train Strength for faster melee progression and easier general PvM.';

function evaluatePvm(profile, boss) {
  const { stats, quests } = profile;
  const req = boss.requirements || {};

  const missingStats = Object.entries(req.stats || {})
    .map(([skill, level]) => ({ skill, current: stats[skill] ?? 1, needed: level, gap: Math.max(level - (stats[skill] ?? 1), 0) }))
    .filter((s) => s.gap > 0);

  if (!quests.kingsRansom && stats.defence >= 65 && stats.prayer >= 60) {
    explanations.push('King’s Ransom is close and unlocks Piety, which is a major melee DPS spike.');
  }

  if (stats.slayer < 75) {
    skillToTrain = 'Slayer';
    explanations.push('Slayer unlocks profitable boss targets like Grotesque Guardians, Kraken, and Thermy.');
  } else if (stats.ranged < 80) {
    skillToTrain = 'Ranged';
  } else if (stats.magic < 80) {
    skillToTrain = 'Magic';
  }

  if (accountType === 'Ironman' || accountType === 'UIM') {
    explanations.push('Account type note: prioritizing unlock-heavy bosses (Barrows, Rex, Shamans, Zulrah, Vorkath, Gauntlet).');
  } else if (accountType === 'Hardcore Ironman') {
    explanations.push('Account type note: safety-first routing is applied for high-risk and wilderness content.');
  } else {
    explanations.push('Account type note: recommendations lean toward efficient GP and upgrades for mains.');
  }

  const nowBosses = [];
  const closeBosses = [];
  const lockedBosses = [];

  BOSSES.forEach((boss) => {
    const evaluation = evaluateBoss(profile, boss);
    const output = formatBossOutput(boss, evaluation, accountType);

    if (evaluation.isNow) nowBosses.push(output);
    else if (evaluation.isClose) closeBosses.push(output);
    else lockedBosses.push(output);
  });

  const sortByPriority = (a, b) => b.priority - a.priority;
  nowBosses.sort(sortByPriority);
  closeBosses.sort(sortByPriority);
  lockedBosses.sort(sortByPriority);

  const limitedNow = nowBosses.slice(0, 8);
  const limitedClose = closeBosses.slice(0, 8);
  const limitedLocked = lockedBosses.slice(0, 8);

  if (limitedNow.length === 0) {
    limitedNow.push({
      name: 'Giant Mole',
      difficulty: 'Easy',
      style: 'Melee / Ranged',
      why: 'Entry-level fallback boss while you build combat stats.',
      teaches: 'Prayer usage and trip sustain.',
      requirementsMet: [],
      requirementsMissing: ['attack 55', 'strength 55', 'defence 50'],
      warning: '',
      accountNote: '',
      priority: 0
    });
  }

  if (limitedClose.length === 0) {
    limitedClose.push({
      name: 'Fight Caves / Jad',
      difficulty: 'Medium',
      style: 'Ranged',
      why: 'A major account unlock to target next.',
      teaches: 'Prayer reaction and PvM consistency.',
      requirementsMet: [`prayer ${stats.prayer}/43`],
      requirementsMissing: [`ranged ${stats.ranged}/70`],
      warning: '',
      accountNote: '',
      priority: 0
    });
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
    bossesNow: limitedNow.map((boss) => boss.name),
    closeUnlocks: limitedClose.map((boss) => boss.name),
    lockedForLater: limitedLocked.map((boss) => boss.name),
    bossesNowDetailed: limitedNow,
    closeBossesDetailed: limitedClose,
    lockedBossesDetailed: limitedLocked,
    skillToTrain,
    gearUpgrade: suggestedGearByBudget[budget],
    explanations
  };
}
