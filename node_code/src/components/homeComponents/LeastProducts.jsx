import React from 'react'

export const LeastProducts = () => {
    return (
        <div>
            <section className="product-tab-section section-padding py-5 bg-light">
                <div className="col-md-10 mx-auto">
                    <div className="text-center pb-3">
                        <h3 className="mb-0 h3 fw-normal">Latest Products</h3>
                    </div>
                    <div className="row">
                        <div className="buttons d-flex justify-content-center pt-2 pb-3">
                            <button className="btn  me-2 nav-btn" > New
                                Arrival</button>
                            <button className="btn  me-2 nav-btn" > Clothing and Accessories</button>

                            <button className="btn  me-2 nav-btn" > Consumer Electronic</button>
                            <button className="btn  me-2 nav-btn" >  Software</button>


                            <button className="btn  me-2 nav-btn" >  Beauty & Personal care</button>
                            <button className="btn  me-2 nav-btn" > Health and Personal care</button>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
