import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Login from "./components/Login";
import CartDrawer from "./components/CartDrawer";
import Help  from "./components/Help";

import Shop from "./pages/Shop";
import Shop2 from "./pages/Shop2";
import Shop3 from "./pages/Shop3";
import Switches from "./pages/Switches";
import Stabilisers from "./pages/Stabilisers";
import Lubricants from "./pages/Lubricants";
import Keycaps from "./pages/Keycaps";
import Accessories from "./pages/Accessories";



function HomePage({ cart, setCartOpen, cartOpen, setCart, addToCart, user, setUser }) {
  
const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Announcement />

<Navbar
  cart={cart}
  setCartOpen={setCartOpen}
  user={user}
  setShowLogin={setShowLogin}
/>
      {cartOpen && (
        <CartDrawer
          cart={cart}
          setCart={setCart}
          onClose={() => setCartOpen(false)}
        />
      )}

      {/* LOGIN */}
     {showLogin && (
  <Login
    onClose={() => setShowLogin(false)}
    setUser={setUser}
  />
)}
      <Hero />
      <Footer />
    </>
  );
}


function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("loggedInUser")) || null
);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, qty: (p.qty || 1) + 1 }
            : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={
          <HomePage
  cart={cart}
  setCartOpen={setCartOpen}
  cartOpen={cartOpen}
  setCart={setCart}
  addToCart={addToCart}
  user={user}
  setUser={setUser}
/>
        }
      />

      <Route
        path="/shop"
        element={
          <Shop
            addToCart={addToCart}
            cart={cart}
          />
        }
      />

      <Route path="/shop/keyboard" element={<Shop />} />
      <Route path="/shop2" element={<Shop2 />} />
      <Route path="/shop3" element={<Shop3 />} />
      <Route path="/switches" element={<Switches />} />
      <Route path="/stabilisers" element={<Stabilisers />} />
      <Route path="/lubricants" element={<Lubricants />} />
      <Route path="/keycaps" element={<Keycaps />} />
      <Route path="/accessories" element={<Accessories />} />
        <Route path="/help" element={<Help />} />
    </Routes>
  );
}

export default App;