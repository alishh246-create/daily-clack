import React from "react";

function Features() {
  const items = [
    { title: "Fast Shipping", desc: "Worldwide delivery available" },
    { title: "Premium Quality", desc: "High-end keyboard parts" },
    { title: "Secure Payment", desc: "100% safe checkout" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {items.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;