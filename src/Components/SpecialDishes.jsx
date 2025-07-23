import React, { useState, useEffect } from "react";

const MAX_DISHES_TO_SHOW = 8;

// Shimmer Loading Component
const ShimmerCard = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-300"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  </div>
);

const SpecialDishes = ({ meals }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderMealCard = (meal, index) => (
    <li
      key={meal.idMeal || index}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
            View Recipe
          </button>
        </div> */}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
          {meal.strMeal}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">⭐ 4.8</span>
          <span className="text-sm text-orange-500 font-semibold">30 min</span>
        </div>
      </div>
    </li>
  );

  const specialMeals = meals.slice(0, MAX_DISHES_TO_SHOW);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="text-4xl">️</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Our Special Dishes
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Indian cuisine boasts a wide array of dishes, with some considered
          special due to their unique preparation, rich flavors, or association
          with special occasions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {isLoading
          ? Array.from({ length: MAX_DISHES_TO_SHOW }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : specialMeals.map(renderMealCard)}
      </div>
    </div>
  );
};

export default SpecialDishes;
