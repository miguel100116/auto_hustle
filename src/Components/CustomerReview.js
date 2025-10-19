// // import React from "react";
// // import { motion } from "framer-motion";

// // const reviews = [
// //   { id: 1, name: "Miguel Bermejo", rating: 5, text: "smooth transaction." },
// //   { id: 2, name: "Joel Alarcon", rating: 5, text: "Good quality 2nd hand cars." },
// //   { id: 3, name: "Pan cham", rating: 5, text: "Easy to deal with." },
// // ];

// // export default function CustomerReview() {
// //   return (
// //     <section className="bg-gray-300 w-full py-8 flex flex-col items-center">
// //       <h2 className="text-xl font-bold text-red-600 mb-6">CUSTOMER REVIEW</h2>
// //       <div className="flex justify-center gap-4 flex-wrap">
// //         {reviews.map((review, index) => (
// //           <motion.div
// //             key={review.id}
// //             initial={{ scale: 0.8, opacity: 0 }}
// //             animate={{ scale: 1, opacity: 1 }}
// //             transition={{ duration: 0.5, delay: index * 0.2 }}
// //             className="bg-red-700 text-white rounded-full px-6 py-4 text-center w-60 shadow-md"
// //           >
// //             <p className="font-semibold">{review.name}</p>
// //             <p className="text-yellow-400">{"⭐".repeat(review.rating)}</p>
// //             <p className="italic text-sm">"{review.text}"</p>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// import React from "react";
// import { motion } from "framer-motion";

// const reviews = [
//   { id: 1, name: "Miguel Bermejo", rating: 5, text: "Smooth transaction." },
//   { id: 2, name: "Joel Alarcon", rating: 5, text: "Good quality 2nd hand cars." },
//   { id: 3, name: "Pan Cham", rating: 5, text: "Easy to deal with." },
// ];

// export default function CustomerReview() {
//   return (
//     <section className="bg-gray-300 w-full min-h-[60vh] flex flex-col justify-center items-center py-16">
//       <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-10 tracking-tight">
//         CUSTOMER REVIEW
//       </h2>
//       <div className="flex justify-center gap-6 flex-wrap px-4">
//         {reviews.map((review, index) => (
//           <motion.div
//             key={review.id}
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="bg-red-700 text-white rounded-3xl px-8 py-6 text-center w-64 shadow-lg hover:scale-105 transition-transform duration-300"
//           >
//             <p className="font-semibold text-lg">{review.name}</p>
//             <p className="text-yellow-400 text-base mt-1">
//               {"⭐".repeat(review.rating)}
//             </p>
//             <p className="italic text-sm mt-2">"{review.text}"</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }





import React from "react";
import { motion } from "framer-motion";

const reviews = [
  { id: 1, name: "Miguel Bermejo", rating: 5, text: "Smooth transaction." },
  { id: 2, name: "Joel Alarcon", rating: 5, text: "Good quality 2nd hand cars." },
  { id: 3, name: "Pan Cham", rating: 5, text: "Easy to deal with." },
];

export default function CustomerReview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-300 w-full min-h-[60vh] flex flex-col justify-center items-center py-16"
    >
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-10 tracking-tight"
      >
        CUSTOMER REVIEW
      </motion.h2>

      <div className="flex justify-center gap-6 flex-wrap px-4">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-red-700 text-white rounded-3xl px-8 py-6 text-center w-64 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <p className="font-semibold text-lg">{review.name}</p>
            <p className="text-yellow-400 text-base mt-1">
              {"⭐".repeat(review.rating)}
            </p>
            <p className="italic text-sm mt-2">"{review.text}"</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

