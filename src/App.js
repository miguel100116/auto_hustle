
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import CustomerReview from "./Components/CustomerReview";
import Login from "./Components/Login";
import MoreCars from "./Components/MoreCars";
import CarReservation from "./Components/CarReservation";
import ReservationConfirmation from "./Components/ReservationConfirmation";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (email) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
  };

  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header userEmail={userEmail} onLogout={handleLogout} />
                  <CustomerReview />
                  <Footer />
                </>
              }
            />
            <Route path="/more-cars" element={<MoreCars />} />
            <Route path="/reserve/:id" element={<CarReservation />} />
            <Route
              path="/reservation-confirmation"
              element={<ReservationConfirmation />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;

