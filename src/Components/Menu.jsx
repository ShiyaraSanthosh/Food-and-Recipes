import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilterData from "./FilterData";

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategoryMeals, setSelectedCategoryMeals] = useState([]);
  const [error, setError] = useState(null);

  const fetchMeals = async () => {
    try {
      setError(null);
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
      );
      const data = await response.json();

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setError("No meals found");
      }
    } catch (error) {
      setError("Failed to fetch meals");
      console.error("Error fetching meals:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();

      if (data.categories) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchMealsByCategory = async (category) => {
    try {
      setError(null);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();

      if (data.meals) {
        setSelectedCategoryMeals(data.meals);
      } else {
        setSelectedCategoryMeals([]);
      }
    } catch (error) {
      setError("Failed to fetch category meals");
      console.error("Error fetching category meals:", error);
    }
  };

  useEffect(() => {
    fetchMeals();
    fetchCategories();
    // Load default category (Beef) on mount
    fetchMealsByCategory("Beef");
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Loading delicious recipes...
          </h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">{error}</h2>
          <button
            onClick={fetchMeals}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <SpecialDishes meals={meals} />
      <FilterData
        categories={categories}
        allMeals={meals}
        selectedCategoryMeals={selectedCategoryMeals}
        onCategorySelect={fetchMealsByCategory}
      />
    </div>
  );
};

export default Menu;
