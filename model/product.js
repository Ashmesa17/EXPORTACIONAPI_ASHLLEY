const {model, Schema} = require('mongoose');

const ProductSchema = new Schema({
    Nameproduct:{
        type: String,
        required:[true, 'The name is required'],
    },
    Price: {
        type: Number,
        required:[true, 'The price is required'],
        minlength: [4, 'Min 4 characters']
    },
    Weight: {
        type: Number,
        required:[true, 'The weight is required'],

    }
})

module.exports=model('Product', ProductSchema, 'Product')