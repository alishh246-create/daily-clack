import React, { useState } from "react";
import { Link } from "react-router-dom";

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Accessories() {
     const [sort, setSort] = useState("");
        
          const products = [
   {
    id: 1,
    name: "Deskeys Thick Switch Films",
    price: 2182.19,
    regularPrice: 3500.0,
    image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?auto=format&fit=crop&w=800&q=80",
    soldOut: false,
  },
  {
    id: 2,
    name: "TX Keyboards Thin Switch Films",
    price: 1825.1,
    regularPrice: 3808.9,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    soldOut: false,
  },
  {
    id: 3,
    name: "JTK + JTK Max Trays",
    price: 3967.61,
    regularPrice: 5951.41,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
    soldOut: false,
  },
  {
    id: 4,
    name: "Switch Stem Holder",
    price: 2082.99,
    regularPrice: 3000.0,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=800&q=80",
    soldOut: false,
  },
  {
    id: 5,
    name: "Wuque Titanium Switch Puller",
    price: 3965.63,
    regularPrice: 5500.0,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
    soldOut: false,
  },
  {
    id: 6,
    name: "Nutcracker V2",
    price: 9917.4,
    regularPrice: 12000.0,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    soldOut: false,
  },
  {
    id: 7,
    name: "DES Topre Silencing Rings",
    price: 8728.74,
    regularPrice: 11000.0,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=800&q=80",
    soldOut: false,
  },
  {
    id: 8,
    name: "TX LED (2x3x3)",
    price: 2162.35,
    regularPrice: 3200.0,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    soldOut: false,
  },
  {
    id: 9,
    name: "Deskeys DES Sliders",
    price: 5455.46,
    regularPrice: 7000.0,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
    soldOut: false,
  },
  {
    id: 10,
    name: "Bongo Artisan Box",
    price: 1587.4,
    regularPrice: 2500.0,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    soldOut: false,
  },
  {
    id: 11,
    name: "Modern Dolch Light Cables",
    price: 9125.5,
    regularPrice: 11000.0,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
    soldOut: false,
  },
          ]
          const sortedProducts = [...products];
    
      if (sort === "A-Z") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
    
      if (sort === "Z-A") {
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      }
    
      if (sort === "Price Low To High") {
        sortedProducts.sort((a, b) => a.price - b.price);
      }
    
      if (sort === "Price High To Low") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
  return (
    <>
    <Announcement/>
    <Navbar/>
    <div className="w-full">
      {/* HERO WRAPPER */}
      <div className="relative w-full h-[20px] md:h-[200px] overflow-hidden">

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-white"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">

          {/* BREADCRUMB */}
          <div className="text-sm md:text-base text-black mb-3">
            <Link to="/" className="hover:text-white-600">Home</Link>
            <span className="mx-2">/</span>
            <span>In Stock Accessories


</span>
          </div>

          {/* TITLE */}
          <div className="flex justify-center w-full">
  <h1 className="text-3xl md:text-5xl text-blue-600 text-center font-bold tracking-wide uppercase"> 
    In Stock Accessories
 
  </h1>
</div>



        </div>
      </div>
    </div>
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-12 border-b pb-6">
          <h2 className="text-3xl font-bold">
            {products.length} Products
          </h2>

          <select
            className="border px-4 py-3 rounded-lg bg-white"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option>Sort By</option>
            <option>A-Z</option>
            <option>Z-A</option>
            <option>Price Low To High</option>
            <option>Price High To Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transition duration-500"
            >
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Sale Badge */}
{product.soldOut === true && (
  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
    SALE
  </span>
)}

               {/* Hover Overlay */}
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

  {product.soldOut ? (
    <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
      OUT OF STOCK
    </button>
  ) : (
    <button className="bg-lime-500 text-black px-6 py-3 rounded-lg font-semibold">
      ADD TO CART
    </button>
  )}

</div>
              </div>

              {/* Product Info */}
              <div className="p-5">

                <h3 className="font-bold text-lg mb-3 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex flex-col gap-1">
                  <span className="text-blue-600 font-bold text-xl">
                    Rs. {product.price.toLocaleString()}
                  </span>

                  {product.regularPrice && (
                    <span className="line-through text-gray-400 text-sm">
                      Rs. {product.regularPrice.toLocaleString()}
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Accessories;