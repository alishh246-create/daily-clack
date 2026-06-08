import { useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import HeroSection2 from "../components/HeroSection2";
import Footer from "../components/Footer";

function Shop2() {
  const [sort, setSort] = useState("");

  const products = [
  {
    id: 1,
    name: "KAT Mizu (Alphas - Full Moon)",
    price: 5760.82,
    regularPrice: 10925.69,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    soldOut: false,
  },
  {
    id: 2,
    name: "KAT Mizu (Alphas - Blood Moon)",
    price: 5760.82,
    regularPrice: 10528.4,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
    soldOut: true,
  },
  {
    id: 3,
    name: "KAT Mizu (Mods - Full Moon)",
    price: 8939.2,
    regularPrice: 19268.95,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    soldOut: false,
  },
  {
    id: 4,
    name: "KAT Mizu (Mods - Blood Moon)",
    price: 8939.2,
    regularPrice: 19268.95,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800",
    soldOut: false,
  },
  {
    id: 5,
    name: "KAT Mizu (Inuit Alphas - Blood Moon)",
    price: 7747.31,
    regularPrice: 11124.34,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
    soldOut: false,
  },
  {
    id: 6,
    name: "KAT Mizu (Spacebars)",
    price: 5760.82,
    regularPrice: 10131.1,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800",
    soldOut: false,
  },
  {
    id: 7,
    name: "KAT Mizu (Accents)",
    price: 4966.22,
    regularPrice: 8939.2,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    soldOut: false,
  },
  {
    id: 8,
    name: "KAT Mizu (Novelties - Blood Moon)",
    price: 6952.71,
    regularPrice: 11124.34,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    soldOut: true,
  },
  {
    id: 9,
    name: "Gazzew Boba U4 Silent Tactile Switches",
    price: 772.74,
    regularPrice: 1587.21,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800",
    soldOut: true,
  },
  {
    id: 10,
    name: "GMK Tuzi (Harvest - Base Kit)",
    price: 27612.21,
    regularPrice: 49662.24,
    image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=800",
    soldOut: false,
  },
  {
    id: 11,
    name: "GMK Redline (Standard - Base Kit)",
    price: 27612.21,
    regularPrice: 33472.35,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
    soldOut: false,
  },
  {
    id: 12,
    name: "RAMA Artisan (Green Swirl)",
    price: 5760.82,
    regularPrice: 11620.96,
    image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800",
    soldOut: false,
  },
  {
    id: 13,
    name: "RAMA Artisan (Red Swirl)",
    price: 5760.82,
    regularPrice: 11620.96,
    image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=800",
    soldOut: false,
  },
  {
    id: 14,
    name: "RAMA x 8008 Pink Artisan",
    price: 4966.22,
    regularPrice: 12713.53,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800",
    soldOut: false,
  },
  {
    id: 15,
    name: "RAMA Shrimp on the Barbie",
    price: 6952.71,
    regularPrice: 18365.1,
    image: "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?w=800",
    soldOut: false,
  },
  {
    id: 16,
    name: "RAMA x GMK Grand Prix Enter",
    price: 9733.8,
    regularPrice: 20659.49,
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800",
    soldOut: false,
  },
  {
    id: 17,
    name: "RAMA x Cojiro (Nezumi)",
    price: 6952.71,
    regularPrice: 14104.8,
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800",
    soldOut: false,
  },
  {
    id: 18,
    name: "RAMA x KAT Mizu (Glow)",
    price: 6555.42,
    regularPrice: 12812.86,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800",
    soldOut: false,
  },
  {
    id: 19,
    name: "GMK Dots R2 (Dots Dark Base Kit)",
    price: 25625.72,
    regularPrice: 0,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800",
    soldOut: false,
  },
  {
    id: 20,
    name: "KAT Explosion (Alphas)",
    price: 6952.71,
    regularPrice: 0,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800",
    soldOut: false,
  },
  {
    id: 21,
    name: "GMK Soyamilk (Base Kit)",
    price: 10329.75,
    regularPrice: 0,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    soldOut: false,
  },
  {
    id: 22,
    name: "GMK Tako (Base Kit)",
    price: 12713.53,
    regularPrice: 9992,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800",
    soldOut: false,
  },
  {
    id: 23,
    name: "Konpeitou Switches (10 Pack)",
    price: 891.93,
    regularPrice: 1996.42,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800",
    soldOut: false,
  },
  {
    id: 24,
    name: "Gateron Limbo Switches",
    price: 494.64,
    regularPrice: 1191.89,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
    soldOut: true,
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

  return (
    <>
    <Announcement/>
    <Navbar/>
    <HeroSection2/>
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

export default Shop2;