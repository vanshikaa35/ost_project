/**
 * recipeRoutes.js
 * All recipe-related API routes.
 *
 * GET /api/recipes          — return all recipes
 * GET /api/recipes/search   — search by ingredient (?ingredient=<value>)
 */

const express = require("express");
const recipes = require("../data/recipes");

const router = express.Router();

// GET /api/recipes
// Returns the full list of all recipes
router.get("/", (req, res) => {
  res.json(recipes);
});

// GET /api/recipes/search?ingredient=paneer
// Returns recipes that contain the given ingredient (case-insensitive)
router.get("/search", (req, res) => {
  const { ingredient } = req.query;

  if (!ingredient || ingredient.trim() === "") {
    return res.status(400).json({ error: "Please provide an ingredient query parameter." });
  }

  const query = ingredient.trim().toLowerCase();

  const results = recipes.filter((recipe) =>
    recipe.ingredients.some((item) => item.toLowerCase().includes(query))
  );

  res.json(results);
});

module.exports = router;
