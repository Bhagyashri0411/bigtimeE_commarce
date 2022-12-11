import React, { useEffect } from "react";
import Header from "./../components/Header"
import Footer from "./../components/Footer"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/Action/ProductAction";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";

const Register = ({ location, history }) => {
    window.scrollTo(0, 0);

    const [name, setFName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userRegister = useSelector((state) => state.userRegister)
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password))
    }

    return (
        <>
            <Header />
            <div className="mt-5 container d-flex flex-column justify-content-center align-items-center">
                {error && <Message variant="alert-danger"> {error}</Message>}
                {loading && <Loading />}


            </div>
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-xl-5 col-xxl-5 mx-auto">
                            <div className="card rounded-0">
                                <div className="card-body p-4">
                                    <h4 className="mb-0 fw-bold text-center">Registration</h4>
                                    <hr />
                                    <div className="row">
                                        <form action="" className="Login" onSubmit={submitHandler}>
                                            <input type="text" placeholder="First Name" value={name} onChange={(e) => setFName(e.target.value)} />
                                            <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                                            <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                                            <button type="submit">Register</button>

                                        </form>

                                        <div className="col-12 text-center mt-3">
                                            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"} className="mt-3 rounded-0 w-100">Already have an account?

                                                <strong>Sign In</strong>
                                            </Link>

                                        </div>
                                    </div>{/*-end row*/}
                                </div>
                            </div>
                        </div>
                    </div>{/*end row*/}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Register;