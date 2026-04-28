import React, { useMemo, useState } from 'react';
import StatInput from './components/StatInput';
import QuestCheckbox from './components/QuestCheckbox';
import BudgetSelector from './components/BudgetSelector';
import ResultsCard from './components/ResultsCard';
import { budgetOptions, getRecommendations, questList } from './recommendationRules';

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

const lookupErrorByCode = {
  PLAYER_NOT_FOUND: 'Player not found or not ranked on hiscores.',
  HISCORES_UNAVAILABLE: 'Hiscores are currently unavailable.',
  UNKNOWN_ERROR: 'Something went wrong while fetching stats.'
};

function getLookupError(payload) {
  if (payload && typeof payload === 'object' && typeof payload.code === 'string') {
    return lookupErrorByCode[payload.code] || 'Something went wrong while fetching stats.';
  }

  return 'Something went wrong while fetching stats.';
}

export default function App() {
  const [stats, setStats] = useState(defaultStats);
  const [quests, setQuests] = useState(defaultQuests);
  const [budget, setBudget] = useState(budgetOptions[0]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [totalLevel, setTotalLevel] = useState(null);
  const [lookupState, setLookupState] = useState({ loading: false, error: '', success: '' });

  const results = useMemo(() => {
    if (!hasSubmitted) return null;
    return getRecommendations({ stats, quests, budget });
  }, [stats, quests, budget, hasSubmitted]);

  async function handleFetchStats() {
    const trimmedPlayerName = playerName.trim();

    if (!trimmedPlayerName) {
      setLookupState({ loading: false, error: 'Please enter an RSN before fetching stats.', success: '' });
      return;
    }

    setLookupState({ loading: true, error: '', success: '' });

    try {
      const response = await fetch(`/api/hiscores?player=${encodeURIComponent(trimmedPlayerName)}`);
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(getLookupError(payload));
      }

      setStats((previousStats) => ({
        ...previousStats,
        ...payload.stats
      }));
      setTotalLevel(payload.stats.totalLevel);
      setLookupState({ loading: false, error: '', success: `Fetched stats for ${payload.player}.` });
    } catch (error) {
      setLookupState({
        loading: false,
        error: error instanceof Error ? error.message : 'Something went wrong while fetching stats.',
        success: ''
      });
    }
  }

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
            <h3>Quick-fill From Hiscores</h3>
            <p className="helper-text">Enter an RSN to fetch combat stats + Slayer from the official OSRS hiscores.</p>
            <div className="rsn-lookup">
              <input
                className="rsn-input"
                type="text"
                value={playerName}
                onChange={(event) => setPlayerName(event.target.value)}
                maxLength={12}
                placeholder="Enter RSN"
              />
              <button className="secondary-cta" onClick={handleFetchStats} disabled={lookupState.loading}>
                {lookupState.loading ? 'Fetching...' : 'Fetch Stats'}
              </button>
            </div>
            {totalLevel ? <p className="helper-text">Total level: {totalLevel}</p> : null}
            {lookupState.error ? <p className="error-text">{lookupState.error}</p> : null}
            {lookupState.success ? <p className="success-text">{lookupState.success}</p> : null}
          </div>

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
            <BudgetSelector value={budget} onChange={setBudget} options={budgetOptions} />
          </div>

          <button className="cta" onClick={() => setHasSubmitted(true)}>
            Find My Next Move
          </button>
        </section>

        <section className="panel">
          <ResultsCard results={results} />
        </section>
      </div>
    </main>
  );
}
