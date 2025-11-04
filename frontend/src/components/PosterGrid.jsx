import { useEffect, useState } from "react";
import API from "../utils/axios";

export default function PosterGrid() {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const { data } = await API.get("/banners"); // GET /api/banners
        setPosters(data);
      } catch (err) {
        console.error("Error fetching banners", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  if (loading) return <div className="text-center py-8">Loading banners...</div>;

  return (
    <section className="max-w-[1300px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Top Picks For You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posters.map((b, i) => (
          <div key={b._id || i} className="overflow-hidden rounded-lg shadow hover:shadow-xl transition duration-300">
            <img src={b.img} alt={b.altText || `poster-${i}`} className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
