import React from 'react';

const CalltoActionSection = () => {
    return (
        <>
        <section className="py-5 section-padding">
        <div className="container">
          <div className="text-center pb-3">
            <h3 className="mb-0 h3 fw-bold">What We Offer!</h3>
            <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 g-4">
            <div className="col d-flex">
              <div className="card depth border-0 rounded-0 border-bottom border-primary border-3 w-100">
                <div className="card-body text-center">
                  <div className="h1 fw-bold my-2 text-primary">
                  <i className="fa fa-truck" aria-hidden="true"></i>
                  </div>
                  <h5 className="fw-bold">Free Delivery</h5>
                  <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                </div>
              </div>
            </div>
            <div className="col d-flex">
              <div className="card depth border-0 rounded-0 border-bottom border-danger border-3 w-100">
                <div className="card-body text-center">
                  <div className="h1 fw-bold my-2 text-danger">
                  <i className="fa fa-credit-card" aria-hidden="true"></i>
                  </div>
                  <h5 className="fw-bold">Secure Payment</h5>
                  <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                </div>
              </div>
            </div>
            <div className="col d-flex">
              <div className="card depth border-0 rounded-0 border-bottom border-success border-3 w-100">
                <div className="card-body text-center">
                  <div className="h1 fw-bold my-2 text-success">
                  <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                  </div>
                  <h5 className="fw-bold">Free Returns</h5>
                  <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                </div>
              </div>
            </div>
            <div className="col d-flex">
              <div className="card depth border-0 rounded-0 border-bottom border-warning border-3 w-100">
                <div className="card-body text-center">
                  <div className="h1 fw-bold my-2 text-warning">
                  <i className="fa fa-headphones" aria-hidden="true"></i>
                  </div>
                  <h5 className="fw-bold">24/7 Support</h5>
                  <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
        </div>
      </section>
            <section className="product-thumb-slider subscribe-banner p-5">
                <div className="row">
                    <div className="col-12 col-lg-6 mx-auto">
                        <div className="text-center">
                            <div className="mb-0 fw-bold text-white subscribe-head">
                                <h2>Do you need more Tips?</h2>
                                <p>Sign up free and get the letest tips....</p>
                            </div>
                            <div className="mt-3">
                                <input type="text" className="form-control form-control-lg bubscribe-control rounded-0 px-5 py-3" placeholder="Enter your email" />
                            </div>
                            <div className="mt-3 d-grid">
                                <button type="button" className="btn btn-lg btn-ecomm bubscribe-button px-5 py-3">Yes. I want!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CalltoActionSection;