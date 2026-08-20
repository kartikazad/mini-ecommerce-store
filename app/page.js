"use client";

import { useState } from "react";
import ProductCard from "./components/ProductCard";

const products = [
  { id: 1, name: "Blue T-Shirt", price: 19.99, image: "https://picsum.photos/seed/1/400/300" },
  { id: 2, name: "Red Sneakers", price: 49.99, image: "https://picsum.photos/seed/2/400/300" },
  { id: 3, name: "Black Backpack", price: 34.99, image: "https://picsum.photos/seed/3/400/300" },
  { id: 4, name: "Leather Wallet", price: 24.99, image: "https://picsum.photos/seed/4/400/300" },
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mini Store</h1>
        <div className="bg-black text-white px-4 py-2 rounded-md">
          🛒 Cart: {cartCount}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </main>
  );
}