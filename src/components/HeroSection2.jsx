import { Link } from "react-router-dom";

function HeroSection() {
  return (
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
            <span>BFCM Encore Sale

</span>
          </div>

          {/* TITLE */}
          <div className="flex justify-center w-full">
  <h1 className="text-3xl md:text-5xl text-blue-600 text-center font-bold tracking-wide uppercase"> 
    BFCM Encore Sale 
  </h1>
</div>



        </div>
      </div>
    </div>
  );
}

export default HeroSection;