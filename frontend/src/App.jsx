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

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
