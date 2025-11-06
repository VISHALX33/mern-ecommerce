import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile() {
  const user = useSelector((s) => s.user.userInfo);
  if (!user) return <div>Please login to view profile</div>;

  if (!user)
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-700">
        <p className="text-lg">Please login to view your profile</p>
        <Link
          to="/login"
          className="mt-4 px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
        >
          Go to Login
        </Link>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-3">
        My Profile
      </h2>

      <div className="mt-6 space-y-3">
        <div className="text-gray-700">
          <strong className="font-semibold">Name:</strong> {user.name}
        </div>
        <div className="text-gray-700">
          <strong className="font-semibold">Email:</strong> {user.email}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Account Options
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
         <Link
        to="/my-orders"
        className="block mt-6 bg-emerald-600 text-white py-2 rounded text-center hover:bg-emerald-700 transition"
      >
        View My Orders
      </Link>
          <Link
            to="/cart"
            className="flex-1 text-center px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition"
          >
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
