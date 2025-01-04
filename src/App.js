import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TouristSpots from './pages/TouristSpots';
import FoodBeverages from './pages/FoodBeverages';  // Updated import
import Hotels from './pages/Hotels';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tourist-spots" element={<TouristSpots />} />
        <Route path="/food-beverages" element={<FoodBeverages />} />  {/* Updated route */}
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
