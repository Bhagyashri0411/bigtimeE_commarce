import axios from "axios";
import { CART_ADD_ITEM, CART_CLEAR_ITEM, CART_DELETE_ITEM, CART_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, NEW_PRODUCT_FAIL, NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_RESET, ORDER_LIST_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REVIES_CREATE_FAIL, PRODUCT_REVIES_CREATE_REQUEST, PRODUCT_REVIES_CREATE_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATES_FAIL, USER_UPDATES_REQUEST, USER_UPDATES_SUCCESS } from "../Constants/ProductConstants"


// Post PRODUCTS
export const createProduct = (pName, pTitle, pDis, price, afterPrice, discount, noStock, color, size, age, cat, subCat, keyFeature, images) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_REQUEST });

        const myForm = new FormData();

        myForm.append("name", pName);
        myForm.append("title", pTitle);
        myForm.append("description", pDis);
        myForm.append("price", price);
        myForm.append("afterdiscount", afterPrice);
        myForm.append("discount", discount)
        myForm.append("countInStock", noStock)
        myForm.append("color", color)
        myForm.append("size", size)
        myForm.append("age", age)
        myForm.append("cat", cat)
        myForm.append("subcat", subCat);
        myForm.append("keys", keyFeature);
        myForm.append("images", images)


        // const config = {
        //     headers: { "Content-Type": "application/json" },
        // };

        const { data } = await axios.post(
            `/api/products/NewaddProduct`,
            myForm,
        );

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

//ALL PRODUCTS
export const listProduct = (keyword = " ", currentPage = "1", price = [0, 25000], category, keys) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        let getLink = `/api/products?keyword=${keyword}&currentPage=${currentPage}&pricelimit=${price[0]}&pricehigh=${price[1]}`
        if (category) {
            getLink = `/api/products?keyword=${keyword}&currentPage=${currentPage}&pricelimit=${price[0]}&pricehigh=${price[1]}&category=${category}`
        }
        else if (keys) {
            getLink = `/api/products?keyword=${keyword}&currentPage=${currentPage}&pricelimit=${price[0]}&pricehigh=${price[1]}&seraching=${keys}`
        }

        const { data } = await axios.get(getLink);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

//SINGLE PRODUCT
export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

// PRODUCT REVIWES
export const CreateproductReviews = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_REVIES_CREATE_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/products/${productId}/review`, review, config);
        dispatch({ type: PRODUCT_REVIES_CREATE_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_REVIES_CREATE_FAIL,
            payload: message,
        });
    }
};

// ADD TO CART
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            images: data.images,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        }
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// REMOVE FROM CART
export const removefromcart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_DELETE_ITEM,
        payload: id,
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// SAVE SHIPPING ADDRESS
export const saveShippingAddress = (data) => async (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })
    localStorage.setItem("shippingAddress", JSON.stringify(data))
}

// PAYMENT METHOD
export const savePaymentMethod = (data) => async (dispatch) => {
    dispatch({
        type: CART_PAYMENT_METHOD,
        payload: data,
    })
    localStorage.setItem("paymentMethod", JSON.stringify(data))
}

// LOGIN
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post(`/api/users/login`, { email, password }, config);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

// LOGOUT
export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    localStorage.removeItem("cartItems")
    dispatch({
        type: USER_LOGOUT
    });
    dispatch({
        type: USER_DETAILS_RESET
    });
    dispatch({
        type: ORDER_LIST_RESET
    })
    document.location.href = "/login";
}

// REGISTER
export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const { data } = await axios.post(`/api/users`, { name, email, password }, config);
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

// DETAILS
export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST });
        const {
            userLogin: { userInfo }, } = getState()


        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/users/${id}`, config);
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout())
        }
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: message,
        });
    }
};

// //Update
export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATES_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/users/profile`, user, config);
        dispatch({ type: USER_UPDATES_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: USER_UPDATES_FAIL,
            payload: message
        })
    }
};

// CREATE ORDER
export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/orders/`, order, config);
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
        dispatch({ type: CART_CLEAR_ITEM, payload: data })

        localStorage.removeItem("cartItems")
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: message
        })
    }
};

//CREATE ORDER DETAILS
export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/${id}`, config);
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: message
        })
    }
};

//  ORDER PAY
export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_PAY_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config);
        dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: message
        })
    }
};

// USER ORDER LIST
export const listOrder = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/orders/get`, config);
        dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: message
        })
    }
};