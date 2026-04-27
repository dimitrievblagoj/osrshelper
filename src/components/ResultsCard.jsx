import React from 'react';

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
        <h3>2) Bosses you can try now</h3>
        <ul>
          {results.bossesNow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>3) Bosses / raids you are close to unlocking</h3>
        <ul>
          {results.closeUnlocks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>4) Recommended skill to train next</h3>
        <p>{results.skillToTrain}</p>
      </section>

      <section>
        <h3>5) Suggested gear upgrade (budget-based)</h3>
        <p>{results.gearUpgrade}</p>
      </section>

      <section>
        <h3>6) Why these recommendations?</h3>
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
