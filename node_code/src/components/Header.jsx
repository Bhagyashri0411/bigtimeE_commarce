import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../Redux/Action/ProductAction";

const Header = () => {
    const dispatch = useDispatch()

    const [keyword, setKeyword] = useState()
    const cart = useSelector((state) => state.cart);

    let history = useHistory()
    const { cartItems } = cart;

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        }
        else {
            history.push("/")
        }
    }
    return (
        <>

            <div className="header">
                <div className="col-md-9 mx-auto">
                    <div className="mobile-header">
                        <div className="col-md-9 mx-auto">
                            <div className="row">
                                <div className="col-6 d-flex align-items-center">
                                    <Link to="/" className="navbar-brand">
                                        {/* <img src="/images/logo.svg" alt="logo" />
                                        
                                        */}
                                        Bigtime E_commarce
                                    </Link>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end">
                                    {
                                        userInfo ? (
                                            <div className="btn-group">
                                                <button type="button" className="name-button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-user">
                                                    </i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/profile">Profile</Link>

                                                    <Link className="dropdown-item" to="#" onClick={logoutHandler}>Logout</Link>
                                                </div>

                                            </div>
                                        )
                                            :
                                            (
                                                <div className="btn-group">
                                                    <button type="button" className="name-button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fas fa-user">
                                                        </i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" to="/login">Login</Link>

                                                        <Link className="dropdown-item" to="/register">Register</Link>
                                                    </div>

                                                </div>
                                            )
                                    }


                                    <Link className="cart-mobile-icon" to="/cart">
                                        <i className="fas fa-shopping-bag"></i>
                                        <span className="badge">{cartItems.length}</span>
                                    </Link>
                                </div>
                                <div className="col-12 d-flex align-items-center">
                                    <form action="" className="input-group" onSubmit={submitHandler}>
                                        <input type="search" className="form-control rounded search" placeholder="Search..." onChange={(e) => setKeyword(e.target.value)} />

                                        <button type="submit" className="search-button tophead skblue">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pc-header">
                        <div className="row">
                            <div className="col-md-2 col-4 d-flex align-items-center">
                                <Link className="navbar-brand" to="/">
                                    {/* <img src="/images/logo.svg" alt="logo" /> */}
                                    Bigtime E_commarce
                                </Link>
                            </div>
                            <div className="col-md-7 col-8 d-flex align-items-center">
                                <form action="" className="input-group" onSubmit={submitHandler}>
                                    <input type="search" className="form-control rounded search" placeholder="Search..." onChange={(e) => setKeyword(e.target.value)} />
                                    <button type="submit" className="search-button tophead skblue">Search</button>
                                </form>
                            </div>
                            <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register border-right-1">
                                <Link className="btn-outline  tophead blue me-3" to="/email">Start A selling</Link>
                                <Link className="cart-mobile-icon" to="/cart">

                                    <i className="fa fa-heart"></i>
                                </Link>
                                <Link className="cart-mobile-icon" to="/cart">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="badge">{cartItems.length}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className="top-header">
                <nav className="navbar navbar-expand-xl w-100 navbar-dark container p-0">
                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar">
                        <div className="offcanvas-body primary-menu active">
                            <ul className="navbar-nav justify-content-between flex-grow-1 gap-4 show">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus">About</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="tv-shows.html" data-bs-toggle="dropdown">
                                        Categories
                                    </a>
                                    <div className="dropdown-menu dropdown-large-menu">
                                        <div className="row">
                                            <div className="col-12 col-xl-4">
                                                <h6 className="large-menu-title">Fashion</h6>
                                                <ul className="list-unstyled">
                                                    <li><a >Casual T-Shirts</a>
                                                    </li>
                                                    <li><a >Formal Shirts</a>
                                                    </li>
                                                    <li><a >Jackets</a>
                                                    </li>
                                                    <li><a >Jeans</a>
                                                    </li>
                                                    <li><a >Dresses</a>
                                                    </li>
                                                    <li><a >Sneakers</a>
                                                    </li>
                                                    <li><a >Belts</a>
                                                    </li>
                                                    <li><a >Sports Shoes</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* end col-3 */}
                                            <div className="col-12 col-xl-4">
                                                <h6 className="large-menu-title">Electronics</h6>
                                                <ul className="list-unstyled">
                                                    <li><a >Mobiles</a>
                                                    </li>
                                                    <li><a >Laptops</a>
                                                    </li>
                                                    <li><a >Macbook</a>
                                                    </li>
                                                    <li><a >Televisions</a>
                                                    </li>
                                                    <li><a >Lighting</a>
                                                    </li>
                                                    <li><a >Smart Watch</a>
                                                    </li>
                                                    <li><a >Galaxy Phones</a>
                                                    </li>
                                                    <li><a >PC Monitors</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* end col-3 */}
                                            <div className="col-12 col-xl-4 d-none d-xl-block">
                                                <div className="pramotion-banner1 d-flex flex-column gap-3">
                                                    <img src="/images/cat.webp" className="img-fluid" alt="Not found" />
                                                    <img src="/images/cat2.png" className="img-fluid" alt="not found" />

                                                </div>
                                            </div>
                                            {/* end col-3 */}
                                        </div>
                                        {/* end row */}
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Women</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Men</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Kid's Section</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Electronic</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contactus">Contact</Link>
                                </li>
                                <li className="col-md-3 d-flex align-items-center justify-content-end Login-Register ">
                                    {
                                        userInfo ? (
                                            <div className="btn-group">
                                                <button className="name-button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-person-circle me-2"></i>
                                                    Hello, {userInfo.name}

                                                </button>
                                                <div className="dropdown-menu namemenu">
                                                    <Link className="dropdown-item" to="/profile">Profile</Link>
                                                    <Link className="dropdown-item" to="#" onClick={logoutHandler}>Logout</Link>
                                                    {/* <div className="dropdown-item"></div> */}
                                                </div>
                                            </div>
                                        )
                                            :
                                            (
                                                <>
                                                    <Link to="/register" className="btn btn-outline-dark">Register</Link>
                                                    <Link to="/login" className="btn btn-outline-dark">Login</Link>

                                                </>
                                            )
                                    }

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;