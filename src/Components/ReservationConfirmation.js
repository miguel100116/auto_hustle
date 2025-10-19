// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function ReservationConfirmation() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { car, formData } = location.state || {}; // Get car and form data from previous page

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-4 text-green-700">Reservation Summary</h1>

//       {car ? (
//         <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md text-center">
//           <img
//             src={car.img}
//             alt={car.name}
//             className="rounded-xl w-full h-48 object-cover mb-4"
//           />
//           <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
//           <p className="text-green-500 font-medium mb-4">{car.price}</p>
          
//           <div className="text-left mb-4">
//             <h3 className="font-semibold mb-1">Your Details:</h3>
//             <p>Name: {formData?.name}</p>
//             <p>Email: {formData?.email}</p>
//             <p>Phone: {formData?.phone}</p>
//             {/* Add more fields from the formData as needed */}
//           </div>

//           <p className="mt-4 text-gray-700">
//             Thank you for planning a visit! Please double-check your details above.
//           </p>
//         </div>
//       ) : (
//         <p>No car selected. Please go back and select a car.</p>
//       )}

//       <button
//         onClick={() => navigate("/")}
//         className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600 transition"
//       >
//         Back to Main Page
//       </button>
//     </div>
//   );
// }
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ReservationConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ get car + formData from CarReservation.js
  const { car, formData } = location.state || {};

  if (!car || !formData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          No reservation data found.
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center bg-gray-100 py-16 px-6 min-h-screen">
      <h1 className="text-3xl font-extrabold text-red-700 mb-10 uppercase tracking-wide">
        Confirm Your Reservation
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg text-center">
        {/* Car Info */}
        <img
          src={car.img}
          alt={car.name}
          className="rounded-xl w-full h-56 object-cover mb-5"
        />
        <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
        <p className="text-red-600 font-semibold mb-6">{car.price}</p>

        {/* User Info */}
        <div className="text-left text-gray-700 space-y-2 mb-8">
          <p>
            <span className="font-semibold">Full Name:</span>{" "}
            {formData.fullName}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {formData.address}
          </p>
          <p>
            <span className="font-semibold">Contact:</span> {formData.contact}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {formData.email}
          </p>
          <p>
            <span className="font-semibold">Preferred Date:</span>{" "}
            {formData.preferredDate}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate(-1)} // Go back to edit info
            className="w-full sm:w-auto bg-gray-200 text-red-700 px-6 py-2 rounded-full hover:bg-gray-300 transition"
          >
            Edit Info
          </button>
          <button
            onClick={() => {
              alert("Reservation Confirmed! ✅");
              navigate("/"); // redirect to main/home
            }}
            className="w-full sm:w-auto bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    </section>
  );
}
