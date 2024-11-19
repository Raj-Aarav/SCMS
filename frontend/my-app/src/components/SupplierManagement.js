// // src/components/SupplierManagement.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SupplierManagement = () => {
//     const [suppliers, setSuppliers] = useState([]);
//     const [newSupplier, setNewSupplier] = useState({ name: '', contact_info: '' });
//     const [editingSupplier, setEditingSupplier] = useState(null);

//     useEffect(() => {
//         fetchSuppliers();
//     }, []);

//     // Fetch all suppliers
//     const fetchSuppliers = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/suppliers');
//             setSuppliers(response.data);
//         } catch (error) {
//             console.error('Error fetching suppliers:', error);
//         }
//     };

//     // Add a new supplier
//     const handleAddSupplier = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/suppliers', newSupplier);
//             fetchSuppliers(); // Refresh supplier list
//             setNewSupplier({ name: '', contact_info: '' }); // Reset form
//         } catch (error) {
//             console.error('Error adding supplier:', error);
//         }
//     };

//     // Update an existing supplier
//     const handleUpdateSupplier = async (supplierId) => {
//         try {
//             await axios.put(`/api/suppliers/${supplierId}`, editingSupplier);
//             fetchSuppliers(); // Refresh supplier list
//             setEditingSupplier(null); // Exit edit mode
//         } catch (error) {
//             console.error('Error updating supplier:', error);
//         }
//     };

//     return (
//         <div>
//             <h3>Supplier Management</h3>

//             {/* Form to add a new supplier */}
//             <form onSubmit={handleAddSupplier}>
//                 <input
//                     type="text"
//                     placeholder="Supplier Name"
//                     value={newSupplier.name}
//                     onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Contact Info"
//                     value={newSupplier.contact_info}
//                     onChange={(e) => setNewSupplier({ ...newSupplier, contact_info: e.target.value })}
//                 />
//                 <button type="submit">Add Supplier</button>
//             </form>

//             {/* Display list of suppliers */}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Contact Info</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {suppliers.map((supplier) => (
//                         <tr key={supplier.supplier_id}>
//                             <td>{editingSupplier?.supplier_id === supplier.supplier_id ? (
//                                 <input
//                                     type="text"
//                                     value={editingSupplier.name}
//                                     onChange={(e) => setEditingSupplier({ ...editingSupplier, name: e.target.value })}
//                                 />
//                             ) : (
//                                 supplier.name
//                             )}</td>
//                             <td>{editingSupplier?.supplier_id === supplier.supplier_id ? (
//                                 <input
//                                     type="text"
//                                     value={editingSupplier.contact_info}
//                                     onChange={(e) => setEditingSupplier({ ...editingSupplier, contact_info: e.target.value })}
//                                 />
//                             ) : (
//                                 supplier.contact_info
//                             )}</td>
//                             <td>
//                                 {editingSupplier?.supplier_id === supplier.supplier_id ? (
//                                     <>
//                                         <button onClick={() => handleUpdateSupplier(supplier.supplier_id)}>Save</button>
//                                         <button onClick={() => setEditingSupplier(null)}>Cancel</button>
//                                     </>
//                                 ) : (
//                                     <button onClick={() => setEditingSupplier(supplier)}>Edit</button>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default SupplierManagement;

// src/components/SupplierManagement.js
import React, { useState, useEffect } from 'react';
import SupplierService from '../services/SupplierService';
import SupplierSearch from './SupplierSearch';
import SupplierTable from './SupplierTable';
import AddSupplierForm from './AddSupplierForm';

const SupplierManagement = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedSupplierDetails, setSelectedSupplierDetails] = useState(null);

    // Fetch all suppliers
    const fetchSuppliers = async () => {
        try {
            const response = await SupplierService.getAllSuppliers();
            setSuppliers(response.data);
        } catch (error) {
            console.error('Error fetching suppliers:', error);
        }
    };

    // Handle supplier search
    const handleSearch = async (searchTerm) => {
        try {
            const response = await SupplierService.searchSupplier(searchTerm);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching suppliers:', error);
        }
    };

    // Handle supplier detail view
    const handleViewDetails = async (supplierName) => {
        try {
            const response = await SupplierService.getSupplierItems(supplierName);
            setSelectedSupplierDetails(response.data);
        } catch (error) {
            console.error('Error fetching supplier details:', error);
        }
    };

    useEffect(() => {
        fetchSuppliers();
    }, []);

    return (
        <div>
            <h1>Supplier Management</h1>
            
            <AddSupplierForm onAdd={fetchSuppliers} />
            
            <SupplierSearch onSearch={handleSearch} />
            
            <SupplierTable suppliers={searchResults.length ? searchResults : suppliers} onViewDetails={handleViewDetails} />

            {selectedSupplierDetails && (
                <div>
                    <h4>Supplier Details</h4>
                    <p>Name: {selectedSupplierDetails.name}</p>
                    <p>Contact Info: {selectedSupplierDetails.contact_info}</p>
                    <h5>Inventory Provided:</h5>
                    <ul>
                        {selectedSupplierDetails.Inventory?.map((item) => (
                            <li key={item.item_id}>
                                {item.product_name} - {item.quantity} units - ${item.price}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SupplierManagement;



// // src/components/SupplierManagement.js
// import React, { useState, useEffect, useContext } from 'react';
// import SupplierService from '../services/SupplierService';
// import SupplierTable from './SupplierTable';
// import AddSupplierForm from './AddSupplierForm';
// import SupplierSearch from './SupplierSearch';
// import { AuthProvider } from '../context/AuthContext';

// const SupplierManagement = () => {
//     const { user } = useContext(AuthProvider);  // Get logged-in user context
//     const [suppliers, setSuppliers] = useState([]);
//     const [searchResults, setSearchResults] = useState([]);

//     // Fetch all suppliers from API
//     const fetchSuppliers = async () => {
//         try {
//             const response = await SupplierService.getAllSuppliers();
//             setSuppliers(response.data);
//         } catch (error) {
//             console.error('Error fetching suppliers:', error);
//         }
//     };

//     // Search suppliers by name
//     const handleSearch = (name) => {
//         const results = suppliers.filter((supplier) =>
//             supplier.name.toLowerCase().includes(name.toLowerCase())
//         );
//         setSearchResults(results);
//     };

//     // Fetch suppliers when the component mounts
//     useEffect(() => {
//         fetchSuppliers();
//     }, []);  // Empty dependency array ensures this runs only once when component mounts

//     // If the user is not a manager, return the access denied message outside of the render flow
//     if (user?.role !== 'manager') {
//         return <div>You do not have access to this page.</div>;
//     }

//     return (
//         <div>
//             <h3>Manage Suppliers</h3>
//             <AddSupplierForm onAddSupplier={fetchSuppliers} />
//             <SupplierSearch onSearch={handleSearch} />
//             <SupplierTable suppliers={searchResults.length ? searchResults : suppliers} />
//         </div>
//     );
// };

// export default SupplierManagement;
