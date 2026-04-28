# OSRS Next Move Helper (MVP)

A simple React MVP that helps an Old School RuneScape player decide their next account progression step.

## What this project does

- Lets users enter core combat/slayer stats.
- Lets users tick key quest unlock checkboxes.
- Lets users select an account budget tier.
- Supports RSN lookup against OSRS hiscores to auto-fill key combat stats.
- Uses simple rule-based logic to suggest:
  - Best next account goal
  - Bosses they can try now
  - Bosses/raids they are close to unlocking
  - Recommended next skill to train
  - Gear upgrade suggestion based on budget
  - Beginner-friendly explanations

> Note: This is intentionally lightweight MVP logic, not a perfect optimizer.

## RSN lookup details

The app includes a Vercel-compatible serverless route:

- `GET /api/hiscores?player=PLAYER_NAME`

It proxies OSRS hiscores data from:

- `https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=PLAYER_NAME`

The lookup currently fetches and maps:

- Overall (Total level)
- Attack
- Defence
- Strength
- Hitpoints
- Ranged
- Prayer
- Magic
- Slayer

Quest unlocks remain **manual checkboxes**. OSRS hiscores provide skills/ranking data, but not a reliable quest-completion API for this MVP.

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
4. In the app, enter an RSN and click **Fetch Stats** to verify stat auto-fill.

## Build for production

Run:

```bash
npm run build
```

Vercel will detect the `api/` directory and deploy `api/hiscores.js` as a serverless function.

## Project structure

- `api/hiscores.js` — Vercel serverless route for RSN hiscore lookup and stat mapping.
- `src/App.jsx` — main page layout, RSN lookup UI/state, and stat/quest wiring.
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


## Recommendation scope (MVP)

- This MVP currently focuses on **combat PvM and raid recommendations** using combat/slayer/prayer stats plus key quest unlocks.
- Skilling bosses/activities (like Tempoross, Wintertodt, Hespori) are intentionally separated and not included in core combat boss recommendations when their required skilling stats are not tracked.
- Full skilling-boss recommendations will be expanded once skilling stats are added to profile inputs.
