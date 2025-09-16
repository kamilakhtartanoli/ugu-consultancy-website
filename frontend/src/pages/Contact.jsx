import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Heading from "./Heading";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://ugu-consultancy-website-backend.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        })
        toast.success("Your request has been submitted successfully!");;
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Heading heading={"Contact Us"} />

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">What services do you need?</option>
              <option value="ISO 9001">ISO 9001 - Quality Management System</option>
              <option value="ISO 14001">ISO 14001 - Environmental Management System</option>
              <option value="ISO 45001">ISO 45001 - Occupational Health & Safety Management System</option>
              <option value="ISO 22000">ISO 22000 - Food Safety Management System</option>
              <option value="ISO 27001">ISO 27001 - Information Security Management System</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="md:col-span-2 border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`md:col-span-2 bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-700"
              }`}
            >
              {isSubmitting ? "Submitting..." : "SEND"}
            </button>
          </form>
        </div>
      </div>

      {/* Three Boxes Section */}
      <div className="max-w-6xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#484b4d] text-white rounded-lg p-6 text-center shadow-lg cursor-pointer">
          <Phone className="w-10 h-10 mx-auto text-[#fef687] mb-3" />
          <h3 className="font-bold text-lg">Phone</h3>
          <p className="text-sm">+971-54-565811</p>
          <p className="text-sm">+971-55-6635832</p>
        </div>
        <div className="bg-[#484b4d] text-white rounded-lg p-6 text-center shadow-lg cursor-pointer">
          <Mail className="w-10 h-10 mx-auto text-[#fef687] mb-3" />
          <h3 className="font-bold text-lg">Email</h3>
          <p className="text-sm">Uguservices786@gmail.com</p>
        </div>
        <div className="bg-[#484b4d] text-white rounded-lg p-6 text-center shadow-lg cursor-pointer">
          <MapPin className="w-10 h-10 mx-auto text-[#fef687] mb-3" />
          <h3 className="font-bold text-lg">Address</h3>
          <p className="text-sm">Dubai, United Arab Emirates</p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default Contact;
