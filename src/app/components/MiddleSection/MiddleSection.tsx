import React from "react";

export const MiddleSection: React.FC = () => {
  return (
    <div
      className="mt-16 mb-16 w-full rounded-xl h-[100px] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/middlesectionbackground.png')",
      }}
    >
      <h2 className="text-xl font-medium text-center text-gray-900 z-10">
        Black Friday 2025: The Best Black Friday Ads
      </h2>
    </div>
  );
};
