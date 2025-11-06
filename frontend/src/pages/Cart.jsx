import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((s) => s.cart.cartItems);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const subtotal = cartItems.reduce((a, c) => a + Number(c.price) * (c.qty || 1), 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <div>Cart is empty. <Link to="/">Go shopping</Link></div>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded shadow flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div>Qty: {item.qty || 1}</div>
                </div>
                <div className="text-emerald-600 font-bold">₹{Number(item.price) * (item.qty || 1)}</div>
                <button onClick={() => dispatch(removeFromCart(item._id))} className="text-red-500">Remove</button>
              </div>
            ))
          )}
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Order Summary</h2>
          <div className="mt-2">Items: {cartItems.length}</div>
          <div className="mt-2 font-bold text-xl">Subtotal: ₹{subtotal}</div>
          <button onClick={() => nav("/checkout", { state: { subtotal } })} className="mt-4 w-full bg-emerald-600 text-white py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
