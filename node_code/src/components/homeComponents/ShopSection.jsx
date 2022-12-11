import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./Pagination";
import Loading from "../LoadingError/Loading"
import Message from "../LoadingError/Error"
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Action/ProductAction.js"
// import { Model } from "./Model";
import Model from "./Model";

const ShopSection = (props) => {
    const { keyword } = props
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, currentPage } = productList;


    useEffect(() => {
        dispatch(listProduct(keyword, currentPage));
    }, [dispatch, keyword, currentPage]);

    const [centredModal, setCentredModal] = useState();


    return (
        <>

            <section className="product-tab-section section-padding py-5">
                <div className="col-md-9 mx-auto">
                    <div className="text-center pb-3">
                        <h3 className="mb-0 h3 fw-normal text-capitalize">our range of  Products</h3>
                    </div>
                    {
                        loading ? (
                            <div className="mb-5">
                                <Loading />
                            </div>
                        )
                        : error ? (<Message varient={'alert-danger'}>{error}</Message>)
                        :
                        (
                            <>
                                        <hr />
                                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5  g-4 tabular-product">
                                            {products.map((product) => (
                                                
                                                <div className="col" key={product._id}>
                                                    <div className="card">
                                                        <div className="position-relative overflow-hidden">
                                                            <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                                                                <Link to="/"><i className="fa fa-heart" aria-hidden="true"></i></Link>
                                                                <Link to={`/cart/${product._id}`}><i className="fa fa-shopping-basket" /></Link>
                                                                <Link  onClick={() => setCentredModal(true)} >
                                                                    <i className="fa fa-search-plus" />
                                                                </Link>
                                                            </div>
                                                            <Link to={`/products/${product._id}`}
>                                                            
                                                                <img src={`/images/upload/${product.images}`} alt={product.name} style={{ height: '300px' }} />
                                                            </Link>
                                                        </div>
                                                        <div className="card-body border-top">
                                                            <div className="product-info text-center">
                                                                <h6 className="mb-2 fw-bold text-capitalize">{product.name}</h6>
                                                                <Rating value={product.rating} />

                                                                <p className="mb-0 h6 fw-bold product-price">${product.afterdiscount}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            ))}
                                        </div>

                                    </>
                                )
                    }
                    <Pagination activePage={currentPage} page={page} keyword={keyword ? keyword : ""} />

                </div>
            </section>
            {centredModal && <Model closeModel = {setCentredModal}/>}
        </>
    )
}

export default ShopSection;