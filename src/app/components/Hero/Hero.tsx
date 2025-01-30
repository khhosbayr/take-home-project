import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="= rounded-xl overflow-hidden h-full relative">
      <div className="relative w-full h-[550px]">
        <div
          className="w-full h-full bg-cover bg-center absolute inset-0"
          style={{
            backgroundImage: "url('/herobackground.png')",
          }}
        ></div>
        <div className="flex h-full relative z-10 items-center">
          <div className="p-12 w-1/2">
            <div className="inline-block px-3 py-1 bg-white rounded-full text-sm text-gray-600 mb-6">
              Spring summer &apos;22 women&apos;s collection
            </div>
            <h1 className="text-4xl font-bold mb-4 text-black">
              NEW COLLECTION <br />
              FOR WOMEN
            </h1>
            <p className="text-gray-600 mb-8 text-sm">
              Easy &amp; safe payment with PayPal, sequences &amp; embroidered
              for all
            </p>
            <button className=" text-black py-2 text-sm underline">
              VIEW COLLECTIONS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
