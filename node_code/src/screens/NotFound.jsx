import React from "react";
import Header from "./../components/Header"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <Header />
            <div className="container my-5">
                <div className="row justify-content-center align-items-center">
                    <img src="/images/7.png" alt="not-found" style={{ width: "100px", height: "300px", objectFit: "contain" }} />
                    <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
                        <Link to="/" className="text-white text-decoration-none"> Home</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default NotFound;