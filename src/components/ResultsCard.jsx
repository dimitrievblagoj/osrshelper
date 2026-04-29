import React from 'react';

function difficultyTone(difficulty) {
  if (difficulty === 'Beginner' || difficulty === 'Easy') return 'badge badge-easy';
  if (difficulty === 'Medium') return 'badge badge-medium';
  if (difficulty === 'Hard') return 'badge badge-hard';
  return 'badge';
}

function RecommendationCard({ item }) {
  return (
    <article className="boss-item">
      <div className="boss-item-head">
        <h4>{item.name}</h4>
        <div className="badge-wrap">
          <span className={difficultyTone(item.difficulty)}>{item.difficulty}</span>
          <span className="badge">{item.category}</span>
        </div>
      </div>
      <p><strong>Why:</strong> {item.why}</p>
      <p><strong>Requirements met:</strong> {item.requirementsMet.length ? item.requirementsMet.join(', ') : 'None yet'}</p>
      <p><strong>Missing requirements:</strong> {item.missingRequirements.length ? item.missingRequirements.join(', ') : 'None'}</p>
      <p><strong>Next step:</strong> {item.nextStep}</p>
    </article>
  );
}

function CategorySection({ title, items }) {
  return (
    <section>
      <h3>{title}</h3>
      {items.length === 0 ? <p className="muted">No current recommendations in this category.</p> : null}
      <div className="boss-list compact">
        {items.map((item) => <RecommendationCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}

export default function ResultsCard({ results }) {
  if (!results) {
    return (
      <div className="results-card muted">
        <h2>Your next move appears here</h2>
        <p>Fill in your stats, quest unlocks, and budget, then click “Find My Next Move”.</p>
      </div>
    );
  }

  const categories = [
    'Beginner Bosses',
    'Mid Game Bosses',
    'Late Game Goals',
    'Raids Readiness'
  ];

  return (
    <div className="results-card">
      <h2>Combat Recommendations</h2>

      <section>
        <h3>Next Best Action</h3>
        <p>{results.nextBestAction}</p>
      </section>

      {categories.map((category) => (
        <CategorySection key={category} title={category} items={results.categories[category] || []} />
      ))}

      <section>
        <h3>Suggested Gear Upgrade</h3>
        <p>{results.gearUpgrade}</p>
      </section>

      <section>
        <h3>Why these recommendations?</h3>
        <ul>
          {results.explanations.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}
