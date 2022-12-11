import React from "react";

const Profile = (props) => {
    const {orders} = props
    return (
        <>
            <div className="col-12 ">
                <div className="card rounded-0">
                    <div className="card-body p-lg-5">
                        <h5 className="mb-0 fw-bold">Profile Details</h5>
                        <hr />
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>{orders.name} {orders.lname}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile Number</td>
                                        <td>+99-85XXXXXXXX</td>
                                    </tr>
                                    <tr>
                                        <td>Email ID</td>
                                        <td>{orders.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>Male</td>
                                    </tr>
                                    <tr>
                                        <td>DOB</td>
                                        <td>10/03/1993</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                </div>
            </div>
            
        </>
    )
}

export default Profile;