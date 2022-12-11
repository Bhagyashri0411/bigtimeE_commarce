import React from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/LoadingError/Error"
import { useEffect } from "react";
import { ORDER_CREATE_RESET } from "../Redux/Constants/ProductConstants";
import { createOrder } from "../Redux/Action/ProductAction";

const PlaceOrderScreen = ({ history }) => {
    window.scrollTo(0, 0);

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const userLogin = useSelector((state) => state.userLogin)

    const { userInfo } = userLogin

    // Calculate Price
    const addDecimal = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    cart.itemsPrice = addDecimal(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )

    cart.shippingPrice = addDecimal(
        cart.itemsPrice > 100 ? 0 : 100
    )

    cart.taxPrice = addDecimal(
        Number((0.15 * cart.itemsPrice).toFixed(2))
    )

    cart.totalPrice = (
        Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)
    ).toFixed(2)

    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error } = orderCreate

    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
        }
        dispatch({
            type: ORDER_CREATE_RESET
        })
    }, [history, dispatch, success, order])

    const placeOrderHandler = (e) => {
        e.preventDefault();
        dispatch(

            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
    
            })
        )
    };

    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row order-detail">
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-user">
                                    </i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong> Customer</strong>
                                </h5>
                                <p>{userInfo.name}</p>
                                <p>{userInfo.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-truck-moving">
                                    </i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Order Info</strong>
                                </h5>
                                <p>Shipping : {cart.shippingAddress.country}</p>
                                <p>Pay method: {cart.paymentMethod}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-map-marker-alt">
                                    </i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Deliver to </strong>
                                </h5>
                                <p>Address : {cart.shippingAddress.city}, {" "} {cart.shippingAddress.address} , {" "} {cart.shippingAddress.postalCode}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row order-products  border">
                    <div className="col-lg-8">
                        {
                            cart.cartItems.length === 0 ? (
                                <Message variant="alert-info mt-5">Your cart is empty</Message>
                            )
                                :
                                (
                                    <>
                                        {
                                            cart.cartItems.map((item, index) => (
                                                <div className="order-product row" key={index}>
                                                    <div className="col-md-3 col-6">
                                                        <img src={`/images/upload/${item.images}`} alt={item.name} />
                                                    </div>
                                                    <div className="col-md-5 col-6 d-flex align-items-center">
                                                        <Link to="/">
                                                            <h6>
                                                                {item.name}
                                                            </h6>
                                                        </Link>
                                                    </div>
                                                    <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                                                        <h4>QUANTITY</h4>
                                                        <h6>{item.qty}</h6>
                                                    </div>
                                                    <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                                                        <h4>SUBTOTAL</h4>
                                                        <h6>${item.qty * item.price}</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </>
                                )
                        }

                    </div>
                    <div className="col-lg-4 d-flex align-items-end flex-column mt-5 subtotal-order">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td><strong>Products</strong></td>
                                    <td>${cart.itemsPrice}</td>
                                </tr>
                                <tr>
                                    <td><strong>Shipping</strong></td>
                                    <td>${cart.shippingPrice}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tax</strong></td>
                                    <td>${cart.taxPrice}</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td>${cart.totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            cart.cartItems.length === 0 ? null : (

                                <button type="submit" onClick={placeOrderHandler} className="btn tophead blue w-100 rounded-0">
                                    Place Order
                                </button>
                            )
                        }
                        {
                            error && (
                                <div className="col-12 my-3">
                                    <Message variant="alert-danger"> {error}</Message>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaceOrderScreen;