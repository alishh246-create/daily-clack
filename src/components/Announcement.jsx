import React, { useState, useEffect } from "react";

const messages = [
  "Free shipping over $200 | Limited offers live now",
  "USA CUSTOMERS - Auspost shipping temporarily disabled. Enjoy discounted DHL Express rates until resolved! (Free for orders $500 or more)",
];

const Announcement = () => {
  const [index, setIndex] = useState(0);

  // timer
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    },1000);

    return () => clearInterval(interval);
  }, []);

  // Next / Prev handlers
  const next = () => {
    setIndex((prev) => (prev + 1) % messages.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  return (
    <div className="bg-black text-white text-sm py-2 relative flex items-center justify-center">

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-3 text-white/70 hover:text-white transition"
      >
        ⇚
      </button>

      {/* Message (with smooth transition) */}
      <p className="transition-all duration-500 ease-in-out px-10 text-center">
        {messages[index]}
      </p>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-3 text-white/70 hover:text-white transition"
      >
        ⇛
      </button>

    </div>
  );
};

export default Announcement;