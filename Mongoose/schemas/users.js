const { Schema, model } = require('mongoose');

const schema = new Schema({
    id: { type: String, required: true },
    name: String,
    cognome: String,
    nascita: { type: Date, default: Date.now },
});

module.exports = model('Users', schema);