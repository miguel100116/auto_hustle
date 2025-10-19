


import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const cars = [
  {
    id: 1,
    name: "Toyota Wigo",
    price: "₱120,000",
    img: "https://toyotasantarosa.com.ph/wp-content/uploads/2023/07/0000_WIGO_G-CVT-Colorswatch-Grey.jpg",
  },
  {
    id: 2,
    name: "Toyota 86",
    price: "₱250,000",
    img: "https://www.lilshobbycenter.com.ph/cdn/shop/products/24323.jpg?v=1494060182",
  },
  {
    id: 3,
    name: "Honda Civic",
    price: "₱270,000",
    img: "https://di-uploads-pod11.dealerinspire.com/appletreehonda/uploads/2018/12/my18_civic4D_exterior-01-copy-1.jpg",
  },
  {
    id: 4,
    name: "Ford Ranger",
    price: "₱400,000",
    img: "https://images.hgmsites.net/lrg/2025-ford-ranger-xlt-2wd-supercrew-5-box-angular-front-exterior-view_100958381_l.webp",
  },
  {
    id: 5,
    name: "Nissan Almera",
    price: "₱180,000",
    img: "https://global2.nissanflow.com/media/4f2dxvwn/01-almera-colours-white-ffffff.jpg",
  },
  {
    id: 6,
    name: "Mitsubishi Mirage G4",
    price: "₱160,000",
    img: "https://media.topgear.com.ph/wp-content/uploads/2025/07/2021-mitsubishi-mirage-g4.jpg",
  },
  {
    id: 7,
    name: "Hyundai Tucson",
    price: "₱350,000",
    img: "https://www.hyundai.com/content/dam/hyundai/ph/en/images/find-a-car/thumbnail/TUCSON.png",
  },
  {
    id: 8,
    name: "Mazda 3",
    price: "₱320,000",
    img: "https://di-uploads-pod2.dealerinspire.com/headquartermazdaspanishtoggle/uploads/2016/09/2016-Mazda3onWhite.png",
  },
];

export default function CarList() {
  const navigate = useNavigate();

  const handleReserve = (car) => {
   
    navigate(`/reserve/${car.id}`, { state: { car } });
  };

  const handleShowMore = () => {
    navigate("/more-cars");
  };

  return (
    <section className="flex flex-col items-center bg-gray-100 py-16 px-6 min-h-[80vh]">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold text-red-700 mb-10"
      >
        Available Cars
      </motion.h2>

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {cars.map((car, index) => (
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
            {/* Image */}
            <motion.img
              src={car.img}
              alt={car.name}
              className="w-full h-56 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Text */}
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
                  onClick={() => handleReserve(car)}
                  className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-colors shadow-md"
                >
                  Reserve Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShowMore}
        className="mt-10 bg-green-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-600 transition-colors"
      >
        Show More
      </motion.button>
    </section>
  );
}
