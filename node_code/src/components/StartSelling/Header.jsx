import React from "react";

const Header = () => {
    return (
        <>
            <div className="border-bottom header">
                <div className="container">
                    <div className="d-flex align-items-center w-100 ">
                        <div className="fw-bold" style={{ flex: '2 1 0%' }}>
                            <a href="/">
                            Bigtime E_commarce
                            </a>
                        </div>
                        <div style={{ flex: '6 1 0%' }} >
                            <div className="d-md-flex align-items-center justify-content-between d-none" >
                                <div className="me-2">
                                    <a href="#sellOnMyntra" className="p-homenew-css-menu__link" data-index={0}> online  sell
                                    </a>
                                </div>
                                <div className="me-2">
                                    <a href="#services" className="p-homenew-css-menu__link p-homenew-css-active" data-index={2}>How it work?
                                    </a>
                                </div>
                                <div className="me-2">
                                    <a href="#successStories" className="p-homenew-css-menu__link" data-index={1}>Grow your bussiness</a>
                                </div>
                                <div className="me-2">
                                    <a href="#successStories" className="p-homenew-css-menu__link" data-index={1}>Why sell with us?</a>
                                </div>
                                <div className="me-2">
                                    <a href="#faqs" className="p-homenew-css-menu__link" data-index={3}>FAQs</a>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-end Login-Register" style={{ flex: '2 1 0%' }} >
                            <a class="btn btn-outline-dark" href="/register">Register</a>
                            <a class="btn btn-outline-dark" href="/login">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header