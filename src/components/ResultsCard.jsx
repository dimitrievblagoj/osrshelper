import React, { useMemo, useState } from 'react';

const DEFAULT_VISIBLE = 4;

function badgeTone(difficulty) {
  if (difficulty === 'Beginner' || difficulty === 'Easy') return 'badge badge-easy';
  if (difficulty === 'Medium') return 'badge badge-medium';
  if (difficulty === 'Hard') return 'badge badge-hard';
  return 'badge badge-endgame';
}

function BossCard({ boss }) {
  return (
    <article className="boss-item">
      <div className="boss-item-head">
        <h4>{boss.name}</h4>
        <div className="badge-wrap">
          <span className={badgeTone(boss.difficulty)}>{boss.difficulty}</span>
          {boss.category ? <span className="badge">{boss.category}</span> : null}
        </div>
      </div>

      <p className="boss-why">{boss.why}</p>

      {boss.requirementsMissing.length > 0 ? (
        <div className="chip-row">
          {boss.requirementsMissing.slice(0, 4).map((missing) => (
            <span className="chip" key={missing}>
              {missing}
            </span>
          ))}
        </div>
      ) : (
        <p className="success-text">All key requirements met.</p>
      )}

      {boss.warning ? <p className="warning-text">⚠️ {boss.warning}</p> : null}
    </article>
  );
}

function BossSection({ title, summary, items, visibleCount, expanded, onToggle }) {
  const shown = expanded ? items : items.slice(0, visibleCount);

  return (
    <section className="results-section">
      <div className="section-head">
        <h3>{title}</h3>
        <p className="muted">{summary}</p>
      </div>

      <div className="boss-list compact">
        {shown.map((boss) => (
          <BossCard boss={boss} key={boss.name} />
        ))}
      </div>

      {items.length > visibleCount ? (
        <button className="link-btn" onClick={onToggle}>
          {expanded ? 'Show less' : `Show more (${items.length - visibleCount} more)`}
        </button>
      ) : null}
    </section>
  );
}

function BossList({ bosses }) {
  return (
    <div className="boss-list">
      {bosses.map((boss) => (
        <article className="boss-item" key={boss.name}>
          <h4>
            {boss.name} <span className="boss-difficulty">({boss.difficulty})</span>
          </h4>
          <p><strong>Style:</strong> {boss.style}</p>
          <p><strong>Why do this:</strong> {boss.why}</p>
          <p><strong>What it teaches:</strong> {boss.teaches}</p>
          {boss.requirementsMet.length > 0 ? (
            <p><strong>Requirements met:</strong> {boss.requirementsMet.join(', ')}</p>
          ) : null}
          {boss.requirementsMissing.length > 0 ? (
            <p><strong>Requirements missing:</strong> {boss.requirementsMissing.join(', ')}</p>
          ) : null}
          {boss.warning ? <p className="warning-text"><strong>Warning:</strong> {boss.warning}</p> : null}
          {boss.accountNote ? <p className="helper-text"><strong>Account note:</strong> {boss.accountNote}</p> : null}
        </article>
      ))}
    </div>
  );
}

/**
 * Shows recommendation output in a structured card.
 */
export default function ResultsCard({ results }) {
  const [expanded, setExpanded] = useState({ now: false, close: false, locked: false, skilling: false });

  const topActions = useMemo(() => results?.explanations?.slice(0, 3) ?? [], [results]);

  if (!results) {
    return (
      <div className="results-card muted">
        <h2>Your next move appears here</h2>
        <p>Fill in your stats, quest unlocks, and budget, then click “Find My Next Move”.</p>
      </div>
    );
  }

  return (
    <div className="results-card">
      <h2>Recommended Next Move</h2>

      <section>
        <h3>1) Best next account goal</h3>
        <p>{results.bestGoal}</p>
      </section>

      <section>
        <h3>2) Bosses You Can Try Now</h3>
        <BossList bosses={results.bossesNowDetailed} />
      </section>

      <section>
        <h3>3) You Are Close To</h3>
        <BossList bosses={results.closeBossesDetailed} />
      </section>

      <section>
        <h3>4) Locked For Later</h3>
        <BossList bosses={results.lockedBossesDetailed} />
      </section>

      <section>
        <h3>5) Recommended skill to train next</h3>
        <p>{results.skillToTrain}</p>
      </section>

      <section>
        <h3>6) Suggested gear upgrade (budget-based)</h3>
        <p>{results.gearUpgrade}</p>
      </section>

      <section>
        <h3>7) Why these recommendations?</h3>
        <ul>
          {results.explanations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="results-section compact-meta">
        <h3>Recommended account upgrades</h3>
        <p>
          <strong>Train next:</strong> {results.skillToTrain}
        </p>
        <p>
          <strong>Gear direction:</strong> {results.gearUpgrade}
        </p>
      </section>
    </div>
  );
}
