import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Homepage from './components/Homepage/Homepage';
import BookingPage from './pages/Booking';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/book" element={<BookingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
