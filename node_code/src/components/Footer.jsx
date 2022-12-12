import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-white text-muted mt-5">
            {/* Section: Links  */}
            <section className style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
                <div className="col-md-10 mx-auto pt-5">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <Link className="navbar-brand" to="/">
                                {/* <img src="/images/logo.svg" alt="logo" /> */}
                                Bigtime E_commarce
                            </Link>
                            <h6 className="pt-4 fw-bold mb-4" style={{ color: 'black' }}>About Us</h6>
                            <p className="hjbjb">
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't look
                                even slightly believable.
                                Read More
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                            <div className="box">
                                <h6 className=" fw-bold mb-4" style={{ color: 'black' }}>
                                    Explore
                                </h6>
                                <p className="mb-2">
                                    <a className="text-reset"> <i className="fas fa-angle-right" /> Fashion</a>
                                </p>
                                <p className="mb-2">
                                    <a className="text-reset"> <i className="fas fa-angle-right" /> Women</a>

                                </p>
                                <p className="mb-2">
                                    <a className="text-reset"> <i className="fas fa-angle-right" /> Furniture</a>

                                </p>
                                <p className="mb-2">
                                    <a className="text-reset"> <i className="fas fa-angle-right" /> Shoes</a>

                                </p>
                                <p className="mb-2">
                                    <a className="text-reset"> <i className="fas fa-angle-right" /> Topwear</a>

                                </p>
                                <p className="mb-2">
                                    <a className="text-reset"> <i className="fas fa-angle-right" /> Brands</a>

                                </p>
                                <p className="mb-2">
                                    <a className="text-reset"> <i className="fas fa-angle-right" /> Kids</a>

                                </p>
                            </div>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="pt-4 fw-bold mb-4" style={{ color: 'black' }}>
                                Department
                            </h6>
                            <p className="mb-2">
                                <a href="#!" className="text-reset">male</a>
                            </p>
                            <p className="mb-2">
                                <a href="#!" className="text-reset">Women</a>
                            </p>
                            <p className="mb-2">
                                <a href="#!" className="text-reset">Boys</a>
                            </p>
                            <p className="mb-2">
                                <a href="#!" className="text-reset">Girls</a>
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="pt-4 fw-bold mb-4" style={{ color: 'black' }}>
                                Company
                            </h6>
                            <p className="mb-2">
                                <a href="#!" className="text-reset">About Us</a>
                            </p>
                            <p className="mb-2">
                                <a href="#!" className="text-reset">Contact Us</a>
                            </p>
                            <p className="mb-2">
                                <a href="#!" className="text-reset">FAQ</a>
                            </p>
                            <p className="mb-2">
                                <a href="#!" className="text-reset">Privacy</a>
                            </p>
                            <p className="mb-2">
                                <a href="#!" className="text-reset">Terms</a>
                            </p>
                            <p className="mb-2">
                                <a href="#!" className="text-reset">Complaints</a>
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="pt-4 fw-bold mb-4" style={{ color: 'black', paddingBottom: '0px' }}>Follow Us
                            </h6>
                            <div style={{ display: 'flex' }}>
                                <div className="icon">
                                    <li className="fa fa-facebook-f" style={{}} />
                                </div>
                                <div className="icon">
                                    <li className="fa fa-twitter" />
                                </div>
                                <div className="icon">
                                    <li className="fa fa-instagram" />
                                </div>
                                <div className="icon">
                                    <li className="fa fa-youtube-play" />
                                </div>
                                <div className="icon">
                                    <li className="fa fa-linkedin" />
                                </div>
                            </div>
                            <h6 className="pt-3 pb-0">Support</h6>
                            <p className="tital-text">support@example.com</p>
                            <h6 className="pt-3 pb-0">Toll Free</h6>
                            <p className="tital-text">1800- 8xx 2xx</p>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
        </footer>
    )
}

export default Footer;