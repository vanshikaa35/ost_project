/**
 * RecipeCard.jsx
 * Displays a summary card for one recipe.
 * Shows: name, ingredient count badge, and cook time.
 * Clicking calls the onSelect handler to open the detail view.
 */

import React from "react";

const RecipeCard = ({ recipe, onSelect }) => {
  const { name, ingredients, cookTime } = recipe;

  return (
    <article
      className="recipe-card"
      onClick={() => onSelect(recipe)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${name}`}
      onKeyDown={(e) => e.key === "Enter" && onSelect(recipe)}
    >
      <div className="card-accent" aria-hidden="true" />

      <h2 className="card-title">{name}</h2>

      <div className="card-meta">
        <span className="badge badge-ingredients">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 2l1.5 9h15L21 2" />
            <path d="M3 11s1 7 1.5 9h15c.5-2 1.5-9 1.5-9" />
          </svg>
          {ingredients.length} ingredients
        </span>

        <span className="badge badge-time">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {cookTime} min
        </span>
      </div>

      <p className="card-preview">
        {ingredients.slice(0, 4).join(", ")}
        {ingredients.length > 4 && ` +${ingredients.length - 4} more`}
      </p>

      <span className="card-cta" aria-hidden="true">View Recipe →</span>
    </article>
  );
};

export default RecipeCard;
