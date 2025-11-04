import React, { useEffect, useState } from "react";
import API from "../utils/axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function BestDeals() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const { data } = await API.get("/products");
        // Filter common phone brands — adjust list as needed
        const phoneBrands = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme"];
        const phonesOnly = data.filter((p) => phoneBrands.includes(p.brand));
        setPhones(phonesOnly.slice(0, 10)); // limit to 10
      } catch (err) {
        console.error("Error fetching phones:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPhones();
  }, []);

  const handleBuyNow = (product) => {
    dispatch(addToCart({ ...product, qty: 1 })); // Add product to cart
    navigate("/checkout"); // Redirect to checkout
  };

  if (loading) return <section className="py-10 text-center">Loading phones...</section>;

  return (
    <section className="w-full max-w-[1300px] mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Best Deals on Smartphones</h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {phones.map((p, i) => (
          <div
            key={p._id || i}
            className="min-w-[200px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <img src={p.image || p.img} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-gray-800">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.brand}</p>
              <p className="font-bold text-indigo-600 mt-1">₹{p.price}</p>

              <button
                onClick={() => handleBuyNow(p)}
                className="mt-3 bg-indigo-600 text-white px-4 py-1 rounded-md text-sm hover:bg-indigo-700"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
