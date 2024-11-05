// src/components/UserManagement.js
import React, { useState, useEffect } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from API (mocked for example)
        setUsers([
            { id: 1, username: 'adminUser', role: 'admin' },
            { id: 2, username: 'managerUser', role: 'manager' },
        ]);
    }, []);

    return (
        <div>
            <h3>User Management</h3>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => console.log('Add User')}>Add User</button>
        </div>
    );
};

export default UserManagement;
