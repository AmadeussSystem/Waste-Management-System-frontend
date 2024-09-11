const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Order = require('./models/orderSchema');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;


mongoose.connect('mongodb://localhost:27017/avrutti-Vendors-Collection', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

app.post('/track-orders', async (req, res) => {
    const {customerName, address, status, createdAt} = req.body;

    const newOrder = Order({
        customerName,
        address,
        status,
        createdAt
    });

    try {
        await newOrder.save();
        res.status(201).json({message: "Data created successfully"});
    } catch(error) {
        res.status(500).json({error: 'Failed to create order'});
    }

})

app.get('/track-orders', async (req, res) => {
    try {
        const active_orders = await Order.find();
        res.status(200).json(active_orders);
    } catch(error) {
        res.status(500).json({error: 'Failed to fetch current orders'});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});