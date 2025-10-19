import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-700 via-red-600 to-gray-900 text-white overflow-y-auto py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4 uppercase tracking-wide">
            About <span className="text-yellow-300">AutoHustle</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We are passionate about helping you find your perfect ride.
            AutoHustle connects car enthusiasts, sellers, and buyers in one
            trusted platform built for transparency and ease.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10"
        >
          <h2 className="text-3xl font-bold text-red-700 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At <span className="font-semibold text-red-600">AutoHustle</span>,
            our mission is to simplify the car-buying and selling process for
            everyone. We strive to provide a safe, efficient, and trustworthy
            platform that empowers both customers and dealerships.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10"
        >
          <h2 className="text-3xl font-bold text-red-700 mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To become the leading car marketplace in the Philippines — offering
            top-quality vehicles, fair deals, and exceptional customer
            experience. We aim to build a community of car lovers who trust and
            enjoy the AutoHustle journey.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10"
        >
          <h2 className="text-3xl font-bold text-red-700 mb-4">Meet the Team</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Our passionate team is made up of automotive enthusiasts, tech
            innovators, and customer service experts — all dedicated to bringing
            you the best experience in online car trading.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["Joshua Bermejo", "Maria Santos", "Carlos Rivera", "Jane Cruz"].map(
              (name, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xl shadow p-4 text-center hover:shadow-lg transition"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-red-200 flex items-center justify-center mb-3 text-red-700 font-bold text-xl">
                    {name[0]}
                  </div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-gray-600">Team Member</p>
                </div>
              )
            )}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold text-red-700 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have questions or want to partner with us? Reach out through our
            contact form or email us directly at{" "}
            <span className="text-red-600 font-semibold">
              support@autohustle.com
            </span>
          </p>
        </motion.div>
      </div>


      <div className="fixed bottom-6 left-0 right-0 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md transition"
        >
          ⬅ Back
        </motion.button>
      </div>
    </section>
  );
}

export default About;
