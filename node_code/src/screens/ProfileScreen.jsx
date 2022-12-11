import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, listOrder, logout } from "../Redux/Action/ProductAction";
import Header from "./../components/Header"
import ProfileTable from "../components/profileComponents/ProfileEdit";
import Order from "./../components/profileComponents/Orders"
import moment from "moment"
// import { Link } from "react-router-dom";
import Dashboard from "../components/profileComponents/Dashboard";
import Profile from "../components/profileComponents/Profile";
import SavedAddress from "../components/profileComponents/SavedAddress";


const ProfileScreen = () => {
    window.scrollTo(0, 0);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;

    const logoutHandler = () => {
        dispatch(logout())
    }

    useEffect(() => {
        dispatch(listOrder())
        dispatch(getUserDetails("profile"))
    }, [dispatch])
    return (
        <>
            <Header></Header>


            <div className="col-md-10 mx-auto mt-5">
                <div className="container-fluid">
                    <div className="border px-3 py-3 fw-bold fs-5 d-flex align-items-center justify-content-between">
                        Account-Dashboard
                    </div>
                </div>
                <div className="container-fluid mt-3">
                    <div className="row align-items-start">
                        <div className="col-lg-4 py-3 shadow ">
                            <div className="author-card pb-0 pb-md-3">
                                <div className="author-card-cover" />
                                <div className="author-card-profile row">
                                    <div className="author-card-avatar col-md-5">
                                        <img src="./images/user.png" alt="not found" />
                                    </div>
                                    <div className="author-card-details col-md-7">
                                        <h5 className="author-card-name mb-2">
                                            <strong>{userInfo.name}</strong>
                                        </h5>
                                        <span className="author-card-position">Joined {moment(userInfo.createdAt).format('LL')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="wizard pt-3 ">
                                <div className="d-flex align-items-start">
                                    <div className="nav align-items-start flex-column col-12 nav-pills me-3 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button className="nav-link active" id="v-pills-dash-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dash" type="button" role="tab" aria-controls="v-pills-dash" aria-selected="true">Dashbord</button>
                                        <button className="nav-link " id="v-pills-mprofile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mprofile" type="button" role="tab" aria-controls="v-pills-mprofile" aria-selected="true">Profile</button>

                                        <button className="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Edit Profile</button>

                                        <button className="nav-link " id="v-pills-address-tab" data-bs-toggle="pill" data-bs-target="#v-pills-address" type="button" role="tab" aria-controls="v-pills-address" aria-selected="true">Saved Address</button>

                                        <button className="nav-link d-flex justify-content-between" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Orders List
                                            <span className="badge2">{
                                                orders ? orders.length : 0}</span>
                                        </button>
                                        <button className="nav-link d-flex justify-content-between" onClick={logoutHandler}>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="tab-content col-lg-8 " id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-dash" role="tabpanel" aria-labelledby="v-pills-dash-tab">
                                <Dashboard email={userInfo.email} load={loading} />
                            </div>
                            <div className="tab-pane fade " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                <ProfileTable />

                            </div>
                            <div className="tab-pane fade " id="v-pills-address" role="tabpanel" aria-labelledby="v-pills-address-tab">
{console.log(userInfo.name, "nbvbvbv")}
                                <SavedAddress name ={userInfo.name}/>

                            </div>
                            <div className="tab-pane fade " id="v-pills-mprofile" role="tabpanel" aria-labelledby="v-pills-mprofile-tab">

                                <Profile orders={userInfo} />

                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <Order orders={orders} loading={loading} error={error} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileScreen;