/**
 * Home.jsx
 * Main page of the Recipe Finder.
 *
 * State managed here:
 *   - query         : current raw text in the search bar
 *   - recipes       : list of recipes currently displayed
 *   - selectedRecipe: the recipe the user clicked (null = list view)
 *   - loading       : whether a network request is in flight
 *   - error         : error message string, if any
 *
 * The debounced query drives API calls.
 * Clicking a card sets selectedRecipe → shows RecipeDetail.
 * Clicking Back clears selectedRecipe → returns to list.
 */

import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import RecipeDetail from "../components/RecipeDetail";
import NoResults from "../components/NoResults";
import useDebounce from "../hooks/useDebounce";
import { getAllRecipes, searchByIngredient } from "../api/recipeApi";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Wait 350ms after the user stops typing before firing an API call
  const debouncedQuery = useDebounce(query, 350);

  // Fetch recipes whenever the debounced query changes
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);
      setSelectedRecipe(null); // reset detail view on new search

      try {
        let data;
        if (debouncedQuery.trim() === "") {
          data = await getAllRecipes();
        } else {
          data = await searchByIngredient(debouncedQuery.trim());
        }
        setRecipes(data);
      } catch (err) {
        console.error("Failed to fetch recipes:", err);
        setError("Could not connect to the server. Please make sure the backend is running.");
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [debouncedQuery]);

  // ── If a recipe is selected, show the detail view ──
  if (selectedRecipe) {
    return (
      <RecipeDetail
        recipe={selectedRecipe}
        onBack={() => setSelectedRecipe(null)}
      />
    );
  }

  // ── Otherwise, show the search + list view ──
  return (
    <div className="home-container">
      {/* Hero Header */}
      <header className="hero">
        <div className="hero-tag">🇮🇳 Indian Home Cooking</div>
        <h1 className="hero-title">
          Find Your <span className="hero-highlight">Perfect Recipe</span>
        </h1>
        <p className="hero-subtitle">
          Search by ingredient and discover authentic Indian recipes — from quick weeknight meals to slow-cooked classics.
        </p>
        <SearchBar query={query} onChange={setQuery} />
      </header>

      {/* Results area */}
      <main className="results-area" id="results" aria-label="Recipe results">
        {/* Status bar */}
        {!loading && !error && (
          <div className="results-status" aria-live="polite">
            {debouncedQuery
              ? `${recipes.length} recipe${recipes.length !== 1 ? "s" : ""} with "${debouncedQuery}"`
              : `Showing all ${recipes.length} recipes`}
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="skeleton-grid" aria-label="Loading recipes…" role="status">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeleton-card" aria-hidden="true" />
            ))}
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="error-banner" role="alert">
            <span>⚠️</span> {error}
          </div>
        )}

        {/* No results */}
        {!loading && !error && recipes.length === 0 && debouncedQuery && (
          <NoResults ingredient={debouncedQuery} />
        )}

        {/* Recipe grid */}
        {!loading && !error && recipes.length > 0 && (
          <div className="recipe-grid">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={setSelectedRecipe}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
