import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FoodBeverages.css'; // Add CSS for styling if needed

function FoodBeverages() {
  const [foodBeverages, setFoodBeverages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://penang-backend.onrender.com/api/foodBeverages')
      .then(response => {
        setFoodBeverages(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch food and beverages');
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
    <div className="food-beverages">
      <h2>Food & Beverages in Penang</h2>
      <ul className="food-list">
        {foodBeverages.map((item) => (
          <li key={item.id} className="food-item">
            <h3>{item.name}</h3>
            <img
              src={item.image}
              alt={item.name}
              className="food-image"
              onError={(e) => e.target.src = '/images/placeholder.jpg'} // Fallback for missing images
            />
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodBeverages;
