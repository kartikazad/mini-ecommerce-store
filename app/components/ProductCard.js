export default function ProductCard({ name, price, image }) {
    return (
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">${price}</p>
        <button className="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    );
  }