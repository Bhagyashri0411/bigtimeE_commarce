import React from "react";

const LeastedProducts = () => {
    return (
        <>
            <section className="product-tab-section section-padding py-5 bg-light">
                <div className="container">
                    <div className="text-center pb-3">
                        <h3 className="mb-0 h3 fw-normal">Latest Products</h3>
                        <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p>
                    </div>
                    <div className="row">
                        <div className="buttons d-flex justify-content-center pt-2 pb-3">
                            <button className="btn btn-outline-dark me-2 nav-btn" > New
                                Arrival</button>
                            <button className="btn btn-outline-dark me-2 nav-btn" > Best Seller</button>

                            <button className="btn btn-outline-dark me-2 nav-btn" > Trending</button>

                            <button className="btn btn-outline-dark me-2 nav-btn" >  Special Offer</button>


                        </div>
                    </div>
                    <hr />
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4  g-4 tabular-product">
                       
                        <div className="col">
                            <div className="card">
                                {/* <div className="ribban">New Season</div> */}
                            <div></div>
                                <div className="position-relative overflow-hidden">
                                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                        <a href="javascript:;"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                        <a href="javascript:;"><i className="fa fa-shopping-basket" /></a>
                                        <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal"><i className="fa fa-search-plus" /></a>
                                    </div>
                                    <a href="product-details.html">
                                        <img src="./images/newproduct.webp" className="card-img-top" alt="..." />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="product-info text-center">
                                        <h6 className="mb-2 fw-bold ">Product Name</h6>
                                        <div className="rating mb-1 h6">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p className="mb-0 h6 fw-bold product-price">$49</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default LeastedProducts