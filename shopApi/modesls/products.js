import mongoose from 'mongoose'

const ProductSchema = monggose.Schema({
    name: {
        type: String,
        required: [true,'product name must be provided'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'product price must be provided']
    },
    feature: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values : ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    }
})

export const Products = mongoose.model('Products', ProductSchema)
