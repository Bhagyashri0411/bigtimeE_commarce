import express from "express";
import asyncHandler from "express-async-handler";
import Product from "./../Models/ProductModel.js";
import protect from "../Middleware/AuthMiddlewear.js";
import upload from "../Middleware/upload.js"

const productRoute = express.Router();

productRoute.get("/", asyncHandler(
    async (req, res) => {
        // const pageSize = 6
        // const page = Number(req.query.pageNumber) || 1
        // const keyword = req.query.keyword ? {
        //     name: {
        //         $regex: req.query.keyword,
        //         $options: "i"
        //     },
        // }
        //     :
        //     {}
        //     const count = await Product.countDocuments({ ...keyword });
        //     const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1)).sort({ _id: -1 });

        // res.json({ products, page, pages: Math.ceil(count / pageSize) });
        const products = await Product.find();
        res.status(200).json({
            products,
            // success: true
        })
    }
));

//GET SINGLE PRODUCT
productRoute.get("/:id", asyncHandler(
    async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {

            res.json(product)
        }
        else {
            res.status(404);
            throw new Error()
        }
    }
))

//Product review
productRoute.post("/:id/review", protect, asyncHandler(
    async (req, res) => {
        const { comment, rating } = req.body
        const product = await Product.findById(req.params.id);
        if (product) {
            const alreadyreview = product.reviews.find((r) => r.user.toString() === req.user._id.toString())

            if (alreadyreview) {
                res.status(400);
                throw new Error("Product already Reviewed")
            }
            const review = {
                name: req.user.name,
                rating: Number(rating),
                comment,
                user: req.user._id
            }

            product.reviews.push(review)
            product.numReviews = product.reviews.length
            product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length
            await product.save()
            res.status(201).json({ message: "Reviewed Added" })
        } else {
            res.status(404);
            throw new Error()
        }
    }
))

// productRoute.post("/addProduct", asyncHandler(async (req, res) => {
//     const result = await cloudinary.uploader.upload(req.body.images, {
//         folder: "bhagyashri",
//     })

//     const { name, title, description, price, afterdiscount, countInStock,
//         rating, numReviews, color, size, cat, subcat, coupon, age, keys } = req.body;
//     const productExist = await Product.findOne({ name })
//     if (productExist) {
//         res.status(400);
//         throw new Error("This Product is already Exist")
//     }

//     const product = await Product.create({
//         name, title, images:{
//             public_id: result.public_id,
//                 url: result.secure_url
//         }, description, price, afterdiscount, countInStock,
//         rating, numReviews, color, size,
//         cat, subcat, coupon, age,
//         keys
//     })

//     if (product) {
//         res.status(201).json({
//             _id: product._id,
//             name: product.name,
//             title: product.title,
//             image: result.images,
//             description: product.description,
//             price: product.price,
//             afterdiscount: product.afterdiscount,
//             countInStock: product.countInStock,
//             rating: product.rating,
//             numReviews: product.numReviews,
//             color: product.color,
//             size: product.size,
//             cat: product.cat,
//             subcat: product.subcat,
//             coupon: product.coupon,
//             age: product.age,
//             keys: product.keys
//         })
//     }
//     else {
//         res.status(400)
//         throw new Error("Invalid Information")
//     }
// }))

productRoute.post("/NewaddProduct", upload.single("images"),asyncHandler(async (req, res) => {
    
    const product = new Product({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        afterdiscount: req.body.afterdiscount,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        color: req.body.color,
        size: req.body.size,
        cat: req.body.cat,
        subcat: req.body.subcat,
        coupon: req.body.coupon,
        age: req.body.age,
        keys: req.body.keys,
    })
   if (req.file) {
        product.images = req.file.originalname
   }
    product
        .save()
        .then(
            res.status(200).json({
                message: "Image uploaded",
            })
        )
        .catch((e) => {
            console.log('this is error:', e);
        })
}))

export default productRoute;