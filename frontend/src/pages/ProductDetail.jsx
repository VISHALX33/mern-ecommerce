import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../slices/productSlice";
import { addToCart } from "../slices/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, status } = useSelector((s) => s.product);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <div>
      {status === "loading" || !product ? (
        <div>Loading...</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded" />
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4 text-emerald-600 font-bold text-xl">₹{product.price}</div>

            <div className="mt-4 flex items-center gap-3">
              <label>Qty</label>
              <select value={qty} onChange={(e) => setQty(Number(e.target.value))} className="border p-1">
                {Array.from({ length: Math.min(product.countInStock, 10) }).map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => dispatch(addToCart({ ...product, qty }))}
              className="mt-6 bg-emerald-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
