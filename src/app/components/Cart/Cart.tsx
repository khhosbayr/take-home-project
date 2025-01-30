"use client";
import React, { useState } from "react";
import { useCart } from "./CartContext";
import { LucideX } from "lucide-react";
import Image from "next/image";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleIncrease = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const handleDecrease = (id: number) => {
    const currentItem = cartItems.find((item) => item.id === id);
    if (currentItem && currentItem.quantity > 1) {
      updateQuantity(id, currentItem.quantity - 1);
    }
  };

  const handleToggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={handleToggleCart}
        className="fixed bottom-5 right-5 p-4 bg-blue-500 text-white rounded-full shadow-lg"
      >
        View Cart
      </button>

      {isOpen && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={handleToggleCart}
        >
          <div
            className="w-auto bg-white p-6 rounded-l-lg shadow-lg fixed top-0 right-0 bottom-0 z-50 overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-400">
              MY CART (ITEMS)
            </h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between my-4 border-b-2 border-gray-400 pb-4"
                  >
                    <div className="flex items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                      <div className="ml-4">
                        <p className="text-lg font-medium">{item.name}</p>
                        <p className="text-lg">
                          {item.quantity} X ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded-lg"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded-lg"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-600 hover:text-red-800"
                      >
                        <LucideX />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto">
              <div className="flex justify-between items-center mb-4">
                <div className="font-semibold text-lg">
                  <p>Total:</p>
                </div>
                <div className="font-semibold text-lg">
                  $
                  {cartItems
                    .reduce(
                      (total, item) =>
                        total + parseFloat(item.price) * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </div>
              </div>

              <div className="flex justify-center">
                <button className="w-full px-6 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
