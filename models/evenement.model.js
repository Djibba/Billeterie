const mongoose = require('mongoose');

const evenementSchema = mongoose.Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    hour: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

module.exports = mongoose.model('evenement', evenementSchema);