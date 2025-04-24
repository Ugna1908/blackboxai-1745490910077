import React, { useEffect, useState } from 'react';
import { getBookings, deleteBooking } from '../../services/api';
import { Booking } from '../../types';

const ManageBookings: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const fetchedBookings = await getBookings();
            setBookings(fetchedBookings);
        };

        fetchBookings();
    }, []);

    const handleDelete = async (id: string) => {
        await deleteBooking(id);
        setBookings(bookings.filter(booking => booking.id !== id));
    };

    return (
        <div>
            <h2>Manage Bookings</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.name}</td>
                            <td>{booking.date}</td>
                            <td>{booking.time}</td>
                            <td>
                                <button onClick={() => handleDelete(booking.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageBookings;