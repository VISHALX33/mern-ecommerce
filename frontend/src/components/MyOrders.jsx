import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function MyOrders() {
  const user = useSelector((s) => s.user.userInfo);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get("http://localhost:5000/api/payments/myorders", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setOrders(data.orders);
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
      {orders.map((order) => (
        <div key={order._id} className="border rounded p-4 mb-3 bg-white shadow">
          <div><strong>Order ID:</strong> {order._id}</div>
          <div><strong>Status:</strong> {order.status}</div>
          <div><strong>Total:</strong> ₹{order.totalAmount}</div>
        </div>
      ))}
    </div>
  );
}
