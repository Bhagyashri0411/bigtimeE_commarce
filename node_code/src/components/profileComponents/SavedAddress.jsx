import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../../Redux/Action/ProductAction";

const SavedAddress = (props) => {

    const { name } = props

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)

    dispatch(createOrder({
        shippingAddress: cart.shippingAddress
    }))
    return (
        <>
            <div className="col-12 ">
                <div className="card rounded-0">
                    <div className="card-header bg-light">
                        <div className="d-flex  py-3 align-items-center">
                            <div className="flex-grow-1">
                                <h5 className="fw-bold mb-0">Saved Address</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-body py-3">
                        <div className="card rounded-0 mb-3">
                            <div className="card-body">
                                <div className="d-flex flex-column flex-xl-row gap-3">
                                    {
                                        cart.shippingAddress.length == null  ?
                                            (
                                                <>
                                                    <div className="address-info form-check flex-grow-1">
                                                        <input className="form-check-input" type="radio" defaultChecked />
                                                        <label className="form-check-label">
                                                            <span className="fw-bold mb-0 h5">{name}</span><br />
                                                            {cart.shippingAddress.address} <br />
                                                            {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}<br />
                                                            Mobile: <span className="text-dark fw-bold">+91-xxxxxxxxxx</span>
                                                        </label>
                                                    </div>
                                                </>
                                            )
                                            :
                                            (
                                                <>
                                                    <div className="card rounded-0">
                                                        <Link className="btn btn-outline-dark btn-ecomm" to="/shipping">
                                                            Add New Address
                                                        </Link>

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
        </>
    )
}



export default SavedAddress