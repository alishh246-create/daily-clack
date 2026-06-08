import React, { useState } from "react";
import { Link } from "react-router-dom";

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Lubricants() {
     const [sort, setSort] = useState("");
        
          const products = [
          {
        id: 1,
        name: "TX Keyboards Cherry MX Switch Spring Kit",
        price:2973.72,
        regularPrice: 1993.72,
        image: "https://dailyclack.com/cdn/shop/products/KakaoTalk_20181004_200052855_400x.jpg?v=1543214155",
        soldOut: false,
      },
      {
        id: 2,
        name:"TX Springs 16mm",
        price:2112.75,
        regularPrice: 1886.60,
        image: "https://dailyclack.com/cdn/shop/products/Springs_1024x1024_2x_1024x1024_2x_80a0d526-1017-4448-ba54-27f3813fdbb8_400x.jpg?v=1642544724",
        soldOut: false,
      },
      {
        id: 3,
        name: "TX Springs 15mm M",
        price: 2112.75,
        regularPrice: 1190.28,
        image: "https://dailyclack.com/cdn/shop/products/Springs_1024x1024_2x_1024x1024_2x_80a0d526-1017-4448-ba54-27f3813fdbb8_400x.jpg?v=1642544724",
        soldOut: false,
      },
      {
        id: 4,
        name: "TX Springs 14mm S",
        price: 2112.75,
        regularPrice: 1190.28,
        image: "https://dailyclack.com/cdn/shop/products/Springs_1024x1024_2x_1024x1024_2x_80a0d526-1017-4448-ba54-27f3813fdbb8_400x.jpg?v=1642544724",
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
            <span>In Stock Lubricants & Springs

</span>
          </div>

          {/* TITLE */}
          <div className="flex justify-center w-full">
  <h1 className="text-3xl md:text-5xl text-blue-600 text-center font-bold tracking-wide uppercase"> 
   In Stock Lubricants & Springs
  </h1>
  </div>
<div className="text-center">
  <p className="text-1xl text-black">We've got your lubricants and springs located all in one spot!

++</p>
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

export default Lubricants;