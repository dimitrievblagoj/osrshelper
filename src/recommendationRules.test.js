import { describe, expect, it } from 'vitest';
import { getRecommendations } from './recommendationRules';

const baseProfile = {
  stats: {
    attack: 60,
    strength: 60,
    defence: 60,
    ranged: 60,
    magic: 60,
    prayer: 43,
    hitpoints: 60,
    slayer: 55
  },
  quests: {
    dragonSlayer1: true,
    dragonSlayer2: false,
    monkeyMadness1: true,
    monkeyMadness2: false,
    recipeForDisaster: false,
    desertTreasure1: false,
    desertTreasure2: false,
    kingsRansom: false,
    priestInPeril: true,
    sinsOfTheFather: false,
    songOfTheElves: false,
    secretsOfTheNorth: false,
    beneathCursedSands: false
  },
  budget: '1–10M',
  accountType: 'Main'
};

describe('getRecommendations', () => {
  it('returns beginner-focused recommendations for lower-mid account', () => {
    const result = getRecommendations(baseProfile);
    const beginnerNames = result.categories['Beginner Bosses'].map((b) => b.name);
    expect(beginnerNames).toContain('Giant Mole');
    expect(result.nextBestAction.toLowerCase()).toContain('recipe for disaster');
  });

  it('surfaces mid-game upgrades when eligible', () => {
    const profile = structuredClone(baseProfile);
    profile.stats.attack = 70;
    profile.stats.strength = 70;
    profile.stats.defence = 70;
    profile.stats.ranged = 75;

    const result = getRecommendations(profile);
    const midNames = result.categories['Mid Game Bosses'].map((b) => b.name);
    expect(midNames).toEqual(expect.arrayContaining(['Barrows', 'Scurrius', 'Sarachnis', 'Fight Caves']));
  });

  it('does not show skilling bosses in default combat categories', () => {
    const result = getRecommendations(baseProfile);
    const allNames = Object.values(result.categories).flat().map((b) => b.name);
    expect(allNames).not.toEqual(expect.arrayContaining(['Tempoross', 'Wintertodt', 'Guardians of the Rift']));
  });

  it('classifies low-level accounts as beginner and surfaces clear bottlenecks', () => {
    const profile = structuredClone(baseProfile);
    profile.stats.attack = 45;
    profile.stats.strength = 45;
    profile.stats.defence = 45;
    profile.stats.ranged = 50;
    profile.stats.magic = 50;

    const result = getRecommendations(profile);
    expect(result.progressionSummary.accountStage).toBe('Beginner');
    expect(result.progressionSummary.biggestBottleneck).toContain('Low Prayer');
  });

  it('increases progression score and stage for high-level accounts', () => {
    const profile = structuredClone(baseProfile);
    profile.stats.attack = 97;
    profile.stats.strength = 96;
    profile.stats.defence = 95;
    profile.stats.ranged = 99;
    profile.stats.magic = 98;
    profile.stats.prayer = 80;
    profile.quests.recipeForDisaster = true;
    profile.quests.dragonSlayer2 = true;
    profile.quests.secretsOfTheNorth = true;
    profile.quests.beneathCursedSands = true;

    const result = getRecommendations(profile);
    expect(result.progressionSummary.accountStage).toBe('End Game');
    expect(result.progressionSummary.progressionScore).toBeGreaterThan(80);
  });
});
