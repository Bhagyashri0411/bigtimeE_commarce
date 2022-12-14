import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

},
    {
        timestamps: true
    })

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        default: 0,
        required: true
    },
    numReviews: {
        type: Number,
        default: 0,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    afterdiscount: {
        type: Number,
        default: 0,
        required: true
    },
    countInStock: {
        type: Number,
        default: 0,
        required: true
    },
    color: [],
    size: [],
    age: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    },
    subcat: {
        type: String,
        required: true
    },
    coupon: {
        type: String,
        required: false
    },
    keys: []
},
    {
        timestamps: true
    })

const Product = mongoose.model("Product", ProductSchema)

export default Product