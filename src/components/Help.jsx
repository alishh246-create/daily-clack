import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Help() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    orderNumber: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
  };

  return (
    <>
    <div className="bg-white min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-6xl mx-auto px-6 py-10">

          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Contact Us</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600 uppercase tracking-wide text-center">
            Contact Us
          </h1>

          <p className="text-center text-gray-600 mt-4">
            Please use the contact form below, or send an email to{" "}
            <span className="text-black font-medium">help@dailyclack.com</span>
          </p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="max-w-2xl mx-auto px-6 py-12">

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            name="orderNumber"
            placeholder="Order Number"
            value={form.orderNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />

          <select
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md text-gray-600"
          >
            <option value="">Support reason</option>
            <option value="order">Order Issue</option>
            <option value="shipping">Shipping</option>
            <option value="product">Product Question</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-10 py-4 rounded"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Help;