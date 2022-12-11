import React from "react"
import { Link } from "react-router-dom"
// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { listProductDetails } from "../../Redux/Action/ProductAction"
const Model = ({ closeModel }) => {

    // // const productId = match.params.id
    // const dispatch = useDispatch()
    // const productDetails = useSelector((state)=> state.productDetails)
    // const {product} = productDetails

    // useEffect(()=>{
    //     dispatch(listProductDetails())
    // })

    return (
        <div>
            <div className="modal fade show" style={{ display: 'block' }}>
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content rounded-0">
                        <div className="modal-body">
                            <div className="row g-3">
                                <div className="col-12 col-xl-6">
                                    <img src="/images/newproduct.webp" alt="" className="img-fluid" />

                                </div>
                                <div className="col-12 col-xl-6">
                                    <div className="product-info">
                                        <h4 className="product-title fw-bold mb-1">Check Pink Kurta</h4>
                                        <p className="mb-0">Women Pink &amp; Off-White Printed Kurta with Palazzos</p>
                                        <div className="product-rating">
                                            <div className="hstack gap-2 border p-1 mt-3 width-content">
                                                <div><span className="rating-number">4.8</span><i className="bi bi-star-fill ms-1 text-success" /></div>
                                                <div className="vr" />
                                                <div>162 Ratings</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="product-price d-flex align-items-center gap-3">
                                            <div className="h4 fw-bold">$458</div>
                                            <div className="h5 fw-light text-muted text-decoration-line-through">$2089</div>
                                            <div className="h4 fw-bold text-danger">(70% off)</div>
                                        </div>
                                        <p className="fw-bold mb-0 mt-1 text-success">inclusive of all taxes</p>
                                        <hr />
                                        <div className="size-chart mt-3">
                                            <h6 className="fw-bold mb-3">Select Size</h6>
                                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                                <div className>
                                                    <button type="button" className="rounded-0">XS</button>
                                                </div>
                                                <div className>
                                                    <button type="button" className="rounded-0">S</button>
                                                </div>
                                                <div className>
                                                    <button type="button" className="rounded-0">M</button>
                                                </div>
                                                <div className>
                                                    <button type="button" className="rounded-0">L</button>
                                                </div>
                                                <div className>
                                                    <button type="button" className="rounded-0">XL</button>
                                                </div>
                                                <div className>
                                                    <button type="button" className="rounded-0">XXL</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-buttons mt-3">
                                            <div className="buttons d-flex flex-column gap-3 mt-4">
                                                <Link  to="/" className="btn btn-md btn-dark btn-ecomm  p-2"><i className="bi bi-suit-heart me-2" />Wishlist</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/*end row*/}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => closeModel(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Model