import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Checkout() {
  const user = useSelector((s) => s.user?.userInfo);
  const cartItems = useSelector((s) => s.cart?.cartItems || []);
  const location = useLocation();
  const subtotal = location.state?.subtotal || 0;

  const [shipping, setShipping] = useState({
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    email: user?.email || "",
  });

  const handlePayment = async () => {
    if (!user?._id) return alert("Please login before checkout");

    try {
      // 1️⃣ Create Razorpay order
      const { data } = await axios.post(
        "http://localhost:5000/api/payments/order",
        { amount: subtotal },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: "INR",
        name: "AuronKart",
        description: "Order Payment",
        order_id: data.order.id,

        handler: async function (response) {
          try {
            // 2️⃣ Verify payment
            await axios.post(
              "http://localhost:5000/api/payments/verify",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                orderData: {
                  user: user._id,
                  cartItems,
                  shippingInfo: shipping,
                  totalAmount: subtotal,
                },
              },
              {
                headers: { Authorization: `Bearer ${user.token}` },
              }
            );
            alert("✅ Payment successful! Your order has been placed.");
          } catch (err) {
            console.error("Verification failed:", err);
            alert("Payment verification failed");
          }
        },

        prefill: {
          name: user?.name || "",
          email: user?.email || "",
          contact: shipping.phone,
        },
        theme: {
          color: "#6366f1",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Error creating payment order");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      {["address", "city", "state", "pincode", "phone", "email"].map((field) => (
        <input
          key={field}
          type="text"
          placeholder={field[0].toUpperCase() + field.slice(1)}
          className="border p-2 w-full mb-2"
          value={shipping[field]}
          onChange={(e) => setShipping({ ...shipping, [field]: e.target.value })}
        />
      ))}

      <button
        onClick={handlePayment}
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 w-full"
      >
        Pay ₹{subtotal}
      </button>
    </div>
  );
}
