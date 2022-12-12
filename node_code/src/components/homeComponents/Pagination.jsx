import React from "react";
import { Link } from "react-router-dom";
const Pagination = (props) => {
    const { page, pages, keyword = "" } = props
    return (
        pages > 1 && (
            <>
                <div className="product-pagination">
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link">Previous</a>
                            </li>
                            {
                                [
                                    ...Array(pages).keys()
                                ].map((x) => (

                                    <li className={`page-item ${x + 1 === page ? "active" : ""}`} key={x + 1}>
                                        <Link className="page-link" to={keyword ? `/search/${keyword}/pages/${x + 1}` : `/page/${x + 1}`}>
                                            {x + 1}
                                        </Link>
                                    </li>
                                ))
                            }

                            <li className="page-item">
                                <a className="page-link" href="javascript:;">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    )
}

export default Pagination;