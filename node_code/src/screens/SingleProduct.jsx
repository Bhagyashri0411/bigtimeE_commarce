import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer"
// import Rating from "./../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { CreateproductReviews, listProductDetails } from "../Redux/Action/ProductAction";
import Loading from "../components/LoadingError/Loading"
import { PRODUCT_REVIES_CREATE_RESET } from "../Redux/Constants/ProductConstants";
import moment from "moment";

const SingleProduct = ({ history, match }) => {
    const [qty, setQyt] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")

    const productId = match.params.id;
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails;

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const persent = product.afterdiscount / product.price * 100;
    const desCount = 100 - persent;

    const productReviews = useSelector((state) => state.productReviews)
    const { loading: loadingCreateReview, error: errorCreateReview, success: successCreateReview } = productReviews;

    console.log(product, "dat");


    useEffect(() => {
        if (successCreateReview) {
            alert("Reviews Submitted")
            setRating(0)
            setComment("")
            dispatch({ type: PRODUCT_REVIES_CREATE_RESET })
        }
        dispatch(listProductDetails(productId));

    }, [dispatch, productId, successCreateReview]);

    const AddToCartHandle = (e) => {
        e.preventDefault()
        history.push(`/cart/${productId}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(CreateproductReviews(productId, {
            rating, comment
        }))
    }
    return (
        <>
            <Header />
            <div className=" single-product">
                {

                    loading ? (
                        <div className="mb-5">
                            <Loading />
                        </div>
                    )
                        : error ? (<Message varient={'alert-danger'}>{error}</Message>) : (
                            <>
                                <div className="col-md-9 mx-auto">
                                    <div className="col-12">
                                        <div className="product-images">
                                            <div className="product-zoom-images">
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-md-7">
                                                            <div className="images">

                                                                <img src={`/images/upload/${product.images}`} alt={product.name} />
                                                                <img src={`/images/upload/${product.images}`} alt={product.name} />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-5">
                                                            <div className="product-info">
                                                                <h4 className="product-title fw-bold mb-1">{product.name}</h4>
                                                                <p className="mb-0">{product.title}</p>
                                                                <div className="product-rating">
                                                                    <div className="hstack gap-2 border p-1 mt-3 width-content">
                                                                        <div className="rating"><span >{product.rating}</span><i className="fas fa-star" /></div>
                                                                        <div className="vr" />
                                                                        <div>{product.numReviews} Ratings</div>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                            </div>
                                                            <div className="product-price d-flex align-items-center gap-3">
                                                                <div className="h4 fw-bold">${product.afterdiscount}</div>
                                                                <div className="h5 fw-light text-muted text-decoration-line-through">${product.price}</div>
                                                                <div className="h4 fw-bold text-danger">{desCount.toFixed()}%</div>
                                                            </div>
                                                            <p className="fw-bold mb-2 mt-1 text-success">inclusive of all taxes</p>

                                                            <h6 className="mb-3 fw-bold">Select size</h6>
                                                            {/* <div  className="add-tosize"> XXL <span >1 left</span></div> */}
                                                            <div className="d-flex align-items-center gap-2 flex-wrap size-chart ">
                                                                {
                                                                    product.size === null ? (
                                                                        <>
                                                                            <p className="fw-bold mb-2 mt-1 text-danger">  No available</p>
                                                                        </>
                                                                    )
                                                                        :
                                                                        (
                                                                            <>
                                                                                {[(product.size)].map((available) => (
                                                                                    <>
                                                                                        <div className="position-relative mb-4">

                                                                                            <button type="button" >{available}</button><span >1 left</span>
                                                                                        </div>
                                                                                    </>
                                                                                ))}
                                                                            </>
                                                                        )
                                                                }


                                                            </div>

                                                            <div className="cart-buttons mt-1 ">
                                                                {product.countInStock > 0 ? (
                                                                    <>
                                                                        <div className="flex-box d-flex gap-4 mb-4 justify-content-between align-items-center">
                                                                            <h6>Quantity</h6>
                                                                            <select name="" id="" value={qty} onChange={(e) => setQyt(e.target.value)} className="w-100 p-2 rounded-3">
                                                                                {[...Array(product.countInStock).keys()].map((x) => (
                                                                                    <>

                                                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                                                    </>
                                                                                ))}
                                                                            </select>

                                                                        </div>
                                                                        <div className="flex-box d-flex gap-3 justify-content-between align-items-center">
                                                                            <div className="btn btn-lg btn-dark btn-ecomm px-5 py-2 w-100" onClick={AddToCartHandle}><i className="bi bi-basket2 me-2" />Add to Bag</div>
                                                                            <Link className="btn btn-lg btn-outline-dark btn-ecomm px-5 py-2 w-100"><i className="bi bi-suit-heart me-2" /> Wishlist</Link>
                                                                        </div>
                                                                    </>
                                                                ) :

                                                                    <Link className="btn btn-lg btn-outline-dark btn-ecomm px-5 py-2 w-100"><i className="bi bi-suit-heart me-2" /> Wishlist</Link>
                                                                }


                                                            </div>
                                                            <hr />
                                                            <h6 className="fw-bold mb-3">Product Details</h6>
                                                            <div className="mb-1">{product.description}</div>
                                                            <hr />

                                                            <h6 className="fw-bolder mb-2">Customer Reviews ({product.numReviews})</h6>
                                                            <div className="reviews-wrapper">
                                                                {
                                                                    product.reviews.length === 0 && (
                                                                        <Message variant={"alert-info mt-3"}>No Reviews</Message>
                                                                    )
                                                                }
                                                                {
                                                                    product.reviews.map((review) => (
                                                                        <>
                                                                            <div className="d-flex flex-column flex-lg-row" key={review._id}>
                                                                                <div className="flex-grow-1">
                                                                                    <p className="mb-0">{review.comment}</p>
                                                                                    <div className="d-flex flex-column flex-sm-row gap-3 mt-1">
                                                                                        <div className="hstack flex-grow-1 gap-3">
                                                                                            <p className="mb-0 fw-bold">{review.name}</p>
                                                                                            <div className="vr" />
                                                                                            <div className="date-posted">{moment(review.createdAt).calendar()}</div>
                                                                                            <div className="vr" />
                                                                                            <div className={review.rating === 2 ? "box-review bg-danger rounded-0" : review.rating === 3 ? "bg-warning box-review rounded-0" : review.rating === 4 ? "box-review bg-success rounded-0" : "box-review bg-success rounded-0"} >{review.rating}<i className="fas fa-star icon" /></div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <hr />
                                                                        </>
                                                                    ))
                                                                }
                                                                {/* <div className="text-center">
                                                                    <Link className="btn  btn-dark"> View All Reviws<i className="bi bi-arrow-right ms-2" /></Link>

                                                                </div> */}
                                                            </div>

                                                        </div>
                                                        <div className="row my-5">

                                                            <h6>WRITE A CUSTOMER REVIEW</h6>
                                                            <div className="my-4">
                                                                {
                                                                    loadingCreateReview && <Loading />
                                                                }
                                                                {
                                                                    errorCreateReview && (<Message variant="alert-danger">{errorCreateReview}</Message>)
                                                                }
                                                            </div>
                                                            {
                                                                userInfo ? (

                                                                    <form onSubmit={submitHandler}>
                                                                        <div className="my-4">
                                                                            <strong>Rating</strong>
                                                                            <select value={rating} onChange={(e) => setRating(e.target.value)} className="col-12 bg-light p-3 mt-2 border-0 rounded">
                                                                                <option value="">Select....</option>
                                                                                <option value="1">1 - Poor</option>
                                                                                <option value="2">2 - Fair</option>
                                                                                <option value="3">3 - Good</option>
                                                                                <option value="4">4 - Very good</option>
                                                                                <option value="5">5 - Excellent</option>

                                                                            </select>
                                                                        </div>
                                                                        <div className="my-4">
                                                                            <strong>Comment</strong>
                                                                            <textarea row="3" className="col-12 bg-light p-3 mt-2 border-0 rounded" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                                                        </div>
                                                                        <div className="my-3">
                                                                            <button className="col-12 bg-black p-3 text-white border-0 rounded" disabled={loadingCreateReview}> SUBMIT</button>
                                                                        </div>
                                                                    </form>
                                                                )
                                                                    :
                                                                    (
                                                                        <>
                                                                            <div className="my-3">
                                                                                <Message variant={"alert-warning"}>

                                                                                    Please{" "}
                                                                                    <Link to="/login">
                                                                                        " <strong>Login</strong>"
                                                                                    </Link>{" "}
                                                                                    to write a review{" "}
                                                                                </Message>

                                                                            </div>
                                                                        </>
                                                                    )
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                }



            </div>
            <Footer />
        </>
    )
}

export default SingleProduct;