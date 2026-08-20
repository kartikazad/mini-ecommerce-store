"use client";

import { useState } from "react";

export default function ProductCard({ name, price, image }) {
  const [inCart, setInCart] = useState(false);

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">${price}</p>
      <button
        onClick={() => setInCart(true)}
        disabled={inCart}
        className={`mt-3 w-full py-2 rounded-md text-white ${
          inCart ? "bg-green-600" : "bg-black hover:bg-gray-800"
        }`}
      >
        {inCart ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}