import { useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import HeroSection3 from "../components/HeroSection3";
import Footer from "../components/Footer";

function Shop3() {
  const [sort, setSort] = useState("");
  const products = [
  {
    id: 1,
    name: "GMK TeraDrive (Extension Kit)",
    price: 6952.71,
    regularPrice: 11720.29,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800", 
    soldOut: false,
  },
  {
    id: 2,
    name: "GMK TeraDrive (JIS Mod Kit)",
    price: 8939.2,
    regularPrice: 15693.27,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800", 
    soldOut: true,
  },
  {
    id: 3,
    name: "GMK Tako (Base Kit)",
    price: 27612.21,
    regularPrice: null,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800", 
    soldOut: false,
  },
  {
    id: 4,
    name: "Ellora65 Keyboard Kit (Black / Solder)",
    price: 63369.2,
    regularPrice: 130909.67,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800", 
    soldOut: false,
  },
  {
    id: 5,
    name: "Ellora65 Keyboard Kit (Snow / Solder)",
    price: 63369.2,
    regularPrice: 130909.67,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800", 
    soldOut: false,
  },
  {
    id: 6,
    name: "Ellora65 Keyboard Kit (Graphite)",
    price: 63369.2,
    regularPrice: 130909.67,
    image: "https://dailyclack.com/cdn/shop/products/E65Black_1024x1024_2x_048df0e2-4178-4cb5-a80c-c2c0dc15542a_400x.jpg?v=17557321590", // dark grey setup
    soldOut: false,
  },
  {
    id: 7,
    name: "Ellora65 Keyboard Kit (Amethyst)",
    price: 63369.2,
    regularPrice: 130909.67,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800", 
    soldOut: false,
  },
  {
    id: 8,
    name: "Ellora65 Keyboard Kit (Baby Blue)",
    price: 63369.2,
    regularPrice: 130909.67,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800", 
    soldOut: false,
  },
  {
    id: 9,
    name: "Ellora65 Keyboard Kit (Polycarbonate)",
    price: 73301.47,
    regularPrice: 130909.67,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", 
    soldOut: false,
  },
  {
    id: 10,
    name: "Crin Keyboard Kit (Rose Gold)",
    price: 49463.59,
    regularPrice: 131108.32,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800", 
    soldOut: false,
  },
  {
    id: 11,
    name: "Zoom65 Keyboard Kit",
    price: 59396.4,
    regularPrice: null,
    image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=800", 
    soldOut: false,
  },
  {
    id: 12,
    name: "Onyx FRL TKL Keyboard Kit",
    price: 118990.73,
    regularPrice: 134882.65,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800", 
    soldOut: false,
  },
  {
    id: 13,
    name: "Hope75 S Keyboard Kit",
    price: 67342,
    regularPrice: 157528.63,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
    soldOut: false,
  },
  {
    id: 14,
    name: "KL-90 PC Keyboard Kit",
    price: 53436.57,
    regularPrice: 131148.5,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800",
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

  return (
    <>
    <Announcement/>
    <Navbar/>
    <HeroSection3/>
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

export default Shop3;