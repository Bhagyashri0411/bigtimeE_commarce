import React from "react";
import Header from "./../components/Header"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../Redux/Action/ProductAction";

const ShippingScreen = ({ history }) => {
    window.scrollTo(0, 0);

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push("/payment")
    };
    return (
        <>
            <Header />
            <div className="" >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content rounded-0">
                        <form action=""  onSubmit={submitHandler}>
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold">Add New Address</h5>
                            </div>
                            <div className="modal-body">
                                <div className>
                                    <h6 className="fw-bold mb-3">Contact Details</h6>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control rounded-0" id="floatingName" placeholder="Name" />
                                        <label htmlFor="floatingName">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control rounded-0" id="floatingMobileNo" placeholder="Mobile No" />
                                        <label htmlFor="floatingMobileNo">Mobile No</label>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h6 className="fw-bold mb-3">Address</h6>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control rounded-0" id="floatingPinCode" placeholder="Pin Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
                                        <label htmlFor="floatingPinCode">Pin Code</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control rounded-0" id="floatingAddress" placeholder="Address (House No, Building, Street, Area)" value={address} onChange={(e) => setAddress(e.target.value)} required />
                                        <label htmlFor="floatingAddress">Address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control rounded-0" id="floatingLocalityTown" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
                                        <label htmlFor="floatingLocalityTown">Country</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control rounded-0" id="floatingCity" placeholder="City / District" value={city} onChange={(e) => setCity(e.target.value)} required />
                                        <label htmlFor="floatingAddress">City / District</label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="d-grid w-100">
                                    <button type="submit" className="btn tophead blue w-100 rounded-0">Continue</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ShippingScreen;