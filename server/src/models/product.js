const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: [0, 'Price must be 0 or above']
    },
    stock: {
        type: Number,
        min: [0, 'stock must be 0 or above']
    },

    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store'
    },

    image: {
        type: String,
        default: 'https://source.unsplash.com/collection/1418885'
    }
})

const Product = mongoose.model('Product', productSchema);



module.exports = Product;