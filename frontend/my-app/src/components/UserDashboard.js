// src/pages/UserDashboard.js
import React, { useState } from 'react';
import InventoryService from '../services/InventoryService';
import UserInventoryView from '../components/UserInventoryView';
import UserInventorySearch from '../components/UserInventorySearch';
import PlaceOrderForm from '../components/PlaceOrderForm';

const UserDashboard = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch inventory items when button is clicked
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

  // Handle search results
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  // Reset selected product after order is placed
  const handleOrderPlaced = () => {
    setSelectedProduct(null);
    fetchInventory(); // Refresh inventory after order is placed
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      
      {/* Search Bar */}
      <UserInventorySearch onSearchResults={handleSearchResults} />

      {/* Fetch Inventory Button */}
      <button onClick={fetchInventory} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Inventory'}
      </button>

      {/* Inventory Table */}
      <UserInventoryView
        inventoryItems={searchResults.length ? searchResults : inventoryItems}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      {/* Place Order Form */}
      <PlaceOrderForm selectedProduct={selectedProduct} onOrderPlaced={handleOrderPlaced} />
    </div>
  );
};

export default UserDashboard;
