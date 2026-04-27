import React, { useState } from 'react';

/**
 * Shows recommendation output in clearly separated sections.
 */
export default function ResultsCard({ results }) {
  const [copyState, setCopyState] = useState('');

  const copySummary = async () => {
    if (!results?.summaryText) return;
    try {
      await navigator.clipboard.writeText(results.summaryText);
      setCopyState('Copied summary!');
      setTimeout(() => setCopyState(''), 1500);
    } catch {
      setCopyState('Clipboard unavailable in this browser.');
    }
  };

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
      <div className="title-row">
        <h2>Recommendations</h2>
        <button className="secondary small" onClick={copySummary}>
          Copy Summary
        </button>
      </div>
      {copyState && <p className="copy-msg">{copyState}</p>}

      <section>
        <h3>Best Next Move</h3>
        <p><strong>Do:</strong> {results.bestNextMove.whatToDo}</p>
        <p><strong>Why:</strong> {results.bestNextMove.whyItMatters}</p>
        <p><strong>Unlocks:</strong> {results.bestNextMove.whatItUnlocks}</p>
        <p><strong>Priority:</strong> {results.bestNextMove.priority}</p>
      </section>

      <section>
        <h3>Next 3 Moves</h3>
        <ol>
          {results.next3Moves.map((move) => (
            <li key={move.whatToDo}>
              <strong>{move.whatToDo}</strong> ({move.priority})
              <div className="sub-line">Why: {move.whyItMatters}</div>
              <div className="sub-line">Unlocks: {move.whatItUnlocks}</div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3>Account Readiness Scores</h3>
        <div className="score-grid">
          {results.readinessScores.map((score) => (
            <div className="score-card" key={score.key}>
              <h4>{score.name}</h4>
              <p>
                <strong>{score.score}%</strong> — {score.status}
              </p>
              <p className="setup-sub">{score.explanation}</p>
              {score.missingRequirements.length > 0 && (
                <>
                  <p className="setup-sub">Missing:</p>
                  <ul>
                    {score.missingRequirements.map((req) => (
                      <li key={`${score.key}-${req}`}>{req}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Bosses You Can Try Now</h3>
        <ul>{results.bossesNow.map((b) => <li key={b}>{b}</li>)}</ul>
      </section>

      <section>
        <h3>Bosses You Are Close To</h3>
        <ul>{results.bossesClose.map((b) => <li key={b}>{b}</li>)}</ul>
      </section>

      <section>
        <h3>Gear Upgrade Suggestions</h3>
        <ul>
          <li><strong>Melee:</strong> {results.gearSuggestions.melee}</li>
          <li><strong>Ranged:</strong> {results.gearSuggestions.ranged}</li>
          <li><strong>Magic:</strong> {results.gearSuggestions.magic}</li>
          <li><strong>Utility:</strong> {results.gearSuggestions.utility}</li>
        </ul>
      </section>

      <section>
        <h3>Missing Unlocks</h3>
        <ul>
          {results.missingUnlocks.length ? results.missingUnlocks.map((u) => <li key={u}>{u}</li>) : <li>No major missing unlocks flagged.</li>}
        </ul>
      </section>

      <section>
        <h3>Warnings / Notes</h3>
        <ul>
          {[...results.warnings, ...results.notes].map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </section>

      <p className="mvp-note">This is a simple MVP, recommendations are not perfect yet.</p>
    </div>
  );
}
