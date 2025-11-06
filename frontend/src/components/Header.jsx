import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/userSlice";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const cart = useSelector((s) => s.cart.cartItems);
  const user = useSelector((s) => s.user.userInfo);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      nav(`/search?q=${search}`);
      setSearch("");
    }
  };

  return (
    <header className="bg-emerald-600  text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Left side: Logo + Search */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-bold tracking-wide">Auron</Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative hidden sm:block">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="px-3 py-1 rounded-full bg-white text-gray-900 focus:outline-none w-64"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm hover:bg-emerald-700"
            >
              Search
            </button>
          </form>
        </div>

        {/* Right side: Cart + User */}
        <div className="flex items-center gap-6 relative">
          {/* Cart */}
          <Link to="/cart" className="relative hover:text-emerald-200">
            🛒 Cart
            <span className="ml-1 bg-white text-emerald-600 rounded-full px-2 text-xs font-semibold">
              {cart.length}
            </span>
          </Link>

          {/* User Section */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 bg-emerald-500 px-3 py-1 rounded hover:bg-emerald-700"
              >
                {user.name}
                <FiChevronDown size={18} />
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-emerald-50"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/auron-plus"
                    className="block px-4 py-2 hover:bg-emerald-50"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Auron Plus
                  </Link>
                  <Link
                    to="/my-orders"
                    className="block px-4 py-2 hover:bg-emerald-50"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Orders
                  </Link>
                  <Link
                    to="/wishlist"
                    className="block px-4 py-2 hover:bg-emerald-50"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Wishlist
                  </Link>
                  <Link
                    to="/notifications"
                    className="block px-4 py-2 hover:bg-emerald-50"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Notifications
                  </Link>
                  <button
                    onClick={() => {
                      dispatch(logout());
                      setDropdownOpen(false);
                      nav("/login");
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-emerald-500 px-3 py-1 rounded hover:bg-emerald-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
