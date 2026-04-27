# OSRS Next Move Helper (MVP)

A simple React MVP that helps an Old School RuneScape player decide their next account progression step.

## What this project does

- Lets users enter core combat/slayer stats.
- Lets users tick key quest unlock checkboxes.
- Lets users select an account budget tier.
- Uses simple rule-based logic to suggest:
  - Best next account goal
  - Bosses they can try now
  - Bosses/raids they are close to unlocking
  - Recommended next skill to train
  - Gear upgrade suggestion based on budget
  - Beginner-friendly explanations

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
3. Open the URL printed by Vite (usually `http://localhost:5173`).

## Project structure

- `src/App.jsx` — main page layout and state wiring.
- `src/components/StatInput.jsx` — reusable numeric stat input.
- `src/components/QuestCheckbox.jsx` — reusable quest checkbox.
- `src/components/BudgetSelector.jsx` — reusable budget selector.
- `src/components/ResultsCard.jsx` — reusable recommendations display.
- `src/recommendationRules.js` — all recommendation rules and extensible data lists.
- `src/styles.css` — dark OSRS-inspired responsive styling.

## What to improve next

- Add richer PvM progression rules and weighted scoring.
- Add more quests, diaries, untradeables, and account types.
- Add per-boss gear templates and setup checklists.
- Add save/load profile support (local storage first, backend later).
- Add test coverage for recommendation rule scenarios.
