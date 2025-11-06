import { useEffect, useState } from "react";
import API from "../utils/axios";

export default function FeaturedShowcase() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  const topSelection = products.slice(0, 4);
  const bestQuality = products.slice(4, 8);

  const renderGrid = (title, items) => (
    <div className="flex-1 bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
        {title}
        <button className="bg-gray-100 hover:bg-gray-200 p-1 rounded-full text-gray-600 text-sm">›</button>
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {items.map((p) => (
          <div key={p._id} className="border rounded-lg p-2 hover:shadow-md transition">
            <img src={p.image || "https://via.placeholder.com/150"} alt={p.name} className="w-full h-32 object-contain mb-2" />
            <p className="text-sm font-medium text-gray-800">{p.name}</p>
            <p className="text-emerald-600 text-sm font-semibold">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="max-w-[1300px] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
      <div className="flex flex-col lg:flex-row gap-6 flex-[2]">
        {renderGrid("Top Selection", topSelection)}
        {renderGrid("Best Quality", bestQuality)}
      </div>

      <div className="flex-1">
        <img
          src="https://res.cloudinary.com/dwq5qifuk/image/upload/v1762420246/Gemini_Generated_Image_85ybul85ybul85yb_amoqmy.png"
          alt="Shop your fashion needs"
          className="rounded-lg w-full h-full object-cover shadow"
        />
      </div>
    </section>
  );
}
