import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const createBooking = async (bookingData) => {
    try {
        const response = await axios.post(`${API_URL}/bookings`, bookingData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating booking: ' + error.message);
    }
};

export const getBookings = async () => {
    try {
        const response = await axios.get(`${API_URL}/bookings`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching bookings: ' + error.message);
    }
};

export const deleteBooking = async (bookingId) => {
    try {
        const response = await axios.delete(`${API_URL}/bookings/${bookingId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting booking: ' + error.message);
    }
};