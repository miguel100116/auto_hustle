// // src/CarReservation.js
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function CarReservation() {
//   const { id } = useParams(); // get car id from URL
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     address: "",
//     contact: "",
//     email: "",
//     preferredDate: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Reservation submitted successfully!");
//     navigate("/plan-visit");
//   };

//   return (
//     <section className="bg-red-700 flex flex-col items-center py-10 min-h-screen text-white">
//       <h1 className="text-3xl font-bold mb-6 uppercase tracking-wide">
//         Car Reservation
//       </h1>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white text-black rounded-2xl shadow-md p-6 w-80"
//       >
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="contact"
//           placeholder="Contact Number"
//           value={formData.contact}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="date"
//           name="preferredDate"
//           value={formData.preferredDate}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition"
//         >
//           Plan a Visit
//         </button>
//       </form>

//       <button
//         onClick={() => navigate(-1)}
//         className="mt-6 bg-gray-200 text-red-700 px-5 py-2 rounded-full hover:bg-gray-300 transition"
//       >
//         Back
//       </button>
//     </section>
//   );
// }



//delete this if code is not working
// src/Components/CarReservation.js
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { moreCars } from "./MoreCars"; // ✅ import the array from MoreCars.js

// export default function CarReservation() {
//   const { id } = useParams(); // get car id from URL
//   const navigate = useNavigate();

//   // ✅ Find the car based on the clicked id
//   const car = moreCars.find((c) => c.id === parseInt(id));

//   const [formData, setFormData] = useState({
//     fullName: "",
//     address: "",
//     contact: "",
//     email: "",
//     preferredDate: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // ✅ Send both car and form data to confirmation page
//     navigate("/reservation-confirmation", { state: { car, formData } });
//   };

//   return (
//     <section className="bg-red-700 flex flex-col items-center py-10 min-h-screen text-white">
//       <h1 className="text-3xl font-bold mb-6 uppercase tracking-wide">
//         Car Reservation
//       </h1>

//       {car ? (
//         <>
//           <img
//             src={car.img}
//             alt={car.name}
//             className="rounded-xl w-64 h-40 object-cover mb-4"
//           />
//           <h2 className="text-xl font-semibold">{car.name}</h2>
//           <p className="text-green-400 font-medium mb-6">{car.price}</p>
//         </>
//       ) : (
//         <p className="text-white mb-4">Car not found.</p>
//       )}

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white text-black rounded-2xl shadow-md p-6 w-80"
//       >
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="contact"
//           placeholder="Contact Number"
//           value={formData.contact}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />
//         <input
//           type="date"
//           name="preferredDate"
//           value={formData.preferredDate}
//           onChange={handleChange}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition"
//         >
//           Plan a Visit
//         </button>
//       </form>

//       <button
//         onClick={() => navigate(-1)}
//         className="mt-6 bg-gray-200 text-red-700 px-5 py-2 rounded-full hover:bg-gray-300 transition"
//       >
//         Back
//       </button>
//     </section>
//   );
// }








import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { moreCars } from "./MoreCars"; // ✅ Import car data

export default function CarReservation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get car data from state or fallback to lookup
  const carFromState = location.state?.car;
  const car = carFromState || moreCars.find((c) => c.id === parseInt(id));

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

  return (
    <section className="flex flex-col items-center bg-gray-100 py-16 px-6 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-red-700 mb-10 uppercase tracking-wide">
        Car Reservation
      </h1>

      {car ? (
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
      ) : (
        <p className="text-gray-700 font-medium mb-6">Car not found.</p>
      )}

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

