import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Billing = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row border px-3 py-2 fw-bold fs-4">
                    Billing Details
                </div>

                <div className="row mt-3">

                    <div className="col-lg-8 ps-0">
                        <form action>
                            <div className="row tophead">
                                <label>Personal Details</label>
                            </div>
                            <div className="row border mt-3 px-1 pt-3">
                                <div className="col-md-6 mb-3">
                                    <div className="form-floating">
                                        <input className="rounded-0 form-control" type="text" name="name" id="name" placeholder="First Name" />
                                        <label className="text-muted" htmlFor="name">First Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-floating">
                                        <input className="rounded-0 form-control" type="text" name="lname" id="lname" placeholder="Last Name" />
                                        <label className="text-muted" htmlFor="lname">Last Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 ">
                                    <div className="form-floating">
                                        <input className="rounded-0 form-control " type="text" name="email" id="email" placeholder="Email" />
                                        <label className="text-muted" htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 ">
                                    <div className="form-floating">
                                        <input className="rounded-0 form-control" type="tel" name="mobileno" id="mobileno" placeholder="Mobile Number" />
                                        <label className="text-muted" htmlFor="mobileno">Mobile Number</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row tophead mt-3">
                                <label>Shipping Details</label>
                            </div>
                            <div className="row border mt-3 px-1 pt-3">
                                <div className="col-12 mb-3">
                                    <div className="form-floating ">
                                        <input className="rounded-0 form-control" type="text" name="address" id="address" placeholder="Street Address" />
                                        <label className="text-muted" htmlFor="address">Street Address</label>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="form-floating">
                                        <input className="rounded-0 form-control" type="text" name="zipcode" id="zipcode" placeholder="Zip Code" />
                                        <label className="text-muted" htmlFor="zipcode">Zip Code</label>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="form-floating">
                                        <input className="rounded-0 form-control" type="text" name="city" id="city" placeholder="City" />
                                        <label className="text-muted" htmlFor="city">City</label>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="form-floating">
                                        <input className="rounded-0 form-control" type="text" name="country" id="country" placeholder="Country" />
                                        <label className="text-muted" htmlFor="country">Country</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 pe-0">
                        {/* <div class="border"> */}
                        <div className="row border p-3 ">
                            <div className="fw-normal fs-4">
                                Order Summery
                            </div>
                            <div className="d-flex justify-content-between border-bottom">
                                <div className="text-muted py-3">
                                    Bag Total
                                </div>
                                <div className="text-muted py-3">
                                    $599.00
                                </div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom">
                                <div className="text-muted py-3">
                                    Bag Discount
                                </div>
                                <div className="text-success py-3">
                                    - $178.00
                                </div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom">
                                <div className="text-muted py-3">
                                    Delivery
                                </div>
                                <div className="text-muted py-3">
                                    $29.00
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className=" fw-bold py-3">
                                    Total Amount
                                </div>
                                <div className="fw-bold py-3 text-end">
                                    $393.00
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <input className="btn tophead blue w-100 rounded-0" type="button" defaultValue="Continue" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Billing