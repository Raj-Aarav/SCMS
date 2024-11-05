// controllers/OrderController.js
const Order = require('../models/Order');

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};

const createOrder = async (req, res) => {
    const { product, quantity } = req.body;
    try {
        const newOrder = await Order.create({ product, quantity });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
};

const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const order = await Order.findByPk(id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        order.status = status;
        await order.save();
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error });
    }
};

module.exports = { getAllOrders, createOrder, updateOrder };
