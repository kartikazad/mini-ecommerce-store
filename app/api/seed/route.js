import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  await connectDB();

  await Product.deleteMany({});

  const products = await Product.insertMany([
    { name: "Blue T-Shirt", price: 19.99, image: "https://i.ibb.co/39zXxqYp/Blue-tshirt.png" },
    { name: "Red Sneakers", price: 49.99, image: "https://loremflickr.com/400/300/sneakers,shoes" },
    { name: "Black Backpack", price: 34.99, image: "https://i.ibb.co/1JQHFJyL/lenovo-black-bag.png" },
    { name: "Leather Wallet", price: 24.99, image: "https://loremflickr.com/400/300/wallet,leather" },
  ]);

  return Response.json({ message: "Seeded!", products });
}