
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

  const debouncedQuery = useDebounce(query, 350);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);
      setSelectedRecipe(null);

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
        setError(
          "Could not connect to the server. Please make sure the backend is running."
        );
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [debouncedQuery]);

  // Recipe detail view
  if (selectedRecipe) {
    return (
      <RecipeDetail
        recipe={selectedRecipe}
        onBack={() => setSelectedRecipe(null)}
      />
    );
  }

  return (
    <div className="home-container">

      {/* Navigation */}
      <nav className="site-nav">
        <a href="/" className="nav-brand">
          <span className="nav-logo">🍲</span>
          <span>Recipe<span className="nav-brand-highlight">Finder</span></span>
        </a>

        <a href="#results" className="nav-link">
          Explore Recipes <span>↗</span>
        </a>
      </nav>

      {/* Hero Section */}
      <header className="hero">

        <div className="hero-tag">
          🇮🇳 &nbsp; Made for Indian Home Cooking
        </div>

        <h1 className="hero-title">
          Find Your <span className="hero-highlight">Perfect Recipe</span>
        </h1>

        <p className="hero-subtitle">
          Good food starts with what you have.
          Discover delicious Indian recipes using
          ingredients already in your kitchen.
        </p>

        <SearchBar query={query} onChange={setQuery} />

        <div className="hero-note">
          ✨ Simple ingredients. Delicious possibilities.
        </div>

      </header>

      {/* Recipe Results */}
      <main className="results-area" id="results" aria-label="Recipe results">

        {!loading && !error && recipes.length > 0 && (
          <div className="results-heading">

            <div>
              <span className="section-eyebrow">FRESH FROM YOUR KITCHEN</span>

              <h2 className="results-title">
                {debouncedQuery
                  ? `Recipes with ${debouncedQuery}`
                  : "Explore Our Recipes"}
              </h2>

              <p className="results-description">
                Find something delicious to cook today.
              </p>
            </div>

            <span className="recipe-count">
              {recipes.length} {recipes.length === 1 ? "Recipe" : "Recipes"}
            </span>

          </div>
        )}

        {/* Loading */}
        {loading && (
          <div
            className="skeleton-grid"
            aria-label="Loading recipes"
            role="status"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="skeleton-card"
                aria-hidden="true"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="error-banner" role="alert">
            <span>⚠️</span> {error}
          </div>
        )}

        {/* No results */}
        {!loading && !error && recipes.length === 0 && debouncedQuery && (
          <NoResults ingredient={debouncedQuery} />
        )}

        {/* Recipe cards */}
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
