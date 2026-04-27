import React from 'react';

/**
 * Reusable dropdown selector (used for budget and account type).
 */
export default function BudgetSelector({ label = 'Budget', value, onChange, options }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <select className="field-input" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
