import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your page components
import HomePage from './components/HomePage'; // Adjust the import path as necessary
import BookingPage from './components/BookingPage'; // Adjust the import path as necessary
// Import other components you need for different routes

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Place your Nav component here if you have one */}
        </header>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
