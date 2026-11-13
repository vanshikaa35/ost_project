/**
 * server.js
 * Entry point for the Recipe Finder Express backend.
 * Starts on PORT 5000 by default.
 */

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const recipeRoutes = require("./routes/recipeRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────
app.use(cors());                    // allow cross-origin requests from React dev server
app.use(morgan("dev"));             // log each request method, path and status
app.use(express.json());            // parse JSON request bodies

// ─── Routes ──────────────────────────────────────────────────
app.use("/api/recipes", recipeRoutes);

// ─── Health check ────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ message: "Recipe Finder API is running 🍛" });
});

// ─── 404 fallback ────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

// ─── Start server ────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Server is running at http://localhost:${PORT}`);
});
