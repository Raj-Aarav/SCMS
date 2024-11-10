// // // src/components/ManageInventory.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ManageInventory = () => {
// //     const [inventory, setInventory] = useState([]);

// //     useEffect(() => {
// //         fetchInventory();
// //     }, []);

// //     const fetchInventory = async () => {
// //         try {
// //             const response = await axios.get('http://localhost:5000/api/inventory');
// //             setInventory(response.data);
// //         } catch (error) {
// //             console.error('Error fetching inventory:', error);
// //         }
// //     };

// //     const handleUpdateStock = async (id, newStock) => {
// //         try {
// //             await axios.put(`http://localhost:5000/api/inventory/${id}`, { newStock });
// //             fetchInventory();
// //         } catch (error) {
// //             console.error('Error updating inventory:', error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <h3>Inventory Management</h3>
// //             <table>
// //                 <thead>
// //                     <tr>
// //                         <th>Item ID</th>
// //                         <th>Item</th>
// //                         <th>Stock</th>
// //                         <th>Low Stock Threshold</th>
// //                         <th>Actions</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {inventory.map((item) => (
// //                         <tr key={item.id}>
// //                             <td>{item.id}</td>
// //                             <td>{item.item}</td>
// //                             <td>{item.stock}</td>
// //                             <td>{item.lowStockThreshold}</td>
// //                             <td>
// //                                 <button onClick={() => handleUpdateStock(item.id, item.stock - 1)}>Decrease Stock</button>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default ManageInventory;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ManageInventory = () => {
//     const [inventory, setInventory] = useState([]);

//     useEffect(() => {
//         fetchInventory();
//     }, []);

//     const fetchInventory = async () => {
//         try {
//             const response = await axios.get('/api/manager/inventory');
//             setInventory(response.data);
//         } catch (error) {
//             console.error('Error fetching inventory:', error);
//         }
//     };

//     const handleUpdateStock = async (itemId, quantity) => {
//         try {
//             await axios.put('/api/manager/inventory/update', { itemId, quantity });
//             fetchInventory();
//         } catch (error) {
//             console.error('Error updating stock:', error);
//         }
//     };

//     return (
//         <div>
//             <h3>Inventory Management</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Item</th>
//                         <th>Quantity</th>
//                         <th>Supplier</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {inventory.map((item) => (
//                         <tr key={item.item_id}>
//                             <td>{item.product_name}</td>
//                             <td>{item.quantity}</td>
//                             <td>{item.supplier.name}</td>
//                             <td>
//                                 <button onClick={() => handleUpdateStock(item.item_id, 10)}>Add Stock</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ManageInventory;

// import React, { useState, useEffect } from 'react';
// import InventoryService from '../services/InventoryService';

// const ManageInventory = () => {
//     const [inventory, setInventory] = useState([]);
//     const [newProduct, setNewProduct] = useState({ product_name: '', quantity: 0, supplier_id: '' });

//     useEffect(() => {
//         fetchInventory();
//     }, []);

//     const fetchInventory = async () => {
//         try {
//             const response = await InventoryService.getInventory();
//             setInventory(response.data);
//         } catch (error) {
//             console.error('Error fetching inventory:', error);
//         }
//     };

//     const handleAddProduct = async (e) => {
//         e.preventDefault();
//         try {
//             await InventoryService.addProduct(newProduct);
//             fetchInventory();
//             setNewProduct({ product_name: '', quantity: 0, supplier_id: '' });
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };

//     const handleUpdateStock = async (itemId, quantity) => {
//         try {
//             await InventoryService.updateStock(itemId, quantity);
//             fetchInventory();
//         } catch (error) {
//             console.error('Error updating stock:', error);
//         }
//     };

//     return (
//         <div>
//             <h3>Inventory Management</h3>
            
//             {/* Product Addition Form */}
//             <form onSubmit={handleAddProduct}>
//                 <input
//                     type="text"
//                     placeholder="Product Name"
//                     value={newProduct.product_name}
//                     onChange={(e) => setNewProduct({ ...newProduct, product_name: e.target.value })}
//                     required
//                 />
//                 <input
//                     type="number"
//                     placeholder="Quantity"
//                     value={newProduct.quantity}
//                     onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })}
//                     required
//                 />
//                 <input
//                     type="number"
//                     placeholder="Supplier ID"
//                     value={newProduct.supplier_id}
//                     onChange={(e) => setNewProduct({ ...newProduct, supplier_id: parseInt(e.target.value) })}
//                     required
//                 />
//                 <button type="submit">Add Product</button>
//             </form>

//             {/* Inventory Table */}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Item</th>
//                         <th>Quantity</th>
//                         <th>Supplier</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {inventory.map((item) => (
//                         <tr key={item.item_id}>
//                             <td>{item.product_name}</td>
//                             <td>{item.quantity}</td>
//                             <td>{item.supplier ? item.supplier.name : 'N/A'}</td>
//                             <td>
//                                 <button onClick={() => handleUpdateStock(item.item_id, 10)}>Add Stock</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ManageInventory;


// // src/components/ManageInventory.js
// import React, { useState } from 'react';
// import InventoryService from '../services/InventoryService';
// import InventoryTable from './InventoryTable';
// import AddProductForm from './AddProductForm';
// import InventorySearch from './InventorySearch';

// const ManageInventory = () => {
//     const [inventory, setInventory] = useState([]);
//     const [searchResults, setSearchResults] = useState([]);

//     // Fetch inventory items
//     const fetchInventory = async () => {
//         try {
//             const response = await InventoryService.getInventory();
//             setInventory(response.data);
//         } catch (error) {
//             console.error('Error fetching inventory:', error);
//         }
//     };

//     // Handle search
//     const handleSearch = async (name) => {
//         try {
//             const response = await InventoryService.searchProduct(name);
//             setSearchResults(response.data);
//         } catch (error) {
//             console.error('Error searching products:', error);
//         }
//     };

//     return (
//         <div>
//             <h3>Inventory Management</h3>
//             <button onClick={fetchInventory}>Fetch Inventory</button>

//             {/* Search inventory */}
//             <InventorySearch onSearch={handleSearch} />

//             {/* Add product form */}
//             <AddProductForm onAdd={() => fetchInventory()} />

//             {/* Inventory table */}
//             <InventoryTable inventory={searchResults.length > 0 ? searchResults : inventory} />
//         </div>

        
//     );
// };

// export default ManageInventory;

// // src/pages/InventoryPage.js
// import React, { useState, useEffect } from 'react';
// import InventoryService from '../services/InventoryService';
// import AddProductForm from '../components/AddProductForm';
// import InventorySearch from '../components/InventorySearch';
// import InventoryTable from '../components/InventoryTable';

// const InventoryPage = () => {
//   const [inventoryItems, setInventoryItems] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);

//   // Fetch all inventory items when the page loads
//   useEffect(() => {
//     const fetchInventory = async () => {
//       try {
//         const response = await InventoryService.getInventory();
//         setInventoryItems(response.data);
//       } catch (error) {
//         console.error('Error fetching inventory:', error);
//       }
//     };
//     fetchInventory();
//   }, []);

//   // Handle adding a product to the inventory
//   const handleAddProduct = (newProduct) => {
//     setInventoryItems([...inventoryItems, newProduct]);
//   };

//   // Handle search results update
//   const handleSearchResults = (results) => {
//     setSearchResults(results);
//   };

//   return (
//     <div>
//       <h1>Inventory Management</h1>
      
//       {/* Add Product Form */}
//       <AddProductForm onAddProduct={handleAddProduct} />

//       {/* Inventory Search */}
//       <InventorySearch onSearchResults={handleSearchResults} />

//       {/* Inventory Table */}
//       <InventoryTable inventoryItems={searchResults.length ? searchResults : inventoryItems} />
//     </div>
//   );
// };

// export default InventoryPage;

// src/pages/InventoryPage.js
import React, { useState } from 'react';
import InventoryService from '../services/InventoryService';
import AddProductForm from '../components/AddProductForm';
import InventorySearch from '../components/InventorySearch';
import InventoryTable from '../components/InventoryTable';

const InventoryPage = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Handle adding a product to the inventory
  const handleAddProduct = (newProduct) => {
    setInventoryItems([...inventoryItems, newProduct]);
  };

  // Handle search results update
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  // Fetch inventory data when the button is clicked
  const fetchInventory = async () => {
    setIsLoading(true);
    try {
      const response = await InventoryService.getInventory();
      setInventoryItems(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      
      {/* Add Product Form */}
      <AddProductForm onAddProduct={handleAddProduct} />

      {/* Inventory Search */}
      <InventorySearch onSearchResults={handleSearchResults} />

      {/* Fetch Inventory Button */}
      <button onClick={fetchInventory} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Inventory'}
      </button>

      {/* Inventory Table */}
      <InventoryTable inventoryItems={searchResults.length ? searchResults : inventoryItems} />
    </div>
  );
};

export default InventoryPage;
