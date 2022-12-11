import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { login } from "../Redux/Action/ProductAction";
import Footer from "../components/Footer";


const Login = ({ location, history }) => {
    window.scrollTo(0, 0);

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userLogin = useSelector((state) => state.userLogin)
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (a) => {
        a.preventDefault();
        dispatch(login(email, password))
    }
    return (
        <>
            <Header />
            <div className="mt-5">
                <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                    {error && <Message variant="alert-danger"> {error}</Message>}
                    {loading && <Loading />}
                </div>
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
                                <div className="card rounded-0">
                                    <div className="card-body p-4">
                                        <h4 className="mb-0 fw-bold text-center">User Login</h4>
                                        <hr />
                                        <p className="mb-2">Join / Sign In using</p>
                                        <div className="social-login mb-4">
                                            <div className="row g-2 ">
                                                <div className="col-xl-6">
                                                    <button type="button d-flex gap-2" className="btn bg-facebook btn-ecomm w-100 text-white"><i className="fa fa-facebook-f ml-2" />Facebook</button>
                                                </div>
                                                <div className="col-xl-6">
                                                    <button type="button" className="btn bg-pinterest btn-ecomm w-100 text-white"><i className="bi bi-google me-2" />Google</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="separator ">
                                            <div className="line" />
                                            <p className="mb-0 fw-bold">Or</p>
                                            <div className="line" />
                                        </div>
                                        <form action="" className="Login" onSubmit={submitHandler}>
                                            <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                                            <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                                            <button type="submit">Login</button>
                                            <p>
                                                <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
                                                    create Account
                                                </Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>{/*end row*/}
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default Login;