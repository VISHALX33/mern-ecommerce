import { useState, useEffect } from "react";
import api from "../utils/axios";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminOffers() {
  const [offers, setOffers] = useState([]);
  const [form, setForm] = useState({ title: "", discount: "" });

  useEffect(() => {
    api.get("/offers").then((res) => setOffers(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/offers", form);
    const { data } = await api.get("/offers");
    setOffers(data);
    setForm({ title: "", discount: "" });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Manage Offers</h1>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            placeholder="Discount"
            value={form.discount}
            onChange={(e) => setForm({ ...form, discount: e.target.value })}
            className="border p-2 rounded"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Add
          </button>
        </form>

        <ul>
          {offers.map((offer) => (
            <li key={offer._id} className="border-b py-2">
              {offer.title} - {offer.discount}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
