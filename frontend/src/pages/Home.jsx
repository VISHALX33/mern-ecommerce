import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productSlice";
import ProductCard from "../components/ProductCard";
import HeroSlider from "../components/HeroSlider";
import TopOffers from "../components/TopOffers";
import BestDeals from "../components/BestDeals";
import PosterGrid from "../components/PosterGrid";
import FeaturedShowcase from "../components/FeaturedShowcase";

export default function Home() {
  const dispatch = useDispatch();
  const { products, status } = useSelector((s) => s.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
        <HeroSlider />
        <TopOffers />
        <BestDeals />
        <PosterGrid />
        <FeaturedShowcase />
        <HeroSlider />
        <PosterGrid />
        <FeaturedShowcase />
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p._id} product={p} />)}
        </div>
      )}
    </div>
  );
}
