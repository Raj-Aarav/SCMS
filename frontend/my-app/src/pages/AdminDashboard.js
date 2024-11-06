// src/pages/AdminDashboard.js
import React, { useState } from 'react';
import AddUserForm from '../components/AddUserForm';
import ManageInventory from '../components/ManageInventory';

const AdminDashboard = () => {
    const [showAddUserForm, setShowAddUserForm] = useState(false);

    const handleAddUserClick = () => setShowAddUserForm(true);
    const handleCloseForm = () => setShowAddUserForm(false);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <button onClick={handleAddUserClick}>Add User/Manager</button>

            {showAddUserForm ? (
                <AddUserForm onClose={handleCloseForm} />
            ) : (
                <>
                    <ManageInventory />
                    {/* Include other admin components here */}
                </>
            )}
        </div>
    );
};

export default AdminDashboard;
