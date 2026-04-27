# OSRS Next Move Helper (MVP)

A simple React MVP that helps an Old School RuneScape player decide their next account progression step.

## What this project does

- Lets users enter core combat/slayer stats.
- Lets users tick key quest unlock checkboxes.
- Tracks diaries and untradeables for better progression guidance.
- Supports account type modes:
  - Main
  - Ironman
  - Ultimate Ironman
  - Hardcore Ironman
- Lets users select an account budget tier.
- Saves and loads profile data locally with browser `localStorage`.
- Generates structured recommendations with:
  - **Best Next Move**
  - **Next 3 Moves**
  - **Account Readiness Scores** (Barrows, Fire Cape, Vorkath, Zulrah, TOA beginner, CoX beginner)
  - **Bosses You Can Try Now**
  - **Bosses You Are Close To**
  - **Gear Upgrade Suggestions** (melee/ranged/magic/utility)
  - **Missing Unlocks**
  - **Warnings / Notes**
- Includes a **Copy Summary** button to share a clean text recommendation snapshot.

> Note: This is intentionally lightweight MVP logic, not a perfect optimizer.

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Run rules tests:
   ```bash
   npm run test
   ```
4. Open the URL printed by Vite (usually `http://localhost:5173`).

## Project structure

- `src/App.jsx` — main page layout, form state, and localStorage persistence/reset.
- `src/components/StatInput.jsx` — reusable numeric stat input.
- `src/components/QuestCheckbox.jsx` — reusable checkbox for quests/diaries/untradeables.
- `src/components/BudgetSelector.jsx` — reusable selector for budget/account type.
- `src/components/ResultsCard.jsx` — structured recommendation sections + copy summary button.
- `src/recommendationRules.js` — all recommendation logic, readiness scoring, and account-type rules.
- `src/recommendationRules.test.js` — focused rule scenario coverage via Vitest.
- `src/styles.css` — dark OSRS-inspired responsive styling.

## What to improve next

- Add per-boss phase coaching tips and fail-state advice.
- Add account-build presets (zerker/pure/med-level variants).
- Add import/export profile JSON for easier sharing.
- Add UI tests for form interactions and clipboard behavior.
- Add optional sliders for player risk preference and session length.
