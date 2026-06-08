import React, { useState } from "react";
import { Link } from "react-router-dom";

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Switches(){
    const [sort, setSort] = useState("");
    
      const products = [
      {
    id: 1,
    name: "Konpeitou Switches",
    price: 890.73,
    regularPrice: 1993.72,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800",
    soldOut: false,
  },
  {
    id: 2,
    name: "Gateron Robin Switches",
    price: 1190.28,
    regularPrice: 1886.60,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
    soldOut: false,
  },
  {
    id: 3,
    name: "NCR TTC Switches",
    price: 493.97,
    regularPrice: 1190.28,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    soldOut: false,
  },
  {
    id: 4,
    name: "V2 Rara JWK Switches",
    price: 553.48,
    regularPrice: 1963.97,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    soldOut: false,
  },
  {
    id: 5,
    name: "TTC Matrix-01 Switches",
    price: 20036.43,
    regularPrice: 0,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800",
    soldOut: false,
  },
  {
    id: 6,
    name: "Dark Amber T1 Tactile Switches",
    price: 734.10,
    regularPrice: 0,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800",
    soldOut: false,
  },
  {
    id: 7,
    name: "POM Glacier Panda Switches",
    price: 2063.16,
    regularPrice: 2501.58,
    image: "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?w=800",
    soldOut: false,
  },
  {
    id: 8,
    name: "Shogoki Tactile Switches",
    price: 1446.19,
    regularPrice: 1884.61,
    image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800",
    soldOut: false,
  },
  {
    id: 9,
    name: "Gateron Limbo Switches",
    price: 493.97,
    regularPrice: 1190.28,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
    soldOut: false,
  },
  {
    id: 10,
    name: "Kailh BOX Switch",
    price: 595.14,
    regularPrice: 1646.56,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800",
    soldOut: false,
  },
  {
  id: 11,
  name: "TTC Wild Switches",
  price: 793.52,
  regularPrice: 1844.94,
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
  soldOut: false,
},
{
  id: 12,
  name: "NovelKeys Blueberry Switches",
  price: 791.54,
  regularPrice: 2142.51,
  image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800",
  soldOut: false,
},
{
  id: 13,
  name: "Cerulean Switches",
  price: 771.70,
  regularPrice: 1587.40,
  image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800",
  soldOut: false,
},
{
  id: 14,
  name: "Keebwerk Bushi Silent Tactile Switches",
  price: 1983.80,
  regularPrice: 2499.59,
  image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800",
  soldOut: false,
},
{
  id: 15,
  name: "Poseidon Linear Switches",
  price: 1388.66,
  regularPrice: 1775.51,
  image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=800",
  soldOut: false,
},
{
  id: 16,
  name: "FFF & FFFF (3F & 4F) Switches",
  price: 1485.87,
  regularPrice: 1904.45,
  image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800",
  soldOut: false,
},
{
  id: 17,
  name: "H1 Linear Switches",
  price: 1388.66,
  regularPrice: 1884.61,
  image: "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?w=800",
  soldOut: false,
},
{
  id: 18,
  name: "Serikos Silent Linear Switches",
  price: 2380.57,
  regularPrice: 3670.40,
  image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800",
  soldOut: false,
},
{
  id: 19,
  name: "8008 Inks",
  price: 1388.66,
  regularPrice: 1785.42,
  image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
  soldOut: false,
},
{
  id: 20,
  name: "Twilight Switches",
  price: 1388.66,
  regularPrice: 1666.40,
  image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  soldOut: false,
},
      ];
    
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
    return(
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
            <span> In Stock Switches</span>
          </div>

          {/* TITLE */}
          <div className="flex justify-center w-full">
  <h1 className="text-3xl md:text-5xl text-blue-600 text-center font-bold tracking-wide uppercase"> 
    In Stock Switches
  </h1>
  </div>
<div className="text-center">
  <p className="text-1xl text-black">Priced to move, limited amount of items, limited after sales support.</p>
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
export default Switches;