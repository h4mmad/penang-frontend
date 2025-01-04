import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hotels.css'; // Add CSS for styling if needed

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://penang-backend.onrender.com/api/hotels')
      .then(response => {
        setHotels(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch hotels');
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
    <div className="hotels">
      <h2>Hotels in Penang</h2>
      <ul className="hotels-list">
        {hotels.map((hotel) => (
          <li key={hotel.id} className="hotel-item">
            <h3>{hotel.name}</h3>
            <img
              src={hotel.image}
              alt={hotel.name}
              className="hotel-image"
              onError={(e) => e.target.src = '/images/placeholder.jpg'} // Fallback for missing images
            />
            <p>{hotel.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hotels;
