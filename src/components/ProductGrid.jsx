import React from "react";

function Products() {
  const products = [
    { name: "GMK Keycaps", price: "$120" },
    { name: "Mechanical Switches", price: "$35" },
    { name: "Custom Keyboard Kit", price: "$220" },
    { name: "Deskmat Pro", price: "$45" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-4 hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>

              <h3 className="font-semibold text-gray-900">{p.name}</h3>
              <p className="text-blue-600 font-medium">{p.price}</p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Products;