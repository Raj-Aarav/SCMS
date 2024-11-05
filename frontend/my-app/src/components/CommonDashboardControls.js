// src/components/CommonDashboardControls.js
import React from 'react';
import ManageOrders from './ManageOrders';
import InventoryManagement from './InventoryManagement';
import UserManagement from './UserManagement';

const CommonDashboardControls = ({ role }) => {
    return (
        <div className="dashboard-controls">
            <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h2>

            {role === 'admin' && (
                <div className="admin-controls">
                    <h3>Admin Controls</h3>
                    <UserManagement />
                    <button onClick={() => console.log('System Settings')}>System Settings</button>
                </div>
            )}

            {(role === 'manager' || role === 'admin') && (
                <div className="manager-controls">
                    <h3>Manager Controls</h3>
                    <ManageOrders />
                    <InventoryManagement />
                    <button onClick={() => console.log('Supplier Management')}>Supplier Management</button>
                </div>
            )}

            {role === 'user' && (
                <div className="user-controls">
                    <h3>User Dashboard</h3>
                    <button onClick={() => console.log('View My Orders')}>View My Orders</button>
                </div>
            )}
        </div>
    );
};

export default CommonDashboardControls;
