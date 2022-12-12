import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import Footer from "./../components/Footer";
import { LeastProducts } from "../components/homeComponents/LeastProducts";
// import LeastedProducts from "../components/homeComponents/ListofProducts";
// import Slideshow from "../components/homeComponents/SlideShow";

const HomeScreen =({match}) =>{
    window.scrollTo(0,0)
    const keyword = match.params.keyword;
    const currentPage = match.params.currentPage;

    return(
        <>
        <Header/>
        {/* <Slideshow/> */}
        <ShopSection keyword={keyword} currentPage={currentPage}/>
        {/* <Model/> */}
        {/* <LeastedProducts/> */}
        <LeastProducts/>
        <CalltoActionSection/>
        <ContactInfo/>
        <Footer/>
        </>
    )
}
export default HomeScreen;