import React from "react";
import { ArrowRight } from "lucide-react";

export const Categories: React.FC = () => {
  const categories = [
    "All Categories",
    "Activewear",
    "Bikinis",
    "Sneakers",
    "Trousers",
    "Furniture",
  ];

  return (
    <div className="cat-bg-beige-other rounded-xl h-full">
      {categories.map((category, index) => (
        <div
          key={category}
          className={`flex justify-between items-center py-3 pl-6 pr-4 hover:bg-gray-100 cursor-pointer ${
            category === "All Categories" ? "cat-bg-beige font-semibold" : ""
          } ${index === 0 ? "rounded-t-xl" : ""} ${
            index === categories.length - 1 ? "rounded-b-xl" : ""
          }`}
        >
          <span className="text-2xl">{category}</span>
          <ArrowRight size={16} className="text-gray-400" />
        </div>
      ))}
    </div>
  );
};
