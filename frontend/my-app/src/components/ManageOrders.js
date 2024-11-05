// // src/components/ManageOrders.js
// import React, { useState, useEffect } from 'react';

// const ManageOrders = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         // Fetch orders from API (mocked for example)
//         setOrders([
//             { id: 1, product: 'Laptop', quantity: 5, status: 'Shipped' },
//             { id: 2, product: 'Monitor', quantity: 10, status: 'Processing' },
//         ]);
//     }, []);

//     return (
//         <div>
//             <h3>Order Management</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Order ID</th>
//                         <th>Product</th>
//                         <th>Quantity</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.map((order) => (
//                         <tr key={order.id}>
//                             <td>{order.id}</td>
//                             <td>{order.product}</td>
//                             <td>{order.quantity}</td>
//                             <td>{order.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={() => console.log('Add Order')}>Add Order</button>
//         </div>
//     );
// };

// export default ManageOrders;
