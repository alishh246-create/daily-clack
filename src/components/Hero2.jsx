import React from "react";
import PromoSection from "./PromoSection";
import { Link } from "react-router-dom";

function Hero2() {
  const products = [
    {
      name: "KAT Mizu",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",
      save: "Save Rs.3,393.84",
      sale: "Rs.4,990.95",
      regular: "Rs.8,983.71",
    },
    {
      name: "Gazzew Boba U4",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
      save: "Save Rs.818.52",
      sale: "Rs.776.59",
      regular: "Rs.1,595.11",
    },
    {
      name: "GMK Tuzi",
      image:
        "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600",
      save: "Save Rs.3,793.12",
      sale: "Rs.7,985.52",
      regular: "Rs.11,778.64",
    },
    {
      name: "GMK Redline",
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600",
      save: "Save Rs.2,495.20",
      sale: "Rs.6,488.23",
      regular: "Rs.8,983.43",
    },
  ];

  return (
    <>
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
  <h1 className="text-blue-600 text-4xl md:text-5xl font-bold tracking-wider mb-4">
    BFCM ENCORE SALE
  </h1>

  <p className="text-black text-1xl max-w-3xl mx-auto">
    Did someone ask for an encore? Never before seen (and never to be seen
    again) prices on select items - prices as marked and are extremely limited!
  </p>
</div>
        {/* Product Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white text-black px-10 py-3 font-semibold rounded">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <p className="text-blue-600 font-semibold text-sm">
                  {product.save}
                </p>

                <h3 className="font-bold text-lg mt-2">
                  {product.name}
                </h3>

                <p className="font-semibold mt-2">
                  {product.sale}
                </p>

                <p className="text-gray-400 line-through text-sm">
                  {product.regular}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shop Now Button */}

        <div className="flex justify-center mt-14">
            <Link to="/shop2">
          <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-10 py-4 rounded transition">
            SHOP NOW
          </button>
             </Link>
        </div>
      </div>
    </section>
    <br/>
    <PromoSection/>
    </>
  );
}

export default Hero2;