import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Admin Dashboard</h1>
            <div className="overview">
                <h2>Overview</h2>
                <p>Manage your bookings and available timings from this dashboard.</p>
            </div>
            <div className="actions">
                <h2>Actions</h2>
                <Link to="/admin/manage-bookings" className="btn">Manage Bookings</Link>
                <Link to="/admin/available-timings" className="btn">Manage Available Timings</Link>
            </div>
        </div>
    );
};

export default Dashboard;