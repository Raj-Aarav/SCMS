// src/components/UserInventoryView.js
import React from 'react';

const UserInventoryView = ({ inventoryItems, onSelectProduct }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity Available</th>
          <th>Price</th>
          <th>Supplier Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {inventoryItems.length === 0 ? (
          <tr>
            <td colSpan="5">No products found</td>
          </tr>
        ) : (
          inventoryItems.map((item) => (
            <tr key={item.item_id}>
              <td>{item.product_name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.supplier?.name || 'No supplier'}</td>
              <td>
                <button onClick={() => onSelectProduct(item)}>Order</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default UserInventoryView;
