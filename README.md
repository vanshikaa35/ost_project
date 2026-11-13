# 🍛 Recipe Finder

A full-stack web application to search Indian home-cooking recipes by ingredient.

**Project 3.3 — College Submission**

---

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Backend  | Node.js, Express, Morgan, CORS    |
| Frontend | React 19, Vite, Axios             |
| Styling  | Vanilla CSS (custom design system)|

---

## Project Structure

```
Recipe Finder/
├── backend/
│   ├── data/
│   │   └── recipes.js          ← 20 Indian recipes (in-memory)
│   ├── routes/
│   │   └── recipeRoutes.js     ← API route handlers
│   └── server.js               ← Express entry point
│
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── recipeApi.js    ← Axios API calls
    │   ├── hooks/
    │   │   └── useDebounce.js  ← Custom debounce hook (350ms)
    │   ├── components/
    │   │   ├── SearchBar.jsx
    │   │   ├── RecipeCard.jsx
    │   │   ├── RecipeDetail.jsx
    │   │   └── NoResults.jsx
    │   ├── pages/
    │   │   └── Home.jsx        ← Main page with all state logic
    │   └── App.jsx
    └── vite.config.js
```

---

## How to Run

### 1. Start the Backend

```bash
cd backend
npm install
npm start
```

Server runs at **http://localhost:5000**

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs at **http://localhost:3000**

---

## API Endpoints

| Method | Endpoint                              | Description              |
|--------|---------------------------------------|--------------------------|
| GET    | `/api/recipes`                        | Get all recipes          |
| GET    | `/api/recipes/search?ingredient=paneer` | Search by ingredient   |

---

## Key Features

- **Debounced Search** — waits 350ms after typing stops before calling the API
- **Recipe Cards** — show name, ingredient count, cook time
- **Detail View** — full ingredient list and numbered steps
- **Loading Skeletons** — shimmer animation while fetching
- **No Results State** — contextual message with suggestions
- **Error Handling** — clear error banner if backend is unreachable
# recipe-finder
