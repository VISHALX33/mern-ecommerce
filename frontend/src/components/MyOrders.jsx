import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../utils/axios";

export default function MyOrders() {
  const user = useSelector((s) => s.user.userInfo);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await API.get("/payments/myorders", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setOrders(data.orders);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };
    if (user?.token) fetchOrders();
  }, [user]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order._id} className="border rounded p-4 mb-3 bg-white shadow">
            <div><strong>Order ID:</strong> {order._id}</div>
            <div><strong>Status:</strong> {order.status}</div>
            <div><strong>Total:</strong> ₹{order.totalAmount}</div>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}
