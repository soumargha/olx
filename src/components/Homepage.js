// components/Homepage.js
import React from 'react';
import '../cssFIles/Homepage.css';

function Homepage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <div className="categories-container">
        <div className="categories">
          <div className="category">
            <img src="category1.jpg" alt="Category 1" />
            <h3>Category 1</h3>
          </div>
          <div className="category">
            <img src="category2.jpg" alt="Category 2" />
            <h3>Category 2</h3>
          </div>
          <div className="category">
            <img src="category3.jpg" alt="Category 3" />
            <h3>Category 3</h3>
          </div>
          <div className="category">
            <img src="category4.jpg" alt="Category 4" />
            <h3>Category 4</h3>
          </div>
          <div className="category">
            <img src="category5.jpg" alt="Category 5" />
            <h3>Category 5</h3>
          </div>
          <div className="category">
            <img src="category6.jpg" alt="Category 6" />
            <h3>Category 6</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
