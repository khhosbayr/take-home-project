"use client";
import React from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

export const ProductGrid: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Underarm Smoothing Bra",
      price: "31.00",
      image: "/product1.png",
    },
    {
      id: 2,
      name: "Underarm Smoothing Bra",
      price: "31.00",
      image: "/product1.png",
    },
    {
      id: 3,
      name: "Underarm Smoothing Bra",
      price: "31.00",
      image: "/product1.png",
    },
    {
      id: 4,
      name: "Underarm Smoothing Bra",
      price: "31.00",
      image: "/product.png",
    },
    {
      id: 5,
      name: "Underarm Smoothing Bra",
      price: "31.00",
      image: "/product1.png",
    },
    {
      id: 6,
      name: "Underarm Smoothing Bra",
      price: "31.00",
      image: "/product.png",
    },
    {
      id: 7,
      name: "Underarm Smoothing Bra",
      price: "31.00",
      image: "/product.png",
    },
    {
      id: 8,
      name: "Underarm Smoothing Bra",
      price: "31.00",
      image: "/product.png",
    },
  ];
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
