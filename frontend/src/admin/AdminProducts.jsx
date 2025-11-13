import { useState, useEffect } from "react";
import api from "../utils/axios"; // your axios setup file
import AdminNavbar from "../components/AdminNavbar";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "" });

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/products", form);
      alert("✅ Product Created!");
      const { data } = await api.get("/products");
      setProducts(data);
      setForm({ name: "", price: "", category: "" });
    } catch (err) {
      alert("❌ Failed to add product");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Manage Products</h1>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="border p-2 rounded"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Add
          </button>
        </form>

        <table className="min-w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td className="p-2 border">{p.name}</td>
                <td className="p-2 border">₹{p.price}</td>
                <td className="p-2 border">{p.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
