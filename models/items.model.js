const  mongoose = require('mongoose');
const schema = mongoose.Schema;

const itemSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: true
    }
});

module.exports = Item = mongoose.model('item', itemSchema);