import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product_det from "./pages/Product_det";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product_det/:product_id" element={<Product_det />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cardpage" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order_list" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
