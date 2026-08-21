import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  await connectDB();

  await Product.deleteMany({}); // clear existing, so re-running doesn't duplicate

  const products = await Product.insertMany([
    { name: "Blue T-Shirt", price: 19.99, image: "https://picsum.photos/seed/1/400/300" },
    { name: "Red Sneakers", price: 49.99, image: "https://picsum.photos/seed/2/400/300" },
    { name: "Black Backpack", price: 34.99, image: "https://picsum.photos/seed/3/400/300" },
    { name: "Leather Wallet", price: 24.99, image: "https://picsum.photos/seed/4/400/300" },
  ]);

  return Response.json({ message: "Seeded!", products });
}