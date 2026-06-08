import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar({ cart = [], setCartOpen, user, setShowLogin }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            Daily Clack
          </h1>

          {/* Desktop Menu */}
         <ul className="hidden md:flex gap-7 text-lg font-medium">
  
  <li><Link to="/keycaps">Keycaps</Link></li>

  <li><Link to="/shop">Keyboards</Link></li>

  <li><Link to="/">Parts</Link></li>

  <li><Link to="/">Deskmats</Link></li>

  <li><Link to="/">Group Buys</Link></li>

  <li><Link to="/shop3">Clearance</Link></li>

  <li><Link to="/help">Help & Updates</Link></li>

</ul>

          {/* Icons */}
          <div className="flex items-center gap-4 text-xl">

            <button className="hover:scale-110 transition">🔍</button>

            {/* USER */}
            {user ? (
              <span className="font-bold">
                Hi, {user.name}
              </span>
            ) : (
              <button onClick={() => setShowLogin(true)}>
                👤
              </button>
            )}

            {/* CART */}
            <button onClick={() => setCartOpen(true)}>
              Cart ({cart.length})
            </button>

            {/* MOBILE MENU */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-blue-700 px-6 py-4 space-y-4 text-lg">
            <p>Keycaps</p>
            <p>Keyboards</p>
            <p>Parts</p>
            <p>Deskmats</p>
            <p>Group Buys</p>
            <p>Clearance</p>
            <p>Help & Updates</p>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;