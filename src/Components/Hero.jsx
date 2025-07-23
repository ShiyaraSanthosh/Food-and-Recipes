import React, { useState, useEffect } from "react";

const HERO_IMAGE_URL =
  "https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 transform scale-110">
        <img
          className="w-full h-full object-cover animate-pulse"
          src={HERO_IMAGE_URL}
          alt="Delicious food background"
        />
      </div>

      {/* Multiple Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-orange-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-red-500/10 rounded-full blur-lg animate-spin"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-8 lg:px-16">
        <div
          className={`max-w-4xl text-center text-white transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>

          {/* Main Heading with Typing Effect */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-100 to-yellow-100 bg-clip-text text-transparent">
              It's All About
            </span>
            <br />
            <span className="text-orange-400">Good Food</span>
            <span className="text-white"> & </span>
            <span className="text-yellow-400">Taste</span>
          </h1>

          {/* Subtitle with Enhanced Styling */}
          <p className="text-xl sm:text-2xl leading-relaxed mb-12 opacity-95 font-light max-w-3xl mx-auto">
            Discover amazing recipes and culinary delights that will satisfy
            your taste buds and bring joy to your dining table.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg">
              <span className="flex items-center gap-2">
                Explore Recipes
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>

            <button className="group border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                Watch Video
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">500+</div>
              <div className="text-sm opacity-80">Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">50K+</div>
              <div className="text-sm opacity-80">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">4.9★</div>
              <div className="text-sm opacity-80">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
