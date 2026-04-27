import React from 'react';

/**
 * Reusable quest unlock checkbox.
 */
export default function QuestCheckbox({ label, checked, onChange }) {
  return (
    <label className="checkbox-row">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}
