import React, { useState } from "react";
import { Link } from "react-router-dom";

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Keycaps() {
     const [sort, setSort] = useState("");
        
          const products = [
         {
  id: 1,
  name: "Artisan Keycap Extras",
  price: 5951.41,
  regularPrice: 11109.31,
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
  soldOut: false,
},
{
  id: 2,
  name: "DSS Lights-Out R2",
  price: 10712.55,
  regularPrice: 12894.74,
  image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800",
  soldOut: false,
},
{
  id: 3,
  name: "DSS Sencillo",
  price: 6943.32,
  regularPrice: 18846.14,
  image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800",
  soldOut: false,
},
{
  id: 4,
  name: "ePBT 3000SAT",
  price: 4959.51,
  regularPrice: 6943.32,
  image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  soldOut: false,
},
{
  id: 5,
  name: "ePBT 6085",
  price: 2777.33,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800",
  soldOut: false,
},
{
  id: 6,
  name: "ePBT Acid House and Sweet Girl",
  price: 2975.71,
  regularPrice: 8331.98,
  image: "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?w=800",
  soldOut: false,
},
{
  id: 7,
  name: "ePBT Aesthetic",
  price: 6110.12,
  regularPrice: 8728.74,
  image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800",
  soldOut: false,
},
{
  id: 8,
  name: "ePBT Avilo",
  price: 9125.50,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=800",
  soldOut: false,
},
{
  id: 9,
  name: "ePBT Axolotls",
  price: 7935.22,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800",
  soldOut: false,
},
{
  id: 10,
  name: "ePBT BoW Hangul",
  price: 4959.51,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800",
  soldOut: false,
},
{
  id: 11,
  name: "ePBT Brutalist",
  price: 991.90,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
  soldOut: false,
},
{
  id: 12,
  name: "ePBT DuO",
  price: 8331.98,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800",
  soldOut: false,
},
{
  id: 13,
  name: "ePBT Hellas",
  price: 8728.74,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800",
  soldOut: false,
},
{
  id: 14,
  name: "ePBT Kavala",
  price: 991.90,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  soldOut: false,
},
{
  id: 15,
  name: "ePBT Ping",
  price: 6943.32,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800",
  soldOut: false,
},
{
  id: 16,
  name: "ePBT Rin",
  price: 7340.80,
  regularPrice: 8729.46,
  image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
  soldOut: false,
},
{
  id: 17,
  name: "ePBT Scandi",
  price: 3967.61,
  regularPrice: 5356.27,
  image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=800",
  soldOut: false,
},
{
  id: 18,
  name: "ePBT SimpleJA R2",
  price: 4066.80,
  regularPrice: 8133.60,
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
  soldOut: false,
},
{
  id: 19,
  name: "ePBT Sniper",
  price: 6941.33,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
  soldOut: false,
},
{
  id: 20,
  name: "ePBT Soju",
  price: 6941.33,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800",
  soldOut: false,
},
{
  id: 21,
  name: "ePBT Solaria",
  price: 3570.85,
  regularPrice: 4959.51,
  image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800",
  soldOut: false,
},
{
  id: 22,
  name: "ePBT Timeless",
  price: 9125.50,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=800",
  soldOut: false,
},
{
  id: 23,
  name: "ePBT Winter Breath",
  price: 7340.80,
  regularPrice: 9323.88,
  image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800",
  soldOut: false,
},
{
  id: 24,
  name: "Geekark Lancelot Keycaps",
  price: 4959.51,
  regularPrice: 8629.55,
  image: "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?w=800",
  soldOut: false,
},
{
  id: 25,
  name: "Geekark Triangle Keycaps",
  price: 3967.61,
  regularPrice: 6744.94,
  image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800",
  soldOut: false,
},
{
  id: 26,
  name: "GMK 80082",
  price: 10712.55,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
  soldOut: false,
},
{
  id: 27,
  name: "GMK Agent 01",
  price: 6941.33,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=800",
  soldOut: false,
},
{
  id: 28,
  name: "GMK Arch",
  price: 5356.27,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800",
  soldOut: false,
},
{
  id: 29,
  name: "GMK Arctic",
  price: 9919.20,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  soldOut: false,
},
{
  id: 30,
  name: "GMK Awaken",
  price: 19838.50,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800",
  soldOut: false,
},
{
  id: 31,
  name: "GMK B",
  price: 2777.33,
  regularPrice: 6744.94,
  image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
  soldOut: false,
},
{
  id: 32,
  name: "GMK Baltic",
  price: 8927.12,
  regularPrice: 12894.73,
  image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800",
  soldOut: false,
},
{
  id: 33,
  name: "GMK Bingsu R2",
  price: 11704.45,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  soldOut: false,
},
{
  id: 34,
  name: "GMK Bordeaux",
  price: 11307.69,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800",
  soldOut: false,
},
{
  id: 35,
  name: "GMK Botanical 2",
  price: 5951.41,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800",
  soldOut: false,
},
{
  id: 36,
  name: "GMK Camping R3",
  price: 13093.11,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800",
  soldOut: false,
},
{
  id: 37,
  name: "GMK Child Kit Mega Listing",
  price: 5951.41,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
  soldOut: false,
},
{
  id: 38,
  name: "GMK Cojiro",
  price: 6941.33,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800",
  soldOut: false,
},
{
  id: 39,
  name: "GMK Colorchrome",
  price: 6941.33,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?w=800",
  soldOut: false,
},
{
  id: 40,
  name: "GMK Coral",
  price: 6744.94,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800",
  soldOut: false,
},
{
  id: 41,
  name: "GMK CYL ASCII 2",
  price: 12101.21,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
  soldOut: false,
},
{
  id: 42,
  name: "GMK CYL Crimson Cadet II & Royal Cadet",
  price: 8530.36,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=800",
  soldOut: false,
},
{
  id: 43,
  name: "GMK CYL NorDe",
  price: 23607.28,
  regularPrice: 49595.12,
  image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800",
  soldOut: false,
},
{
  id: 44,
  name: "GMK CYL Tribal",
  price: 12894.73,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  soldOut: false,
},
{
  id: 45,
  name: "GMK Demon Sword",
  price: 6941.33,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800",
  soldOut: false,
},
{
  id: 46,
  name: "GMK DMG 3",
  price: 8530.36,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
  soldOut: false,
},
{
  id: 47,
  name: "GMK Dots R2",
  price: 8530.36,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800",
  soldOut: false,
},
{
  id: 48,
  name: "GMK Dracula",
  price: 6941.33,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  soldOut: false,
},
{
  id: 49,
  name: "GMK Dracula V2.0",
  price: 11307.69,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800",
  soldOut: false,
},
{
  id: 50,
  name: "GMK Fenglisu",
  price: 7935.22,
  regularPrice: 0,
  image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800",
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
          src="https://dailyclack.com/cdn/shop/collections/aluvia_800x600_crop_center.jpg?v=1654501086"
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
            <span>In Stock Keycaps</span>

          </div>
                  
        <div className="text-center mb-14">
  <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wider mb-4">
   In Stock Keycaps
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

export default Keycaps;