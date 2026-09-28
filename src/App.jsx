import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Cart from "./Component/Cart";
import Login from "./Component/Login";
import Store from "./Component/Store";
import Checkout from "./Component/Checkout";
import Dashboard from "./Component/Dashborad";
import ProductDetail from "./Component/ProductDetail";
import Admin from   "./Component/Admin" ;
import BookTrainer from "./Component/BookTrainer";
import Blog from "./Component/BLog";
import Contact from "./Component/Contact";
import Membership from "./Component/Membership";


function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart functionality for ProductDetail page
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    alert(`${product.name} cart me add ho gaya hai!`);
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/dashborad" element={<Dashboard />} />
        <Route
          path="/product/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/BookTrainer" element={<BookTrainer />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/membership" element={<Membership/>} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;