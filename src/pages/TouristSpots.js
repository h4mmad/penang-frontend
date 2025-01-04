import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TouristSpots.css'; // Add a CSS file if styling is needed

function TouristSpots() {
  // State to store tourist spots
  const [touristSpots, setTouristSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tourist spots data from the backend
  useEffect(() => {
    axios.get('https://penang-backend.onrender.com/api/tourist-spots')
      .then(response => {
        setTouristSpots(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch tourist spots');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="tourist-spots">
      <h2>Tourist Spots in Penang</h2>
      <ul className="spots-list">
        {touristSpots.map((spot) => (
          <li key={spot.id} className="spot-item">
            <h3>{spot.name}</h3>
            <img
              src={spot.image}
              alt={spot.name}
              className="spot-image"
              onError={(e) => e.target.src = '/images/placeholder.jpg'} // Fallback for missing images
            />
            <p>{spot.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TouristSpots;
