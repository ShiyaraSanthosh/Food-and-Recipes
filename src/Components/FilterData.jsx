import React, { useState, useEffect } from "react";

// Shimmer Loading Components
const ShimmerCard = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
    <div className="w-full h-56 bg-gray-300"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-300 rounded mb-3"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  </div>
);

const ShimmerButton = () => (
  <div className="h-12 w-24 bg-gray-300 rounded-lg animate-pulse"></div>
);

const FilterData = ({
  categories,
  allMeals,
  selectedCategoryMeals,
  onCategorySelect,
}) => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryClick = async (category) => {
    setActiveCategory(category);
    setIsCategoryLoading(true);
    onCategorySelect(category);

    // Simulate loading delay
    setTimeout(() => {
      const filtered = allMeals.filter((meal) => meal.strCategory === category);
      setFilteredMeals(filtered);
      setIsCategoryLoading(false);
    }, 800);
  };

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
        <div className="absolute top-4 right-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {meal.strCategory}
          </span>
        </div>
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

  const renderCategoryButton = (category, index) => (
    <button
      key={category.idCategory || index}
      onClick={() => handleCategoryClick(category.strCategory)}
      type="button"
      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 transform hover:scale-105 ${
        category.strCategory === activeCategory
          ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
          : "bg-white text-gray-700 hover:bg-orange-50 border-2 border-gray-200 hover:border-orange-300"
      }`}>
      {category.strCategory}
    </button>
  );

  const renderNoItemsMessage = () => (
    <div className="col-span-full flex justify-center items-center py-20">
      <div className="text-center">
        <div className="text-8xl mb-6 animate-bounce">🍽️</div>
        <h2 className="text-3xl font-bold text-gray-600 mb-4">
          No items found
        </h2>
        <p className="text-gray-500 text-lg">
          Try selecting a different category
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Choose Your Favorite Categories
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ShimmerButton key={index} />
            ))
          : categories.map(renderCategoryButton)}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {isCategoryLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : selectedCategoryMeals.map(renderMealCard)}
        {filteredMeals.length === 0 &&
          selectedCategoryMeals.length === 0 &&
          !isCategoryLoading &&
          renderNoItemsMessage()}
      </div>
    </div>
  );
};

export default FilterData;
