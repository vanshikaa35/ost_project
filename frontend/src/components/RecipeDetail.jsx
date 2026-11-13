/**
 * RecipeDetail.jsx
 * Full detail view for a single recipe.
 * Shows: recipe name, cook time, complete ingredient list, and numbered steps.
 * onBack callback navigates back to the recipe list.
 */

import React from "react";

const RecipeDetail = ({ recipe, onBack }) => {
  const { name, ingredients, steps, cookTime } = recipe;

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={onBack} aria-label="Go back to recipe list">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to Recipes
      </button>

      <header className="detail-header">
        <h1 className="detail-title">{name}</h1>
        <span className="detail-time-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {cookTime} minutes
        </span>
      </header>

      <div className="detail-body">
        {/* ── Ingredients ── */}
        <section className="detail-section" aria-labelledby="ingredients-heading">
          <h2 id="ingredients-heading" className="section-heading">
            <span className="section-icon">🧄</span> Ingredients
            <span className="section-count">({ingredients.length})</span>
          </h2>
          <ul className="ingredient-list">
            {ingredients.map((item, index) => (
              <li key={index} className="ingredient-item">
                <span className="ingredient-dot" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Steps ── */}
        <section className="detail-section" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="section-heading">
            <span className="section-icon">🍳</span> Steps
          </h2>
          <ol className="steps-list">
            {steps.map((step, index) => (
              <li key={index} className="step-item">
                <span className="step-number" aria-hidden="true">{index + 1}</span>
                <p className="step-text">{step}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetail;
