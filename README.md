# OSRS Next Move Helper (MVP)

A simple React MVP that helps an Old School RuneScape player decide their next account progression step.

## What this project does

- Lets users enter core combat/slayer stats.
- Lets users tick key quest unlock checkboxes.
- Adds diaries and untradeables tracking for better recommendation quality.
- Supports account type modes (Main, Ironman, Group Ironman, Hardcore Ironman).
- Lets users select an account budget tier.
- Uses weighted rule-based logic to suggest:
  - Best next account goal
  - Bosses they can try now
  - Bosses/raids they are close to unlocking
  - Recommended next skill to train
  - Gear upgrade suggestion based on budget
  - Beginner-friendly explanations
  - Per-boss setup templates/checklists
- Saves and loads the profile locally with browser localStorage.

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

- `src/App.jsx` — main page layout, local state, and localStorage profile persistence.
- `src/components/StatInput.jsx` — reusable numeric stat input.
- `src/components/QuestCheckbox.jsx` — reusable checkbox for quests/diaries/untradeables.
- `src/components/BudgetSelector.jsx` — reusable selector for budget/account type.
- `src/components/ResultsCard.jsx` — recommendations display with weighted goals and per-boss checklists.
- `src/recommendationRules.js` — recommendation data + weighted rules engine.
- `src/recommendationRules.test.js` — rule scenario coverage via Vitest.
- `src/styles.css` — dark OSRS-inspired responsive styling.

## What to improve next

- Add boss-specific phase/mechanics coaching tips.
- Add stat training methods tied to budget and account type.
- Add more quest packs/diary tiers and direct prerequisite pathing.
- Add import/export for local profiles.
- Add UI tests for form and results rendering.
