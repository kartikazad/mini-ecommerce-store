import ProductCard from "./components/ProductCard";

const products = [
  { id: 1, name: "Blue T-Shirt", price: 19.99, image: "https://picsum.photos/seed/1/400/300" },
  { id: 2, name: "Red Sneakers", price: 49.99, image: "https://picsum.photos/seed/2/400/300" },
  { id: 3, name: "Black Backpack", price: 34.99, image: "https://picsum.photos/seed/3/400/300" },
  { id: 4, name: "Leather Wallet", price: 24.99, image: "https://picsum.photos/seed/4/400/300" },
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mini Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
}