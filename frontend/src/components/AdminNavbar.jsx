import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav className="bg-gray-900 text-white p-3 flex gap-4">
      <Link to="/admin" className="hover:text-blue-400">Dashboard</Link>
      <Link to="/admin/products" className="hover:text-blue-400">Products</Link>
      <Link to="/admin/offers" className="hover:text-blue-400">Offers</Link>
      <Link to="/admin/banners" className="hover:text-blue-400">Banners</Link>
      <Link to="/admin/orders" className="hover:text-blue-400">Orders</Link>
    </nav>
  );
}
