// import React from "react";
// import { useNavigate } from "react-router-dom";

// const moreCars = [
//   { id: 3, name: "Honda Civic", price: "250,000php", img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Civic/10959/1697629712826/front-left-side-47.jpg" },
//   { id: 4, name: "Mitsubishi Mirage", price: "150,000php", img: "https://mitsubishi-motors.com.ph/wp-content/uploads/2022/05/Mirage-G4-GLX-CVT.png" },
//   { id: 5, name: "Hyundai Accent", price: "180,000php", img: "https://cdn.motor1.com/images/mgl/WppQn/s3/2023-hyundai-accent-front-quarter.jpg" },
//   { id: 6, name: "Toyota Vios", price: "200,000php", img: "https://toyota.com.ph/uploads/car_models/3/2023-vios-banner-desktop.jpg" },
//   { id: 7, name: "Suzuki Swift", price: "190,000php", img: "https://cdn.motor1.com/images/mgl/0ANgo/s3/suzuki-swift-sport-2021.jpg" },
//   { id: 8, name: "Ford Fiesta", price: "210,000php", img: "https://pictures.dealer.com/f/fordfiesta/0450/3e207987e47e7e949ae72d1b1e72f35fx.jpg" },
//   { id: 9, name: "Nissan Almera", price: "220,000php", img: "https://www.nissan.ph/content/dam/Nissan/philippines/vehicles/almera/my23/almera-my23-gallery-01.jpg.ximg.l_full_m.smart.jpg" },
//   { id: 10, name: "Mazda 3", price: "260,000php", img: "https://www.mazda.ph/sites/default/files/2022-09/Mazda3%20HB%20Front%20Left_1.jpg" },
// ];

// export default function MoreCars() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-red-700 flex flex-col items-center py-6 min-h-screen">
//       <h1 className="text-white text-3xl font-bold mb-6 uppercase tracking-wide">
//         More Cars Available
//       </h1>

//       <div className="flex flex-wrap justify-center gap-6 px-4">
//         {moreCars.map((car) => (
//           <div
//             key={car.id}
//             onClick={() => navigate(`/reserve/${car.id}`)} // <-- navigate to reservation page
//             className="bg-white rounded-2xl p-3 w-72 shadow-md hover:scale-105 transform transition duration-200 cursor-pointer"
//           >
//             <img
//               src={car.img}
//               alt={car.name}
//               className="rounded-xl w-full h-40 object-cover"
//             />
//             <div className="mt-3 text-center">
//               <h2 className="text-lg font-semibold">{car.name}</h2>
//               <p className="text-green-500 font-medium">{car.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={() => navigate("/")}
//         className="mt-8 bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600 transition"
//       >
//         Back to Main Page
//       </button>
//     </section>
//   );
// }











//delete if not works
// src/Components/MoreCars.js
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// // ✅ Export for CarReservation use if needed
// export const moreCars = [
//   {
//     id: 3,
//     name: "Honda Civic",
//     price: "₱250,000",
//     img: "https://di-uploads-pod11.dealerinspire.com/appletreehonda/uploads/2018/12/my18_civic4D_exterior-01-copy-1.jpg",
//   },
//   {
//     id: 4,
//     name: "Mitsubishi Mirage",
//     price: "₱150,000",
//     img: "https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/site-images/cars/mirage-g4/2019/Hero.jpg?width=2160&auto=webp&quality=70",
//   },
//   {
//     id: 5,
//     name: "Hyundai Accent",
//     price: "₱180,000",
//     img: "https://www.topgear.com.ph/files/2021/03/hyundai-accent-2021-1-1615444568.jpg",
//   },
//   {
//     id: 6,
//     name: "Toyota Corolla Altis",
//     price: "₱220,000",
//     img: "https://toyota.com.ph/uploads/car_models/Altis_2023.png",
//   },
//   {
//     id: 7,
//     name: "Ford Ranger",
//     price: "₱400,000",
//     img: "https://www.ford.com.ph/content/dam/Ford/website-assets/ap/philippines/nameplate/ranger/launch/gallery/exterior/ford-ranger-gallery-exterior-1.jpg",
//   },
//   {
//     id: 8,
//     name: "Nissan Almera",
//     price: "₱190,000",
//     img: "https://www.nissan.ph/content/dam/Nissan/ASEAN/Philippines/vehicles/almera/overview/2024/almera-2024-gray.png",
//   },
//   {
//     id: 9,
//     name: "Suzuki Swift",
//     price: "₱210,000",
//     img: "https://www.suzuki.com.ph/uploads/vehicle/Swift/Suzuki-Swift-Grey.png",
//   },
//   {
//     id: 10,
//     name: "Mazda 3",
//     price: "₱300,000",
//     img: "https://www.mazda.ph/assets/models/mazda3-sedan/mazda3-sedan-hero.png",
//   },
// ];

// export default function MoreCars() {
//   const navigate = useNavigate();

//   const handleReserve = (id) => {
//     navigate(`/reserve/${id}`);
//   };

//   const handleBack = () => {
//     navigate("/");
//   };

//   return (
//     <section className="bg-red-700 flex flex-col items-center py-12 min-h-screen">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-white text-3xl font-extrabold mb-8"
//       >
//         More Available Cars
//       </motion.h2>

//       {/* 🏎️ Car Cards */}
//       <div className="flex flex-wrap justify-center gap-8 px-4">
//         {moreCars.map((car, index) => (
//           <motion.div
//             key={car.id}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.15 }}
//             className="bg-white rounded-2xl p-4 w-72 shadow-md hover:shadow-lg transition-all duration-300"
//           >
//             <img
//               src={car.img}
//               alt={car.name}
//               className="rounded-xl w-full h-40 object-cover"
//             />
//             <div className="mt-3 text-center">
//               <h2 className="text-lg font-semibold">{car.name}</h2>
//               <p className="text-green-500 font-medium">{car.price}</p>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => handleReserve(car.id)}
//                 className="mt-4 bg-red-600 text-white px-5 py-2 rounded-full shadow hover:bg-red-700 transition-colors"
//               >
//                 Reserve Now
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* 🔙 Back Button */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={handleBack}
//         className="mt-10 bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600 transition-colors"
//       >
//         Back to Home
//       </motion.button>
//     </section>
//   );
// }







import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Export for CarReservation.js
export const moreCars = [
  {
    id: 3,
    name: "Honda Civic",
    price: "₱250,000",
    img: "https://di-uploads-pod11.dealerinspire.com/appletreehonda/uploads/2018/12/my18_civic4D_exterior-01-copy-1.jpg",
  },
  {
    id: 4,
    name: "Mitsubishi Mirage",
    price: "₱150,000",
    img: "https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/site-images/cars/mirage-g4/2019/Hero.jpg?width=2160&auto=webp&quality=70",
  },
  {
    id: 5,
    name: "Hyundai Accent",
    price: "₱180,000",
    img: "https://taghazoutrentalcars.com/wp-content/uploads/2024/01/Hyundai.Accent-920.jpg",
  },
  {
    id: 6,
    name: "Toyota Corolla Altis",
    price: "₱220,000",
    img: "https://www.toyotavalenzuela.com.ph/wp-content/uploads/2022/11/corolla-altis-whp.jpg",
  },
  {
    id: 7,
    name: "Ford Ranger",
    price: "₱400,000",
    img: "https://images.hgmsites.net/lrg/2025-ford-ranger-xlt-2wd-supercrew-5-box-angular-front-exterior-view_100958381_l.webp",
  },
  {
    id: 8,
    name: "Nissan Almera",
    price: "₱190,000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_4zfmshETqqiFPbfSC5Q2KSpS052PRRlkg&s",
  },
  {
    id: 9,
    name: "Suzuki Swift",
    price: "₱210,000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_8S3w7aungkRnFTqhIeUpq24alXc7uu5LQ&s",
  },
  {
    id: 10,
    name: "Mazda 3",
    price: "₱300,000",
    img: "https://di-uploads-pod2.dealerinspire.com/headquartermazdaspanishtoggle/uploads/2016/09/2016-Mazda3onWhite.png",
  },
];

export default function MoreCars() {
  const navigate = useNavigate();

  const handleReserve = (id) => {
    navigate(`/reserve/${id}`);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center bg-gray-100 py-16 px-6 min-h-[80vh]">
      {/* Page Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold text-red-700 mb-10"
      >
        More Available Cars
      </motion.h2>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {moreCars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Car Image */}
            <motion.img
              src={car.img}
              alt={car.name}
              className="w-full h-56 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Car Details */}
            <div className="p-6 text-center">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                className="text-2xl font-bold text-gray-800"
              >
                {car.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.4 }}
                className="text-red-600 font-semibold mt-2"
              >
                {car.price}
              </motion.p>

              <div className="flex justify-center gap-3 mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleReserve(car.id)}
                  className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-colors shadow-md"
                >
                  Reserve Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBack}
        className="mt-10 bg-green-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-600 transition-colors"
      >
        Back to Home
      </motion.button>
    </section>
  );
}
