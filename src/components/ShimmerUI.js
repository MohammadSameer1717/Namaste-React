import React from "react";

const ShimmerUI = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-6">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 rounded-lg p-4 shadow-md animate-pulse"
        >
          <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;