// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

router.get('/', OrderController.getAllOrders);
router.post('/', OrderController.createOrder);
router.put('/:id', OrderController.updateOrder);

module.exports = router;
