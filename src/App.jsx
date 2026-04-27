import React, { useEffect, useMemo, useState } from 'react';
import StatInput from './components/StatInput';
import QuestCheckbox from './components/QuestCheckbox';
import BudgetSelector from './components/BudgetSelector';
import ResultsCard from './components/ResultsCard';
import {
  accountTypeOptions,
  budgetOptions,
  diaryList,
  getRecommendations,
  questList,
  untradeableList
} from './recommendationRules';

const STORAGE_KEY = 'osrs-next-move-helper-profile-v1';

const defaultStats = {
  attack: 60,
  strength: 60,
  defence: 60,
  ranged: 60,
  magic: 60,
  prayer: 43,
  hitpoints: 60,
  slayer: 55
};

const defaultQuests = Object.fromEntries(questList.map((q) => [q.key, false]));
const defaultDiaries = Object.fromEntries(diaryList.map((d) => [d.key, false]));
const defaultUntradeables = Object.fromEntries(untradeableList.map((u) => [u.key, false]));

function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default function App() {
  const saved = typeof window !== 'undefined' ? loadProfile() : null;

  const [stats, setStats] = useState(saved?.stats ?? defaultStats);
  const [quests, setQuests] = useState(saved?.quests ?? defaultQuests);
  const [diaries, setDiaries] = useState(saved?.diaries ?? defaultDiaries);
  const [untradeables, setUntradeables] = useState(saved?.untradeables ?? defaultUntradeables);
  const [budget, setBudget] = useState(saved?.budget ?? budgetOptions[0]);
  const [accountType, setAccountType] = useState(saved?.accountType ?? accountTypeOptions[0]);
  const [hasSubmitted, setHasSubmitted] = useState(saved?.hasSubmitted ?? false);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ stats, quests, diaries, untradeables, budget, accountType, hasSubmitted })
    );
  }, [stats, quests, diaries, untradeables, budget, accountType, hasSubmitted]);

  const results = useMemo(() => {
    if (!hasSubmitted) return null;
    return getRecommendations({ stats, quests, diaries, untradeables, budget, accountType });
  }, [stats, quests, diaries, untradeables, budget, accountType, hasSubmitted]);

  return (
    <main className="page">
      <header className="title-wrap">
        <h1>OSRS Next Move Helper</h1>
        <p>Beginner-friendly guidance for your next progression step in Old School RuneScape.</p>
      </header>

      <div className="layout">
        <section className="panel form-panel">
          <h2>Your Account Snapshot</h2>

          <div className="section-block">
            <h3>Combat & Slayer Levels</h3>
            <div className="stats-grid">
              <StatInput label="Attack" value={stats.attack} onChange={(v) => setStats((s) => ({ ...s, attack: v }))} />
              <StatInput label="Strength" value={stats.strength} onChange={(v) => setStats((s) => ({ ...s, strength: v }))} />
              <StatInput label="Defence" value={stats.defence} onChange={(v) => setStats((s) => ({ ...s, defence: v }))} />
              <StatInput label="Ranged" value={stats.ranged} onChange={(v) => setStats((s) => ({ ...s, ranged: v }))} />
              <StatInput label="Magic" value={stats.magic} onChange={(v) => setStats((s) => ({ ...s, magic: v }))} />
              <StatInput label="Prayer" value={stats.prayer} onChange={(v) => setStats((s) => ({ ...s, prayer: v }))} />
              <StatInput label="Hitpoints" value={stats.hitpoints} onChange={(v) => setStats((s) => ({ ...s, hitpoints: v }))} />
              <StatInput label="Slayer" value={stats.slayer} onChange={(v) => setStats((s) => ({ ...s, slayer: v }))} />
            </div>
          </div>

          <div className="section-block">
            <h3>Quest Unlocks</h3>
            <div className="quest-grid">
              {questList.map((q) => (
                <QuestCheckbox
                  key={q.key}
                  label={q.label}
                  checked={quests[q.key]}
                  onChange={(checked) => setQuests((prev) => ({ ...prev, [q.key]: checked }))}
                />
              ))}
            </div>
          </div>

          <div className="section-block">
            <h3>Achievement Diaries</h3>
            <div className="quest-grid">
              {diaryList.map((d) => (
                <QuestCheckbox
                  key={d.key}
                  label={d.label}
                  checked={diaries[d.key]}
                  onChange={(checked) => setDiaries((prev) => ({ ...prev, [d.key]: checked }))}
                />
              ))}
            </div>
          </div>

          <div className="section-block">
            <h3>Untradeables</h3>
            <div className="quest-grid">
              {untradeableList.map((u) => (
                <QuestCheckbox
                  key={u.key}
                  label={u.label}
                  checked={untradeables[u.key]}
                  onChange={(checked) => setUntradeables((prev) => ({ ...prev, [u.key]: checked }))}
                />
              ))}
            </div>
          </div>

          <div className="section-block two-col">
            <BudgetSelector label="Budget" value={budget} onChange={setBudget} options={budgetOptions} />
            <BudgetSelector label="Account Type" value={accountType} onChange={setAccountType} options={accountTypeOptions} />
          </div>

          <div className="button-row">
            <button className="cta" onClick={() => setHasSubmitted(true)}>
              Find My Next Move
            </button>
            <button
              className="secondary"
              onClick={() => {
                setStats(defaultStats);
                setQuests(defaultQuests);
                setDiaries(defaultDiaries);
                setUntradeables(defaultUntradeables);
                setBudget(budgetOptions[0]);
                setAccountType(accountTypeOptions[0]);
                setHasSubmitted(false);
                localStorage.removeItem(STORAGE_KEY);
              }}
            >
              Reset Profile
            </button>
          </div>
        </section>

        <section className="panel">
          <ResultsCard results={results} />
        </section>
      </div>
    </main>
  );
}
