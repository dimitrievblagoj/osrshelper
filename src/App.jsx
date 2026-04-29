import React, { useMemo, useState } from 'react';
import StatInput from './components/StatInput';
import QuestCheckbox from './components/QuestCheckbox';
import BudgetSelector from './components/BudgetSelector';
import ResultsCard from './components/ResultsCard';
import { accountTypeOptions, budgetOptions, getRecommendations, questList } from './recommendationRules';

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
  const [accountType, setAccountType] = useState(accountTypeOptions[0]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [rsn, setRsn] = useState('');
  const [lookupState, setLookupState] = useState({ loading: false, error: '', success: '' });

  const results = useMemo(() => {
    if (!hasSubmitted) return null;
    return getRecommendations({ stats, quests, budget, accountType });
  }, [stats, quests, budget, accountType, hasSubmitted]);

  async function handleRsnLookup() {
    const trimmedRsn = rsn.trim();

    if (!trimmedRsn) {
      setLookupState({ loading: false, error: 'Enter an RSN before looking up levels.', success: '' });
      return;
    }

    setLookupState({ loading: true, error: '', success: '' });

    try {
      const response = await fetch(`/api/lookup-rsn?rsn=${encodeURIComponent(trimmedRsn)}`);
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to load stats from the hiscores right now.');
      }

      setStats((previous) => ({ ...previous, ...payload.stats }));
      if (payload.accountType) {
        const normalized = payload.accountType === 'Ultimate Ironman' ? 'UIM' : payload.accountType;
        setAccountType(normalized);
      }
      setHasSubmitted(true);
      setLookupState({ loading: false, error: '', success: `Loaded combat + Slayer levels for ${payload.rsn}.` });
    } catch (error) {
      setLookupState({
        loading: false,
        error: error instanceof Error ? error.message : 'Unable to load stats from the hiscores right now.',
        success: ''
      });
    }
  }

  return (
    <main className="page">
      <header className="title-wrap hero">
        <h1>Enter your RSN. Find your next best OSRS move.</h1>
        <p>Get your account stage, progression score, boss recommendations, and biggest bottleneck in seconds.</p>
      </header>

      <div className="layout">
        <section className="panel form-panel">
          <h2>Check your account instantly</h2>

          <div className="section-block hero-lookup">
            <div className="rsn-lookup">
              <input
                className="rsn-input"
                type="text"
                value={rsn}
                onChange={(event) => setRsn(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    handleRsnLookup();
                  }
                }}
                maxLength={12}
                placeholder="Enter RSN..."
              />
              <button className="secondary-cta" onClick={handleRsnLookup} disabled={lookupState.loading}>
                {lookupState.loading ? 'Checking...' : 'Check My Account'}
              </button>
            </div>
            {lookupState.error ? <p className="error-text">{lookupState.error}</p> : null}
            {lookupState.success ? <p className="success-text">{lookupState.success}</p> : null}
          </div>

          <details className="section-block manual-entry">
            <summary>Enter stats manually</summary>
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
          


          <div className="section-block">
            <h3>Account Type</h3>
            <select className="rsn-input" value={accountType} onChange={(event) => setAccountType(event.target.value)}>
              {accountTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
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
          </details>
        </section>

        <section className="panel">
          <ResultsCard results={results} rsn={rsn} accountType={accountType} />
        </section>
      </div>
    </main>
  );
}
