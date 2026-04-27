import { describe, expect, it } from 'vitest';
import { getRecommendations } from './recommendationRules';

const baseProfile = {
  stats: {
    attack: 60,
    strength: 60,
    defence: 60,
    ranged: 66,
    magic: 62,
    prayer: 39,
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
  it('returns exactly six readiness score cards', () => {
    const result = getRecommendations(baseProfile);
    expect(result.readinessScores).toHaveLength(6);
  });

  it('provides detailed best next move text and priority', () => {
    const result = getRecommendations(baseProfile);
    expect(result.bestNextMove.whatToDo.length).toBeGreaterThan(10);
    expect(['High', 'Medium', 'Low']).toContain(result.bestNextMove.priority);
    expect(result.bestNextMove.whyItMatters.length).toBeGreaterThan(10);
    expect(result.bestNextMove.whatItUnlocks.length).toBeGreaterThan(10);
  });

  it('adds hardcore warning and summary text for sharing', () => {
    const profile = structuredClone(baseProfile);
    profile.accountType = 'Hardcore Ironman';

    const result = getRecommendations(profile);
    expect(result.warnings.some((w) => w.toLowerCase().includes('hardcore warning'))).toBe(true);
    expect(result.summaryText).toContain('My OSRS Next Move:');
    expect(result.summaryText).toContain('Fire Cape readiness:');
  });
});
