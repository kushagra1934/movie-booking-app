import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
//importing the pages 
import HomePage from "./pages/HomePage";
import CinemaPage from "./pages/CinemaPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import BookingHistoryPage from "./pages/BookingHistoryPage";
import SeatSelectionPage from "./pages/SeatSelectionPage";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <Router>
      <Header /> {/* Header will now appear on every page */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cinema/:cinemaId" element={<CinemaPage />} />
          <Route path="/show/:showId" element={<SeatSelectionPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <BookingHistoryPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


