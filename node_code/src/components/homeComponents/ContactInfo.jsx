import React from "react";

const ContactInfo = () => {
    return (
        <>
            <div className="container mx-auto counter contactInfo">

                <div className="row bg-image rocket-lazyload entered">
                    <div className="col-12 col-md-3 contact-Box">
                        <div className="box-info">
                            <div className="about-counter">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <h5>Call us 24/7</h5>
                            <p>000-0000-000</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 contact-Box">
                        <div className="box-info">
                            <div className="about-counter">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h5>India</h5>
                            <p>Maharashtra</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 contact-Box">
                        <div className="box-info">
                            <div className="about-counter">
                                <i className="fas fa-fax"></i>
                            </div>
                            <h5>fax</h5>
                            <p>000-0000-000</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 contact-Box">
                        <div className="box-info">
                            <div className="about-counter">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <h5>Mail</h5>
                            <p>sales@bigtime.co.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo;