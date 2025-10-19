

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function CarReservation() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get car from previous page
  const { car } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    contact: "",
    email: "",
    preferredDate: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reservation-confirmation", { state: { car, formData } });
  };

  if (!car) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          No car selected for reservation.
        </h2>
        <button
          onClick={() => navigate("/more-cars")}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
        >
          Go Back to Cars
        </button>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center bg-gray-100 py-16 px-6 min-h-screen">
      <h1 className="text-3xl font-extrabold text-red-700 mb-10 uppercase tracking-wide">
        Car Reservation
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg text-center">
        {/* Car Info */}
        <img
          src={car.img}
          alt={car.name}
          className="rounded-xl w-full h-56 object-cover mb-5"
        />
        <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
        <p className="text-red-600 font-semibold mb-8">{car.price}</p>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="text-left">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            required
          />

          <label className="block text-sm font-medium text-gray-600 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            required
          />

          <label className="block text-sm font-medium text-gray-600 mb-1">
            Contact Number
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            required
          />

          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            required
          />

          <label className="block text-sm font-medium text-gray-600 mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full mb-6 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            Plan a Visit
          </button>
        </form>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-8 bg-gray-200 text-red-700 px-6 py-2 rounded-full hover:bg-gray-300 transition"
      >
        Back
      </button>
    </section>
  );
}


