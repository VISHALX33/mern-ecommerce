import { useState, useEffect } from "react";
import api from "../utils/axios";
// import AdminNavbar from "../../components/AdminNavbar";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminBanners() {
  const [banners, setBanners] = useState([]);
  const [form, setForm] = useState({
    title: "",
    image: "",
    link: "",
  });

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const { data } = await api.get("/banners");
      setBanners(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/banners", form);
      alert("✅ Banner created successfully!");
      setForm({ title: "", image: "", link: "" });
      fetchBanners();
    } catch (error) {
      alert("❌ Failed to create banner");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Manage Banners</h1>

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mb-6">
          <input
            placeholder="Banner Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="border p-2 rounded w-48"
          />
          <input
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="border p-2 rounded w-72"
          />
          <input
            placeholder="Redirect Link"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            className="border p-2 rounded w-72"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Banner
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {banners.map((banner) => (
            <div
              key={banner._id}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h2 className="font-semibold">{banner.title}</h2>
                <a
                  href={banner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm underline"
                >
                  {banner.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
