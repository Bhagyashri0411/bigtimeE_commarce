import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../Redux/Action/ProductAction";
import Message from "../LoadingError/Error"
import Loading from "../LoadingError/Loading"
import Toast from "../LoadingError/Toast";

const ProfileTable = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const toastId = React.useRef(null)


    const Toastobjects = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 2000
    }

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { loading: updateLoading } = userUpdateProfile

    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
        }
    }, [dispatch, user])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmpassword) {
            if (!toast.isActive(toastId.current)) {

                toastId.current = toast.error("Password does not Match", Toastobjects)
            }
        }
        else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
            if (!toast.isActive(toastId.current)) {

                toastId.current = toast.success("Profile Updated", Toastobjects)
            }

        }
    }

    return (
        <>
            <Toast />
            {
                error && <Message variant="alert-danger">{error}</Message>
            }
            {
                loading && <Loading />
            }
            {
                updateLoading && <Loading />
            }
            <div className="col-12">
                <div className="card rounded-0">
                    <div className="card-body p-lg-5">
                        <h5 className="mb-0 fw-bold">Edit Details</h5>
                        <hr />
                        <form action="" onSubmit={submitHandler}>
                            <div className="row row-cols-1 g-3">
                                <div className="col">
                                    <div className="form-floating">
                                        <input type="text" className="form-control rounded-0" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
                                        <label>Name</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating">
                                        <input type="text" className="form-control rounded-0" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                        <label >Email</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating">
                                        <input type="text" className="form-control rounded-0" placeholder="New Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                        <label >New Password</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating">
                                        <input type="text" className="form-control rounded-0" placeholder="confirm Password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value
                                            )}/>
                                        <label >Confirm Password</label>
                                    </div>
                                </div>

                                <div className="col">
                                    <button type="submit" className="btn btn-dark py-3 btn-ecomm w-100">Save Details</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileTable;