import React from 'react';
import Dashboard from '../components/AdminDashboard/Dashboard';
import ManageBookings from '../components/AdminDashboard/ManageBookings';

const Admin: React.FC = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Dashboard />
            <ManageBookings />
        </div>
    );
};

export default Admin;