const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'delivered', 'canceled'],
        default: 'pending',
    },

    createdAt: {
        type: Date,
        default : Date.now
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;