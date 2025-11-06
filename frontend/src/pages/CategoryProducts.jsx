import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import API from "../utils/axios";

export default function CategoryProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get(`/products?category=${category}`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-lg font-medium text-gray-600">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-10 text-gray-600">
        No products found in <strong>{decodeURIComponent(category)}</strong>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
        {decodeURIComponent(category)}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white flex flex-col"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-contain mb-3"
            />
            <h3 className="font-medium text-gray-800 truncate">{p.name}</h3>
            <p className="text-emerald-600 font-semibold mt-1">₹{p.price}</p>

            <button
              onClick={() => dispatch(addToCart({ ...p, qty: 1 }))}
              className="mt-auto bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-sm font-medium transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
