const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    transport: {
        type: String,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
    emissions: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);