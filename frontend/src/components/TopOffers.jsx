import { useEffect, useState } from "react";
import API from "../utils/axios";

export default function TopOffers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const { data } = await API.get("/offers"); // GET /api/offers
        setOffers(data);
      } catch (err) {
        console.error("Error fetching offers", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  if (loading) return <div className="py-8 text-center">Loading offers...</div>;

  return (
    <div className="w-full max-w-[1300px] mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Offers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {offers.map((offer) => (
          <div key={offer._id} className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden cursor-pointer">
            <img src={offer.img} alt={offer.name} className="w-full h-36 object-cover" />
            <div className="text-center py-2 font-medium text-gray-700">{offer.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
