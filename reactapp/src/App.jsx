import React from 'react';
import './App.css'; // External CSS

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="left-section">
          <h1>My Location</h1>
          <h2>Address</h2>
          <div className="address">
            <p>6-5-133, Balanagar</p>
            <p>Hyderabad</p>
            <p><strong>PinCode No:</strong> 500042</p>
          </div>
        </div>

        <div className="right-section">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6-5-133,Balanagar+(My%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
    </div>
  );
};

export default App;
