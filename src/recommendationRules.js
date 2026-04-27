/**
 * Simple rule-based recommendation engine for MVP.
 * Keep this file focused on data and logic so it can be expanded later.
 */

export const budgetOptions = ['0–1M', '1–10M', '10–50M', '50M+'];

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
  { key: 'sinsOfTheFather', label: 'Sins of the Father' }
];

const totalCombat = (s) =>
  s.attack + s.strength + s.defence + s.ranged + s.magic + s.prayer + s.hitpoints + s.slayer;

const suggestedGearByBudget = {
  '0–1M': 'Focus on cheap core upgrades: rune crossbow + broad bolts, dragon scimitar, and basic prayer gear switches.',
  '1–10M': 'Aim for Fighter Torso / Barrows pieces, Trident of the seas, and better ammo or imbued god cape setup.',
  '10–50M': 'Upgrade into Blowpipe, toxic trident setup, and stronger defensive pieces for mid-game PvM consistency.',
  '50M+': 'Start building specialized boss setups (Zulrah/Vorkath) with stronger weapons and prayer-boosting gear.'
};

export function getRecommendations(profile) {
  const { stats, quests, budget } = profile;

  const explanations = [];
  const bossesNow = [];
  const closeUnlocks = [];

  let bestGoal = 'Build a balanced combat base (70+ combat stats) and keep questing for key unlocks.';
  let skillToTrain = 'Train Strength for faster melee progression and easier general PvM.';

  if (stats.prayer < 43) {
    bestGoal = 'Get 43 Prayer for all core protection prayers.';
    skillToTrain = 'Prayer';
    explanations.push('Protection prayers dramatically improve survivability in quests and PvM.');
  }

  if (!quests.recipeForDisaster) {
    bestGoal = 'Complete Recipe for Disaster to unlock Barrows Gloves.';
    explanations.push('Barrows Gloves are one of the best-value upgrades for almost every combat style.');
  }

  if (!quests.kingsRansom && stats.defence >= 65 && stats.prayer >= 60) {
    closeUnlocks.push('King’s Ransom + Knight Waves to unlock Piety.');
    explanations.push('Piety is a major melee DPS and accuracy spike for bossing.');
  }

  if (stats.ranged >= 70 && stats.prayer >= 43) {
    bossesNow.push('Barrows runs and Fight Caves preparation.');
    explanations.push('Your Ranged + Prayer baseline supports safe beginner PvM and fire cape prep.');
  }

  if (stats.ranged >= 75 && stats.defence >= 70 && stats.prayer >= 70) {
    closeUnlocks.push('Zulrah preparation (learn rotations and gear switches).');
    explanations.push('You are close to consistent Zulrah readiness with your defensive and prayer stats.');
  }

  if (quests.dragonSlayer2 && stats.ranged >= 75) {
    bossesNow.push('Vorkath');
    explanations.push('Dragon Slayer II completion + 75 Ranged gives you a strong Vorkath entry point.');
  } else if (!quests.dragonSlayer2 && (stats.ranged >= 70 || stats.magic >= 75)) {
    closeUnlocks.push('Finish Dragon Slayer II for Vorkath access.');
  }

  if (quests.sinsOfTheFather && totalCombat(stats) >= 450) {
    closeUnlocks.push('Darkmeyer progression and Hallowed Sepulchre practice.');
    explanations.push('You have enough overall combat foundation to benefit from Darkmeyer unlock content.');
  }

  const highStats =
    stats.attack >= 80 &&
    stats.strength >= 80 &&
    stats.defence >= 75 &&
    stats.ranged >= 80 &&
    stats.magic >= 80 &&
    stats.prayer >= 70;

  if (highStats) {
    bossesNow.push('Chambers of Xeric learner raids.');
    closeUnlocks.push('Tombs of Amascut team runs, then Theatre of Blood later.');
    explanations.push('Your stats are entering raid-ready territory, especially for learner groups.');
    if (bestGoal.includes('balanced combat')) {
      bestGoal = 'Start raid readiness: mechanics practice, gear specialization, and team PvM fundamentals.';
    }
  }

  if (stats.slayer < 75) {
    skillToTrain = 'Slayer';
    explanations.push('Slayer unlocks profitable monsters and naturally improves bossing readiness.');
  } else if (stats.ranged < 80) {
    skillToTrain = 'Ranged';
  } else if (stats.magic < 80) {
    skillToTrain = 'Magic';
  }

  if (bossesNow.length === 0) {
    bossesNow.push('Giant Mole and Sarachnis (entry-level PvM).');
  }

  if (closeUnlocks.length === 0) {
    closeUnlocks.push('Work toward 75+ Ranged and key quest unlocks for Zulrah/Vorkath progression.');
  }

  if (explanations.length === 0) {
    explanations.push('Your profile suggests focusing on broad stat growth and high-impact quest unlocks next.');
  }

  return {
    bestGoal,
    bossesNow,
    closeUnlocks,
    skillToTrain,
    gearUpgrade: suggestedGearByBudget[budget],
    explanations
  };
}
