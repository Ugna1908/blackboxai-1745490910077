import React from 'react';
import BookingForm from '../components/BookingForm/BookingForm';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Schedule Your Appointment</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Choose your preferred date and time to meet with our specialists. You will receive confirmation via email and WhatsApp.
          </p>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
