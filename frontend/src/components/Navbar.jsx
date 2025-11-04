import { Link } from "react-router-dom";

export default function Navbar() {
  const categories = [
    {
      name: "Mobile & Tablet",
      img: "https://cdn-icons-png.flaticon.com/512/679/679720.png",
      path: "/category/Mobile%20&%20Tablet",
    },
    {
      name: "Fashion",
      img: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
      path: "/category/fashion",
    },
    {
      name: "Electronics",
      img: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      path: "/category/electronics",
    },
    {
      name: "Home & Furniture",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      path: "/category/home%20&%20furniture",
    },
    {
      name: "TVs & Appliances",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920232.png",
      path: "/category/tvs%20&%20appliances",
    },
    {
      name: "Flight Bookings",
      img: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
      path: "/category/flights",
    },
    {
      name: "Beauty & Grocery",
      img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
      path: "/category/beauty%20&%20grocery",
    },
  ];

  return (
    <nav className="bg-white shadow-sm border-t border-gray-100">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 overflow-x-auto">
        {categories.map((cat) => (
          <Link
            to={cat.path}
            key={cat.name}
            className="flex flex-col items-center text-gray-700 hover:text-indigo-600 hover:scale-105 transition-transform w-24 min-w-[90px]"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-10 h-10 mb-1 object-contain"
            />
            <span className="text-sm font-medium text-center">{cat.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
