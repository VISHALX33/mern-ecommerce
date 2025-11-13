import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CategoryProducts from "./pages/CategoryProducts";
import MyOrders from "./components/MyOrders";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProducts from "./admin/AdminProducts";
import AdminOffers from "./admin/AdminOffers";
import AdminBanners from "./admin/AdminBanners";
import AdminOrders from "./admin/AdminOrders";


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        
        <main className="container mx-auto p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
      <Route path="/my-orders" element={<MyOrders />} />
<Route path="/category/:category" element={<CategoryProducts />} />
            {/* <Route path="/orders" element={<MyOrders />} /> */}

            <Route path="/admin" element={<AdminDashboard />} />
<Route path="/admin/products" element={<AdminProducts />} />
<Route path="/admin/offers" element={<AdminOffers />} />
<Route path="/admin/banners" element={<AdminBanners />} />
<Route path="/admin/orders" element={<AdminOrders />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
