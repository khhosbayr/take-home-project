import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useCart } from "../Cart/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 });
  };

  return (
    <div className="group">
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full"
        />
        <button
          onClick={handleAddToCart}
          className="absolute top-3 left-3 p-1.5 rounded-full bg-white shadow-lg hover:bg-gray-50"
        >
          <Plus size={18} />
        </button>
      </div>
      <div className="mt-3">
        <h3 className="text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
};
