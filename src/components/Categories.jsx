import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate(); 

  const categories = [
    {
      title: "Switches",
      image: "https://images.unsplash.com/photo-1590327813360-fdbca9ec1cc6?q=80&w=435&auto=format&fit=crop",
    },
    {
      title: "Stabilisers",
      image: "https://dailyclack.com/cdn/shop/files/Stabiliser_05767c77-99ed-498f-9136-445b408ef53f_700x.png?v=1679527750",
    },
    { 
        title: "Springs and Lubricants",
         image: "https://dailyclack.com/cdn/shop/files/Lubricant_700x.png?v=1679528034",
         },
    {
      title: "Keyboards",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800",
    },
    { title: "Keycaps",
         image: "https://dailyclack.com/cdn/shop/files/Keycaps_700x.png?v=1679528286", 
        }, 
        {
             title: "Accessories", 
             image: "https://dailyclack.com/cdn/shop/files/Accessories_700x.png?v=1679528514", 
            },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => {
  if (item.title === "Switches") {
    navigate("/switches");
  }

  if (item.title === "Stabilisers") {
    navigate("/stabilisers");
  }

  if (item.title === "Springs and Lubricants") {
    navigate("/lubricants");
  }

  if (item.title === "Keyboards") {
    navigate("/shop/keyboard");
  }

  if (item.title === "Keycaps") {
    navigate("/keycaps");
  }

  if (item.title === "Accessories") {
    navigate("/accessories");
  }
}}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold text-center px-4">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;