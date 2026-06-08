import { Truck, Clock, Globe } from "lucide-react";

function InfoSection() {
  const data = [
    {
      icon: <Truck size={28} />,
      title: "Free Standard Shipping is Back!",
      desc: "Australian orders over $200 are eligible. International orders over $300 qualify too!",
    },
    {
      icon: <Clock size={28} />,
      title: "97% next business day fulfillment",
      desc: "We strive to ship your order in 1-2 business days. 97% of orders ship next business day!",
    },
    {
      icon: <Globe size={28} />,
      title: "Daily Clack since 2017",
      desc: "Buy with confidence. Over 500 successful Group Buys. We ship globally!",
    },
  ];

  return (
    <section className="bg-blue-700 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-lg hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="flex justify-center text-white color-white mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg mb-3 text-white">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-white text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoSection;