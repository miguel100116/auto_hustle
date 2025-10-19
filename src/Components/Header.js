


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import CarList from "./CarList";

function Header({ userEmail, onLogout }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="relative flex flex-col items-center justify-center px-4 py-10 shadow-md bg-white">
        <div className="absolute top-6 right-6 flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/about")}
            className="bg-red-600 text-white px-5 py-2 rounded-full shadow hover:bg-red-700 transition"
          >
            About Us
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
          >
            <User size={24} className="text-gray-800" />
          </motion.button>

          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-14 w-56 bg-white rounded-xl shadow-lg overflow-hidden border z-50"
              >
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-semibold text-gray-800">
                    {userEmail ? userEmail.split("@")[0] : "User"}
                  </p>
                  <p className="text-xs text-gray-500">{userEmail}</p>
                </div>
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    My Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li
                    className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-red-600">AUTO</span>
          <span className="ml-2 text-gray-900">HUSTLE</span>
        </h1>
        <h2 className="mt-3 text-base sm:text-lg md:text-xl text-gray-700 font-medium">
          BUY • SELL • TRADE-IN • FINANCE
        </h2>
      </header>

      <CarList />
    </div>
  );
}

export default Header;
