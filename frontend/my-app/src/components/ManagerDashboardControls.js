// // src/components/ManagerDashboardControls.js
// import React, { useState, useEffect } from 'react';
// import ManageOrders from './ManageOrders';
// import InventoryManagement from './InventoryManagement';
// // import SupplierManagement from './SupplierManagement'; // Assuming you have a SupplierManagement component

// const ManagerDashboardControls = () => {
//     const [lowStockAlert, setLowStockAlert] = useState('');

//     // Example of low stock management - could be an API call or data fetching
//     useEffect(() => {
//         // Simulate an API call or logic for low stock
//         setLowStockAlert("Low stock alert: Some items are running low!");
//     }, []);

//     return (
//         <div className="manager-dashboard-controls">
//             <h2>Manager Dashboard</h2>
//             <p>{lowStockAlert}</p>

//             {/* Manage Orders */}
//             <div className="manager-section">
//                 <h3>Manage Orders</h3>
//                 <ManageOrders />
//             </div>

//             {/* Inventory Management */}
//             <div className="manager-section">
//                 <h3>Inventory Management</h3>
//                 <InventoryManagement />
//             </div>

//             {/* Supplier Management */}
//             {/* <div className="manager-section">
//                 <h3>Supplier Management</h3>
//                 <SupplierManagement />
//             </div> */}
//         </div>
//     );
// };

// export default ManagerDashboardControls;

// // src/components/ManagerDashboardControls.js
// import React, { useState, useEffect } from 'react';
// import ManageOrders from './ManageOrders';
// import ManageInventory from './ManageInventory';
// import SupplierManagement from './SupplierManagement'; // Uncomment if you have this component

// const ManagerDashboardControls = () => {
//     const [lowStockAlert, setLowStockAlert] = useState('');

//     // Example of low stock management - could be an API call or data fetching
//     useEffect(() => {
//         // Simulate an API call or logic for low stock
//         setLowStockAlert("Low stock alert: Some items are running low!"); // Replace with API logic if needed
//     }, []);

//     return (
//         <div className="manager-dashboard-controls">
//             <h2>Manager Dashboard</h2>
//             <p>{lowStockAlert}</p>

//             {/* Manage Orders Section */}
//             <div className="manager-section">
//                 <h3>Manage Orders</h3>
//                 <ManageOrders />
//             </div>

//             {/* Inventory Management Section */}
//             <div className="manager-section">
//                 <h3>Inventory Management</h3>
//                 <ManageInventory />
//             </div>

//             {/* Supplier Management Section (if applicable) */}
//             <div className="manager-section">
//                 <h3>Supplier Management</h3>
//                 <SupplierManagement />
//             </div>
//         </div>
//     );
// };

// export default ManagerDashboardControls;

// src/components/ManagerDashboardControls.js
import React from 'react';
import ManageOrders from './ManageOrders';
import ManageInventory from './ManageInventory';
import SupplierManagement from './SupplierManagement';

const ManagerDashboardControls = () => {
    return (
        <div className="manager-dashboard-controls">
            {/* <h2>Manager Dashboard</h2> */}

            {/* Manage Orders Section */}
            <div className="manager-section">
                {/* <h3>Manage Orders</h3> */}
                <ManageOrders />
            </div>

            {/* Inventory Management Section */}
            <div className="manager-section">
                {/* <h3>Inventory Management</h3> */}
                <ManageInventory />
            </div>

            {/* Supplier Management Section */}
            <div className="manager-section">
                {/* <h3>Supplier Management</h3> */}
                <SupplierManagement />
            </div>
        </div>
    );
};

export default ManagerDashboardControls;
