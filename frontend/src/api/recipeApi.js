/**
 * recipeApi.js
 * Centralized API layer — all HTTP calls to the backend live here.
 * Uses axios for clean request handling.
 */

import axios from "axios";

const BASE_URL = "https://recipe-finder-backend-epwh.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
});

/**
 * Fetch all recipes from the backend.
 * @returns {Promise<Array>} Array of recipe objects
 */
export const getAllRecipes = async () => {
  const response = await api.get("/recipes");
  return response.data;
};

/**
 * Search recipes by ingredient name.
 * @param {string} ingredient - The ingredient to search for
 * @returns {Promise<Array>} Array of matching recipe objects
 */
export const searchByIngredient = async (ingredient) => {
  const response = await api.get("/recipes/search", {
    params: { ingredient },
  });
  return response.data;
};
