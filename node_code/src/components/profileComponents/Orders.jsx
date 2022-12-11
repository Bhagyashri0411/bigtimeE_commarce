import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const Order = (props) => {
    const { loading, error, orders } = props

    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column">
                {
                    loading ? (<Loading />) :
                        error ? (<Message variant="alert-danger">{error}</Message>) :
                            (
                                <>
                                    {
                                        orders.length === 0 ? (
                                            <div className="col-12 alert alert-info text-center mt-3">
                                                No orders

                                                <Link className="btn btn-success mx-2 px-3 py-2" to="/">
                                                    Start Shopping
                                                </Link>
                                            </div>
                                        )
                                            :
                                            (
                                                <>
                                                    <div className="table-responsive">
                                                        <div className="card rounded-0 mb-3 bg-light">
                                                            <div className="card-body">
                                                                <div className="d-flex flex-column flex-xl-row gap-3 align-items-center">
                                                                    <div className>
                                                                        <h5 className="mb-0 fw-bold"> Orders List :</h5>
                                                                    </div>
                                                                    <div className="order-search flex-grow-1">
                                                                        <form action className="input-group">
                                                                            <input type="search" className="form-control rounded search" placeholder="Search..."  />
                                                                            <button type="submit" className="search-button tophead blue">Filter</button></form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {
                                                            orders.map((order) => (
                                                                <>
                                                                <div key={order.id}></div>
                                                                    {
                                                                        order.orderItems.map((itm) => (
                                                                            <div className="card rounded-0 mb-3 shop-cart" key={itm.id}>
                                                                                <div className="card-body">
                                                                                    <div className="d-flex flex-column flex-xl-row gap-3 align-items-center">

                                                                                        <div className="product-img">
                                                                                            <img src={itm.image} alt={itm.name}/>
                                                                                        </div>
                                                                                        <div className="d-none d-xl-block vr" />

                                                                                        <div className="product-info flex-grow-1">
                                                                                            <h5 className="fw-bold mb-1">{itm.name}</h5>
                                                                                            <div className="mt-3 hstack gap-2 mb-3">
                                                                                                <button type="button" className="btn btn-sm border rounded-0">Size : XXL</button>
                                                                                                <button type="button" className="btn btn-sm border rounded-0">Qty : {itm.qty}</button>
                                                                                            </div>
                                                                                            <p>
                                                                                                Date :
                                                                                                {order.isPaid ? moment(order.paidAt).calendar() : moment(order.createdAt).calendar()}

                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="d-none d-xl-block vr" />
                                                                                        <div className="d-grid align-self-start align-self-xl-center shopremove">
                                                                                            <Link className="btn tophead success" to={`/products/${itm.product}`}>  View Details</Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        )
                                                                        )
                                                                    }
                                                                </>
                                                            ))
                                                        }
                                                    </div>
                                                </>
                                            )
                                    }
                                </>
                            )
                }

            </div>


        </>

    )
}

export default Order;
