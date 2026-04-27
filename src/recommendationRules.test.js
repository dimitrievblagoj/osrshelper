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
    beneathCursedSands: false
  },
  diaries: {
    varrockMedium: false,
    lumbridgeMedium: false,
    morytaniaHard: false,
    westernProvincesHard: false
  },
  untradeables: {
    fireCape: false,
    fighterTorso: false,
    imbuedGodCape: false,
    barrowsGloves: false,
    assembler: false
  },
  budget: '1–10M',
  accountType: 'Main'
};

describe('getRecommendations', () => {
  it('prioritizes barrows gloves when RFD not complete', () => {
    const result = getRecommendations(baseProfile);
    expect(result.bestGoal.toLowerCase()).toContain('barrows gloves');
  });

  it('adds vorkath when DS2 complete and ranged >= 75', () => {
    const profile = structuredClone(baseProfile);
    profile.stats.ranged = 80;
    profile.quests.dragonSlayer2 = true;

    const result = getRecommendations(profile);
    expect(result.bossesNow.some((b) => b.toLowerCase().includes('vorkath'))).toBe(true);
  });

  it('adds account type explanation for ironman variants', () => {
    const profile = structuredClone(baseProfile);
    profile.accountType = 'Ironman';

    const result = getRecommendations(profile);
    expect(result.explanations.some((e) => e.toLowerCase().includes('account type note'))).toBe(true);
  });
});
