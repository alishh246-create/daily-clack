import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfoSection from "./InfoSection";
import Hero2 from "./Hero2";

function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    "https://dailyclack.com/cdn/shop/files/CarouselTemplate.jpg?v=1753417432&width=1400",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section
      className="h-screen bg-cover bg-center relative transition-all duration-700"
      style={{
        backgroundImage: `url('${images[current]}')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-white">
          <p className="uppercase font-bold text-sm mb-6">
            Free switches with in-stock board purchases over $400 . PROMO APPLIES AT CHECKOUT WITH BOARD PURCHASE 1X OF ANY SWITCH.
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-8">
            THAT NEW BUILD
            <br />
            FEEL
          </h1>

          <Link to="/shop">
  <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-10 py-4 rounded">
    SHOP NOW
  </button>
</Link>

        </div>
      </div>
    </section>
    <InfoSection/>
    <Hero2/>
    </>
  );
}

export default Hero;