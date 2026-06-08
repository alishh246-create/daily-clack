import Categories from "./Categories";
import { Link } from "react-router-dom";


function ClearanceSection() {
  return (
    <>
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://dailyclack.com/cdn/shop/products/3000SAT_on_Blue_Keyboard_2_1200x.jpg?v=1751510935)",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex justify-end items-center px-6">

        {/* White Card */}
        <div className="bg-white max-w-md p-12 rounded-lg shadow-2xl text-center">

          <p className="text-blue-600 font-bold text-lg mb-3">
            Shop the clearance range
          </p>

          <h2 className="text-5xl font-bold text-blue-600 mb-6">
            Warehouse
            <br />
            clearout
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Keyboards, Keycaps and Switches are all on offer in the
            Clearance Range. Let's get building!
          </p>
     <Link to="/shop3">
          <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-10 py-4 rounded transition">
            BUY NOW
          </button>
</Link>
        </div>
      </div>
    </section>
    <Categories/>
    
    </>
  );
}

export default ClearanceSection;