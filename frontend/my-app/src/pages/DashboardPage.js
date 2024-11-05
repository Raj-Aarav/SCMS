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

const DashboardPage = () => {
    const { role } = useAuth(); // Get the role from AuthContext

    return (
        <div className="dashboard-page">
            <CommonDashboardControls role={role} />
        </div>
    );
};

export default DashboardPage;
