import React, { useState } from "react";
import { Link } from "react-router-dom";

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Stabilisers() {
     const [sort, setSort] = useState("");
        
          const products = [
          {
        id: 1,
        name: "DuRock V2 Screw-in Stabilisers",
        price:4389.87,
        regularPrice: 1993.72,
        image: "https://dailyclack.com/cdn/shop/products/DuRock_Stabs_1_3508c818-eaae-4926-9f03-6c35c99683aa_400x.png?v=1606817936",
        soldOut: false,
      },
      {
        id: 2,
        name:"GMK Plate Mounts Stabilisers",
        price: 1190.28,
        regularPrice: 1886.60,
        image: "https://dailyclack.com/cdn/shop/products/GMK_Plate_Mount_Stabilisers_1_400x.jpg?v=1526867750",
        soldOut: false,
      },
      {
        id: 3,
        name: "WS Stabs Aurora Series Stabilisers",
        price: 493.97,
        regularPrice: 1190.28,
        image: "https://dailyclack.com/cdn/shop/products/Stab_AuroraFog_4_1_1_400x.png?v=1636601222",
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
      <div className="relative w-full h-[420px] md:h-[500px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://dailyclack.com/cdn/shop/collections/DuRock_Stabs_2_c59d84ba-01c4-495c-9d98-de0b4c10e050_800x600_crop_center.png?v=1745979427"
          alt="hero"
          className="w-full h-full object-cover scale-105"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">

          {/* BREADCRUMB */}
          <div className="text-sm md:text-base text-gray-200 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>In Stock
Stabilisers</span>

          </div>
                  
        <div className="text-center mb-14">
  <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wider mb-4">
   In Stock
Stabilisers
  </h1>

  <p className="text-white text-1xl max-w-3xl mx-auto">
   Stabilisers or stabilizers, no matter how you spell it, you're going to need them.
  </p>
  <p className="text-white text-1xl max-w-3xl mx-auto">Daily Clack stocks only the finest stabilisers to ensure minimal rattle and top of the line quality.</p>
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

export default Stabilisers;