import React from 'react'
import { Link } from 'react-router-dom'

function emailAuth() {
    return (
        <div className='vh-100 align-items-center bg-light d-flex justify-content-center bgEmail' >
            <div className="row align-items-center">
                <div className="col-md-7">

                    <div className="p-5 container-box">
                        <h2>start a bussiness with Us</h2>
                        <div className="u-form u-form-1">
                            <form action="#" method="POST">
                                <div className="u-form-email u-form-group ">
                                    <input type="email" placeholder="Email" id="email-ef64" name="email" className="u-border-2 u-border-palette-1-base u-input u-input-rectangle" required />
                                </div>
                                <div className='mt-4'>
                                    <Link className="btn " to="/instruction">Continue</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">

                    <img src="./images/emailperson.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default emailAuth