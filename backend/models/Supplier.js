// models/Supplier.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Supplier = sequelize.define('Supplier', {
    name: { type: DataTypes.STRING, allowNull: false },
    contact: { type: DataTypes.STRING },
    productSupplied: { type: DataTypes.STRING },
}, { timestamps: true });

module.exports = Supplier;
