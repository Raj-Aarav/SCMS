// src/components/UserInventorySearch.js
import React, { useState } from 'react';
import InventoryService from '../services/InventoryService';

const UserInventorySearch = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await InventoryService.searchProduct(searchTerm);
      onSearchResults(response.data);
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default UserInventorySearch;
