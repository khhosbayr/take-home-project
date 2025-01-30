import React from "react";
import { Categories } from "./Category/Categories";
import { Hero } from "./Hero/Hero";

export const MainContent: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-12 mt-2">
      <Categories />
      <div className="col-span-3">
        <Hero />
      </div>
    </div>
  );
};
