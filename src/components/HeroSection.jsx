import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="w-full">
      {/* HERO WRAPPER */}
      <div className="relative w-full h-[420px] md:h-[500px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://dailyclack.com/cdn/shop/collections/test1_800x600_crop_center.jpg?v=1654500960"
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
            <span>In Stock Keyboards</span>
          </div>

          {/* TITLE */}
          <div className="flex justify-center w-full">
  <h1 className="text-3xl md:text-5xl text-white text-center font-bold tracking-wide uppercase"> 
        IN STOCK KEYBOARDS
  </h1>
</div>



        </div>
      </div>
    </div>
  );
}

export default HeroSection;