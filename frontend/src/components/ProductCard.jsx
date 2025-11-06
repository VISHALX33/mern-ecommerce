import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded shadow p-3 flex flex-col">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded" />
        <h3 className="mt-2 font-semibold">{product.name}</h3>
      </Link>
      <div className="mt-auto">
        <div className="text-emerald-600 font-bold">₹{product.price}</div>
        <button
          onClick={() => dispatch(addToCart({ ...product, qty: 1 }))}
          className="mt-2 w-full bg-emerald-600 text-white py-1 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
