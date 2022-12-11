import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const AboutUs = () => {
    return (
        <>
            <Header />

            <div className="container mx-auto">
                <div className="row mt-5">
                    <div className="col-12 col-xl-6">
                        <h3 className="mb-3 h3 fw-bold heading2">Our Story</h3>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                            Lorem Ipsum has been the industry's standard dummy text ever since the<br />
                            1500s, when an unknown printer took a galley of type and scrambled it to make <br />
                            a type specimen book. It has survived not only five centuries, but also the leap<br />
                            into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                            <br />in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            <br /> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,<br />
                            looked up one of the more obscure.
                        </p>
                        <p >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots<br />
                            in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <br />
                            Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
                    </div>
                    <div className="col-12 col-xl-6">
                        <img src="./images/th.jpg" className="w-100" alt="No Result" />

                    </div>
                    <div className="separator py-4 section-padding">
                        <div className="line" />
                        <h3 className="mb-0 h3 fw-bold">Why Choose Us</h3>
                        <div className="line" />
                    </div>
                    <div className="row row-cols-1 row-cols-xl-3 g-4 why-choose mb-5">
                        <div className="col d-flex">
                            <div className="card rounded-0 shadow-none w-100">
                                <div className="card-body">
                                    <img src="./images/delivery.webp" alt="not Found" />
                                    <h5 className="my-3 fw-bold">Free Shipping</h5>
                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industr in some form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex">
                            <div className="card rounded-0 shadow-none w-100">
                                <div className="card-body">
                                    <img src="./images/money-bag.webp" alt="not Fpund" />
                                    <h5 className="my-3 fw-bold">100% Back Gaurantee</h5>
                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industr in some form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex">
                            <div className="card rounded-0 shadow-none w-100">
                                <div className="card-body">
                                    <img src="./images/support.webp" alt="Not Found" />
                                    <h5 className="my-3 fw-bold">Online Support 24/7</h5>
                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industr in some form.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs