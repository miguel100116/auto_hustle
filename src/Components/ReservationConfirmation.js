import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ReservationConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { car, formData } = location.state || {}; // Get car and form data from previous page

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Reservation Summary</h1>

      {car ? (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md text-center">
          <img
            src={car.img}
            alt={car.name}
            className="rounded-xl w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
          <p className="text-green-500 font-medium mb-4">{car.price}</p>
          
          <div className="text-left mb-4">
            <h3 className="font-semibold mb-1">Your Details:</h3>
            <p>Name: {formData?.name}</p>
            <p>Email: {formData?.email}</p>
            <p>Phone: {formData?.phone}</p>
            {/* Add more fields from the formData as needed */}
          </div>

          <p className="mt-4 text-gray-700">
            Thank you for planning a visit! Please double-check your details above.
          </p>
        </div>
      ) : (
        <p>No car selected. Please go back and select a car.</p>
      )}

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600 transition"
      >
        Back to Main Page
      </button>
    </div>
  );
}
/////////////////////////////////////////tunay







