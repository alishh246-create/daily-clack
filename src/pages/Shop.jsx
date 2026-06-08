import { useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function Shop({ addToCart, cart }) {
  const [sort, setSort] = useState("");

  const products = [
    {
      id: 1,
      name: "Phoenix Keyboard Kit",
      price: 144815,
      regularPrice: 148986,
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800",
      soldOut: false,
    },
    {
      id: 2,
      name: "Foundation Keyboard Kit",
      price: 140047,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800",
      soldOut: false,
    },
    {
      id: 3,
      name: "Promise87 Keyboard Kit",
      price: 126539,
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800",
      soldOut: false,
    },
    {
      id: 4,
      name: "Flame60 Keyboard Kit",
      price: 122963,
      regularPrice: 138855,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
      soldOut: true,
    },
    {
      id: 5,
      name: "Gentoo65 Keyboard Kit",
      price: 118990,
      image: "https://media.istockphoto.com/id/2222778267/photo/mechanical-computer-keyboard-with-orange-keys-close-up.jpg?s=1024x1024&w=is&k=20&c=50W4dUxWb6NVbfe8rx5lYOJgDCC-ThMuDdzTVS__-_s=",
      soldOut: false,
    },
    {
      id: 6,
      name: "Onyx FRL TKL Keyboard Kit",
      price: 118990,
      regularPrice: 134882,
      image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800",
      soldOut: true,
    },
    {
      id: 7,
      name: "Tengu Keyboard Kit",
      price: 117778,
      regularPrice: 168255,
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800",
      soldOut: false,
    },
    {
      id: 8,
      name: "Chapter 1 Keyboard Kit",
      price: 95152,
      regularPrice: 148986,
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800",
      soldOut: false,
    },
    {
      id: 9,
      name: "Bubble75 Keyboard Kit",
      price: 89193,
      regularPrice: 101171,
      image: "https://media.istockphoto.com/id/1385170663/photo/disassembly-mechanical-keyboard-modified-custom-keyboard-with-pcb-switch-pad-stickers-for.jpg?s=1024x1024&w=is&k=20&c=s5AzNgxmKwpqp2gq3DAzqPo6CzUr2XlgUoQFNP7wcH0=",
      soldOut: false,
    },
    {
      id: 10,
      name: "Zoom TKL Essential Edition",
      price: 69328,
      regularPrice: 71314,
      image: "https://ucarecdn.com/d7775935-85d1-458e-9ba1-d526464223bd/-/format/auto/-/preview/3000x3000/-/quality/lighter/10.jpg",
      soldOut: false,
    },
    {
      id: 11,
      name: "Hope75 S Keyboard Kit",
      price: 67342,
      regularPrice: 157528,
      image: "https://media.istockphoto.com/id/2179682761/photo/mouse-and-green-screen-smartphone.jpg?s=1024x1024&w=is&k=20&c=3CgqQpgpbgKD9UMWSepamW-p7WSyhexSV2BFuuLBbhg=",
      soldOut: true,
    },
    {
      id: 12,
      name: "Ellora65 Keyboard Kit",
      price: 63369,
      regularPrice: 130909,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800",
      soldOut: false,
    },
  {
    id: 13,
    name: "Foundation Keyboard Kit - Extras",
    price: 4767.58,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800",
    soldOut: false,
  },
  {
    id: 14,
    name: "MONOKEI x ともだち 「第一回」：かげ Kage Extras",
    price: 4429.87,
    regularPrice: 5425.1,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800",
    soldOut: true,
  },
  {
    id: 15,
    name: "Aurora R2 Keyboard Kit - Extras",
    price: 3970.99,
    regularPrice: 7747.31,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800",
    soldOut: false,
  },
  {
    id: 16,
    name: "Ginkgo65 Keyboard Kit",
    price: 3794.2,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800",
    soldOut: false,
  },
  {
    id: 17,
    name: "Ikki68 Aurora",
    price: 3377.3,
    regularPrice: 6396.76,
    image: "https://media.istockphoto.com/id/2222778267/photo/mechanical-computer-keyboard-with-orange-keys-close-up.jpg?s=1024x1024&w=is&k=20&c=50W4dUxWb6NVbfe8rx5lYOJgDCC-ThMuDdzTVS__-_s=",
    soldOut: false,
  },
  {
    id: 18,
    name: "Aurora R2 x Winter Breath Keyboard Kit",
    price: 2979.73,
    regularPrice: 5999.2,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800",
    soldOut: false,
  },
  {
    id: 19,
    name: "Ikki68 Aurora x Dreamscape Keyboard Kit",
    price: 2979.73,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800",
    soldOut: false,
  },
  {
    id: 20,
    name: "Mammoth75 Keyboard Kit - Extras",
    price: 2781.9,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800",
    soldOut: false,
  },
  {
    id: 21,
    name: "Promise87 Keyboard Kit - Addons",
    price: 2383.79,
    image: "https://media.istockphoto.com/id/1385170663/photo/disassembly-mechanical-keyboard-modified-custom-keyboard-with-pcb-switch-pad-stickers-for.jpg?s=1024x1024&w=is&k=20&c=s5AzNgxmKwpqp2gq3DAzqPo6CzUr2XlgUoQFNP7wcH0=",
    soldOut: false,
  },
  {
    id: 22,
    name: "JRIS65 Keyboard Kit - Addons",
    price: 2185.14,
    image: "https://ucarecdn.com/d7775935-85d1-458e-9ba1-d526464223bd/-/format/auto/-/preview/3000x3000/-/quality/lighter/10.jpg",
    soldOut: false,
  },
  {
    id: 23,
    name: "Sagittarius Keyboard Kit",
    price: 1787.84,
    image: "https://media.istockphoto.com/id/2179682761/photo/mouse-and-green-screen-smartphone.jpg?s=1024x1024&w=is&k=20&c=3CgqQpgpbgKD9UMWSepamW-p7WSyhexSV2BFuuLBbhg=",
    soldOut: false,
  },
  {
    id: 24,
    name: "Zoom TKL Essential Edition Keyboard Kit - Extras",
    price: 1589.19,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800",
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
<Navbar cart={cart} />
    <HeroSection/>
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
                    <button     onClick={() => addToCart(product)}
 className="bg-lime-500 text-black px-6 py-3 rounded-lg font-semibold">
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

export default Shop;