import React from "react";
import { Link } from "react-router-dom";
import Loading from "../LoadingError/Loading";

const Dashboard = (props) => {
    const { email, load } = props
    return (
        <>
            {
                load ? (<Loading />)
                    :
                    (
                        <>
                            <div className="card ">
                                <div className="card-body bg-light px-3 py-2 fw-bold fs-5 d-flex align-items-center justify-content-between">

                                    <div className="profile-email">
                                        <p className="text-content mt-1 mb-0 py-2 fs-5">{email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-2 g-4 d-flex">
                                <div className="order">
                                    <Link to="/cart">

                                        <div className="card rounded-0">
                                            <div className="card-body p-5">
                                                <div className="text-center">
                                                    <i className="fas fa-shopping-bag fs-5 mb-3"></i>
                                                    <h6 className="fs-5">Cart List</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="order">
                                    <Link to="/" >
                                        <div className="card rounded-0">
                                            <div className="card-body p-5">
                                                <div className="text-center">
                                                    <i className="fa fa-heart fs-5 mb-3"></i>
                                                    <h6 className="fs-5">Wish list</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
            }
        </>
    )
}

export default Dashboard