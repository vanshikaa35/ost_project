/**
 * NoResults.jsx
 * Empty-state component shown when a search yields no matches.
 * Accepts the searched ingredient name to show a contextual message.
 */

import React from "react";

const NoResults = ({ ingredient }) => {
  return (
    <div className="no-results" role="status" aria-live="polite">
      <div className="no-results-icon" aria-hidden="true">🔍</div>
      <h2 className="no-results-title">No recipes found</h2>
      {ingredient && (
        <p className="no-results-message">
          We couldn&apos;t find any recipes with <strong>"{ingredient}"</strong>.
          <br />
          Try a different ingredient like <em>paneer</em>, <em>rice</em>, or <em>tomato</em>.
        </p>
      )}
    </div>
  );
};

export default NoResults;
