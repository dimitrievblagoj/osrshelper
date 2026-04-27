import React from 'react';

/**
 * Reusable numeric stat input for player levels.
 */
export default function StatInput({ label, value, onChange }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <input
        className="field-input"
        type="number"
        min="1"
        max="99"
        value={value}
        onChange={(e) => onChange(Math.max(1, Math.min(99, Number(e.target.value) || 1)))}
      />
    </label>
  );
}
