import React, { useMemo, useState } from 'react';

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

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, color = '#d8dded') {
  const words = text.split(' ');
  let line = '';
  let lineY = y;

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillStyle = color;
      ctx.fillText(line, x, lineY);
      line = word;
      lineY += lineHeight;
    } else {
      line = testLine;
    }
  });

  if (line) {
    ctx.fillStyle = color;
    ctx.fillText(line, x, lineY);
  }

  return lineY + lineHeight;
}

export default function ResultsCard({ results, rsn }) {
  const [shareState, setShareState] = useState({ loading: false, success: '', error: '' });

  const shareData = useMemo(() => {
    if (!results) return null;

    const allRecommendations = Object.values(results.categories || {}).flat();
    const topRecommendations = allRecommendations.slice(0, 3).map((item) => item.name);

    const bottlenecks = (results.progressionSummary?.biggestBottleneck || 'Not tracked yet')
      .split('/')
      .map((b) => b.trim())
      .filter(Boolean)
      .slice(0, 2);

    return {
      rsn: rsn?.trim() || 'Unknown Adventurer',
      stage: results.progressionSummary?.accountStage || 'Unknown',
      score: results.progressionSummary?.progressionScore ?? 0,
      nextAction: results.progressionSummary?.nextBestAction || results.nextBestAction,
      recommendations: topRecommendations,
      bottlenecks: bottlenecks.length ? bottlenecks : ['Not tracked yet']
    };
  }, [results, rsn]);

  async function handleShareCard() {
    if (!shareData) return;

    setShareState({ loading: true, success: '', error: '' });

    try {
      const width = 1080;
      const height = 1350;
      const padding = 78;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (!ctx) throw new Error('Canvas is not supported in this browser.');

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0d1017');
      gradient.addColorStop(1, '#1b212d');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = '#3b4255';
      ctx.lineWidth = 4;
      ctx.strokeRect(34, 34, width - 68, height - 68);

      ctx.fillStyle = '#d3a154';
      ctx.font = '700 54px Inter, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('OSRS Next Move Snapshot', width / 2, 120);

      ctx.fillStyle = '#f1f3f8';
      ctx.font = '600 40px Inter, Arial, sans-serif';
      ctx.fillText(shareData.rsn, width / 2, 188);

      ctx.textAlign = 'left';
      const contentWidth = width - padding * 2;
      let y = 268;

      const rows = [
        ['Account Stage', shareData.stage],
        ['Progression Score', `${shareData.score}/100`],
        ['Next Best Action', shareData.nextAction],
        ['Recommended Bosses / Activities', shareData.recommendations.join(' • ') || 'No recommendations yet'],
        ['Biggest Bottlenecks', shareData.bottlenecks.join(' • ')]
      ];

      rows.forEach(([label, value], index) => {
        ctx.fillStyle = '#2a3344';
        ctx.fillRect(padding, y - 34, contentWidth, 160);

        ctx.strokeStyle = '#414b61';
        ctx.strokeRect(padding, y - 34, contentWidth, 160);

        ctx.fillStyle = '#f3c679';
        ctx.font = '700 30px Inter, Arial, sans-serif';
        ctx.fillText(label, padding + 24, y);

        ctx.font = '500 30px Inter, Arial, sans-serif';
        const endY = drawWrappedText(ctx, value, padding + 24, y + 46, contentWidth - 48, 38);
        y = Math.max(y + 182, endY + 38);

        if (index === rows.length - 1) {
          y += 10;
        }
      });

      ctx.fillStyle = '#8c95ab';
      ctx.textAlign = 'center';
      ctx.font = '500 24px Inter, Arial, sans-serif';
      ctx.fillText('Generated with OSRS Next Move Helper', width / 2, height - 80);

      const blob = await new Promise((resolve, reject) => {
        canvas.toBlob((generatedBlob) => {
          if (generatedBlob) resolve(generatedBlob);
          else reject(new Error('Could not generate card image.'));
        }, 'image/png');
      });

      const imageUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `${shareData.rsn.replace(/\s+/g, '_')}-osrs-progress.png`;
      link.click();
      URL.revokeObjectURL(imageUrl);

      if (navigator.clipboard && window.ClipboardItem) {
        try {
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          setShareState({ loading: false, success: 'Image downloaded and copied to clipboard.', error: '' });
          return;
        } catch (clipboardError) {
          // Clipboard support varies by browser and permission state.
        }
      }

      setShareState({ loading: false, success: 'Image downloaded successfully.', error: '' });
    } catch (error) {
      setShareState({
        loading: false,
        success: '',
        error: error instanceof Error ? error.message : 'Unable to generate a share image.'
      });
    }
  }

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
      {results.progressionSummary ? (
        <section className="progression-summary-card">
          <h3>Account Progression Summary</h3>
          <p><strong>Account Stage:</strong> {results.progressionSummary.accountStage}</p>
          <p><strong>Progression Score:</strong> {results.progressionSummary.progressionScore}/100</p>
          <p><strong>Strongest Unlock:</strong> {results.progressionSummary.strongestUnlock}</p>
          <p><strong>Biggest Bottleneck:</strong> {results.progressionSummary.biggestBottleneck}</p>
          <p><strong>Next Best Action:</strong> {results.progressionSummary.nextBestAction}</p>
          <div className="share-actions">
            <button className="secondary-cta" onClick={handleShareCard} disabled={shareState.loading}>
              {shareState.loading ? 'Generating...' : 'Download Result'}
            </button>
            {shareState.error ? <p className="error-text">{shareState.error}</p> : null}
            {shareState.success ? <p className="success-text">{shareState.success}</p> : null}
          </div>
        </section>
      ) : null}

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
