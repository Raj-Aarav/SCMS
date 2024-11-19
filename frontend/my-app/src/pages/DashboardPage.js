// // src/pages/DashboardPage.js
// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const DashboardPage = () => {
//     const { role } = useAuth();

//     return (
//         <div className="dashboard">
//             <h2>Dashboard</h2>
//             {role === 'admin' && <p>Welcome, Admin! You have full access to the system.</p>}
//             {role === 'manager' && <p>Welcome, Manager! You can manage orders and inventory.</p>}
//             {role === 'user' && <p>Welcome, User! You can view your orders.</p>}
//         </div>
//     );
// };

// export default DashboardPage;

// src/pages/DashboardPage.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import CommonDashboardControls from '../components/CommonDashboardControls';
import ManagerDashboardControls from '../components/ManagerDashboardControls'; // New Manager-specific controls

const DashboardPage = () => {
    const { role } = useAuth(); // Get the role from AuthContext

    return (
        <div className="dashboard-page">
            <CommonDashboardControls role={role} />
            {role === 'admin'}

            {/* Manager-specific controls */}
            {role === 'manager' && <ManagerDashboardControls />}
        </div>
    );
};

export default DashboardPage;

// // src/pages/DashboardPage.js
// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import ManageInventory from '../components/ManageInventory';
// import PlaceOrder from '../components/PlaceOrder';

// const DashboardPage = () => {
//     const { role } = useAuth();

//     return (
//         <div>
//             <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h2>
//             {role === 'user' && <PlaceOrder />}
//             {role === 'manager' && <ManageInventory />}
//             {role === 'admin' && (
//                 <div>
//                     <ManageInventory />
//                     <div>User Management (admin only)</div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DashboardPage;
