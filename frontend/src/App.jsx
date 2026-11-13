/**
 * App.jsx
 * Root component — renders the Home page.
 * Any future routing (e.g. React Router) would be added here.
 */

import React from "react";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app">
      <Home />
      <footer className="app-footer">
        <p>Recipe Finder &nbsp;·&nbsp; Built with React &amp; Express &nbsp;🍛</p>
      </footer>
    </div>
  );
};

export default App;
