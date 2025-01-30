import React from "react";
import { CartProvider } from "./components/Cart/CartContext";
import Header from "./components/Header/Header";
import { MainContent } from "./components/MainContent";
import { ProductGrid } from "./components/Product/ProductGrid";
import { MiddleSection } from "./components/MiddleSection/MiddleSection";
import Cart from "./components/Cart/Cart";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <MainContent />
          <MiddleSection />
          <ProductGrid />
        </main>
        <Cart />
      </div>
    </CartProvider>
  );
}
