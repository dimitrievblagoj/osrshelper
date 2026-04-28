import React from 'react';

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

      <p className="mvp-note">
        This is a simple MVP, recommendations are not perfect yet.
      </p>
    </div>
  );
}
