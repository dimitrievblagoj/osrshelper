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
      <section className="hero-next-move">
        <div className="hero-header">
          <h2>🎯 Your Next Move</h2>
          <span className="badge badge-priority">High Priority</span>
        </div>
        <p className="hero-goal">{results.bestGoal}</p>
        <ul>
          {topActions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <BossSection
        title="Combat Bosses You Can Try Now"
        summary={`${results.bossesNowDetailed.length} bosses ready now`}
        items={results.bossesNowDetailed}
        visibleCount={DEFAULT_VISIBLE}
        expanded={expanded.now}
        onToggle={() => setExpanded((prev) => ({ ...prev, now: !prev.now }))}
      />

      <BossSection
        title="Combat Bosses You Are Close To"
        summary={`${results.closeBossesDetailed.length} bosses close to unlocking`}
        items={results.closeBossesDetailed}
        visibleCount={DEFAULT_VISIBLE}
        expanded={expanded.close}
        onToggle={() => setExpanded((prev) => ({ ...prev, close: !prev.close }))}
      />

      <BossSection
        title="Locked PvM Goals"
        summary={`${results.lockedBossesDetailed.length} long-term goals`}
        items={results.lockedBossesDetailed}
        visibleCount={DEFAULT_VISIBLE}
        expanded={expanded.locked}
        onToggle={() => setExpanded((prev) => ({ ...prev, locked: !prev.locked }))}
      />

      {results.skillingActivities && results.skillingActivities.length > 0 ? (
        <section className="results-section">
          <div className="section-head">
            <h3>Skilling Activities</h3>
            <p className="muted">{results.skillingActivities.length} optional activities</p>
          </div>
          <ul className="compact-list">
            {(expanded.skilling ? results.skillingActivities : results.skillingActivities.slice(0, 4)).map((activity) => (
              <li key={activity.name}>{activity.note}</li>
            ))}
          </ul>
          {results.skillingActivities.length > 4 ? (
            <button className="link-btn" onClick={() => setExpanded((prev) => ({ ...prev, skilling: !prev.skilling }))}>
              {expanded.skilling ? 'Show less' : `Show more (${results.skillingActivities.length - 4} more)`}
            </button>
          ) : null}
        </section>
      ) : null}

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
