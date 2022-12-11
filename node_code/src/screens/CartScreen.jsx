import React, { useEffect } from "react";
import Header from "./../components/Header"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removefromcart } from "../Redux/Action/ProductAction";
import Footer from "../components/Footer";

const CartScreen = ({ match, location, history }) => {
    window.scrollTo(0, 0);
    const dispatch = useDispatch();
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;

    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart
    const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2)
const mainTotal = total 

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty]);

    const checkOutHandler = () => {
    //    console.log(cart.shippingAddress, "cart");
    // if (cart.shippingAddress.length == null) {
        history.push("/login?redirect=shipping")
    // }
    // else{
        // history.push("/payment")
    // }
    }
    const removeFromHandle = (id) => {
        dispatch(removefromcart(id))
    }
    return (
        <>
            <Header />

            <div className="col-md-10 mx-auto mt-5">
                <div className="container-fluid ">
                    {
                        cartItems.length === 0 ? (

                            <div className="border px-3 py-2 fw-bold fs-5 d-flex align-items-center justify-content-between">
                                Your Cart is empty
                                <Link className="btn btn-success  px-5 py-3" to="/"> SHOPPING NOW
                                </Link>
                            </div>
                        )
                            :
                            (
                                <>
                                    <div className="border px-3 py-3 fw-bold fs-5 d-flex align-items-center justify-content-between">
                                        Total Cart Products  ({cartItems.length})
                                    </div>
                                </>
                            )
                    }


                </div>
                <div className="row mt-3">

                    <div className="col-12 col-xl-8">
                        {
                            cartItems.map((item) => (
                                <>

                                    <div className="card rounded-0 mb-3 shop-cart" key={item.id}>
                                        <div className="card-body">
                                            <div className="d-flex flex-column flex-lg-row gap-3 align-items-center">
                                                <div className="product-img">
                                                    <img src={`/images/upload/${item.images}`} alt={item.name} />
                                                </div>
                                                <div className="d-none d-lg-block vr" />

                                                <div className="product-info flex-grow-1">
                                                    <h5 className="fw-bold mb-0">{item.name}</h5>
                                                    <div className="product-price d-flex align-items-center gap-2 mt-3">
                                                        <div className="h6 fw-bold">{item.price}</div>
                                                        <div className="h6 fw-light text-muted text-decoration-line-through">$2089</div>
                                                        <div className="h6 fw-bold text-danger">(70% off)</div>
                                                    </div>
                                                    <div className="mt-3 hstack gap-2 cart-qty">
                                                        <select name="" id="" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                            ))}
                                                        </select>
                                                        <select name="" id="" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="d-none d-lg-block vr" />
                                                <div className="d-grid gap-2 align-self-start align-self-lg-center shopremove">
                                                    <button type="button" onClick={() => removeFromHandle(item.product)} className="btn tophead red btn-ecomm"><i className="fa fa-close me-2" />Remove</button>
                                                    <button type="button" className="btn dark btn-ecomm tophead success "><i className="fa fa-heart me-2" />Move to Wishlist</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                            )
                        }
                    </div>
                    {
                        total > 0 &&

                        (
                            <div className="col-lg-4">
                                <div className="row border p-3 ">
                                    <div className="fw-normal fs-4">
                                        Order Summery
                                    </div>

                                    <div className="d-flex justify-content-between border-bottom">
                                        <div className="text-muted py-3">
                                            Product Price
                                        </div>
                                        <div className="text-muted py-3">
                                            ${total}
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <div className="text-muted py-3">
                                            Bag Discount
                                        </div>
                                        <div className="text-success py-3">
                                            --
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <div className="text-muted py-3">
                                            Delivery
                                        </div>
                                        <div className="text-muted py-3">
                                            --
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className=" fw-bold py-3">
                                            Total Amount
                                        </div>
                                        <div className="fw-bold py-3 text-end">
                                            ${mainTotal}
                                        </div>
                                    </div>



                                    <div className="d-flex justify-content-center">
                                        <input className="btn tophead blue w-100 rounded-0" onClick={checkOutHandler} type="button" defaultValue="Chechout" />
                                    </div>



                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
            <Footer />
        </>

    )
}

export default CartScreen; 