import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-sm sm:text-base mb-2">
          © {new Date().getFullYear()}{" "}
          <span className="text-red-500 font-semibold">AutoHustle</span>. All
          Rights Reserved.
        </p>
        <p className="text-xs sm:text-sm text-gray-400">
          Drive your dream — buy, sell, or trade with confidence.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-gray-400 text-sm">
          <a href="#" className="hover:text-red-500 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-red-500 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


