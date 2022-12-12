import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import PrivateRouder from "./PrivateRouder";
import AboutUs from "./components/homeComponents/AboutUs";
import Validation from "./components/StartSelling/Validation";
import Billing from "./components/HeaderComponents/Billing";
import FormSelling from "./components/StartSelling/FormSelling";
import Contactus from "./components/HeaderComponents/Conatctus"
import Model from "./components/homeComponents/Model";
import emailAuth from "./components/StartSelling/emailAuth";
import { Instruction } from "./components/StartSelling/Instruction";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={HomeScreen} path="/" />
        <Route component={HomeScreen} path="/search/:keyword" />
        <Route component={HomeScreen} path="/page/:currentPage" />
        <Route component={HomeScreen} path="/search/:keyword/page/:currentPage" />
        <Route component={SingleProduct} path="/products/:id" />
        <Route component={Model} path="/model/:id"></Route>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={AboutUs} path="/aboutus" />
        <PrivateRouder component={ProfileScreen} path="/profile" />
        <Route component={Instruction} path="/instruction"/>
        <Route component={emailAuth} path="/email" />
        <Route component={FormSelling} path="/selling" />
        <Route component={CartScreen} path="/cart/:id?" />
        <PrivateRouder component={ShippingScreen} path="/shipping" />
        <PrivateRouder component={PaymentScreen} path="/payment" />
        <PrivateRouder component={PlaceOrderScreen} path="/placeorder" />
        <PrivateRouder component={OrderScreen} path="/order/:id" />
        <Route component={Validation} path="/selling" />
        <Route component={Billing} path="/billing" />
        <Route component={Contactus} path="/contactus"></Route>
        <Route component={NotFound} path="*" />
      </Switch>
    </Router>
  )
}

export default App;