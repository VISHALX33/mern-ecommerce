import { useState, useEffect } from "react";
import api from "../utils/axios";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const fetchAllOrders = async () => {
    try {
      const { data } = await api.get("/orders/all");
      setOrders(data);
    } catch (error) {
      console.error("❌ Error fetching orders:", error);
      alert("Failed to load orders. Please check the server logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="p-6 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4">🧾 All Orders</h1>

        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table className="min-w-full border border-gray-300 shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Order ID</th>
                <th className="p-2 border">User</th>
                <th className="p-2 border">Items</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="p-2 border text-sm">{order._id}</td>
                  <td className="p-2 border text-sm">
                    {order.user?.name || "Unknown"} <br />
                    <span className="text-gray-500 text-xs">
                      {order.user?.email}
                    </span>
                  </td>
                  <td className="p-2 border text-sm">
                    {order.orderItems?.map((item) => (
                      <div key={item._id}>
                        {item.name} × {item.qty}
                      </div>
                    ))}
                  </td>
                  <td className="p-2 border text-sm font-semibold">
                    ₹{order.totalPrice?.toLocaleString() || "0"}
                  </td>
                  <td
                    className={`p-2 border text-sm font-semibold ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Cancelled"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="p-2 border text-sm">
                    {order.shippingAddress
                      ? `${order.shippingAddress.address}, ${order.shippingAddress.city}`
                      : "—"}
                  </td>
                  <td className="p-2 border text-sm">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    <br />
                    <span className="text-xs text-gray-500">
                      {new Date(order.createdAt).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
