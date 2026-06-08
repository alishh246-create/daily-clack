import ClearanceSection from "./ClearanceSection";
import { Link } from "react-router-dom";

function PromoSection() {
  return (
    <>
      <section className="bg-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT IMAGE SECTION */}
          <div className="relative flex justify-center">
            
            {/* Blue Box (responsive height) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 sm:w-40 md:w-52 h-64 sm:h-[450px] md:h-[650px] bg-blue-600 rounded-lg"></div>

            {/* Keyboard Image */}
            <img
              src="https://images.unsplash.com/photo-1595225476474-87563907a212?w=1000"
              alt="Keyboard"
              className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg object-cover rounded-xl shadow-xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center text-center md:text-center lg:text-left items-center md:items-center lg:items-start">

            <p className="font-bold text-blue-600 mb-3">
              Find your endgame
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-5">
              with a little help from us
            </h2>

            <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed mb-8 px-2 md:px-0">
              To help you kick off your next build, if you spend over $400 on a
              keyboard we'll throw in your choice of switches for <strong>FREE</strong>.
              Simply add 1 of your chosen switch to your order and proceed
              to checkout.
            </p>

            <Link to="/shop2">
              <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded transition">
                BUY NOW
              </button>
            </Link>

          </div>
        </div>
      </section>

      <ClearanceSection />
    </>
  );
}

export default PromoSection;