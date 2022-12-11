import React from "react";

const Rating = ({ value, text }) => {
    return (
        // <div className="rating-wrrap hstack gap-2 align-items-center">
        //     <p className="mb-0">5</p>
        //     <div className><i className="fa-solid fa-star icon" /></div>
        //     <div className="progress flex-grow-1 mb-0 rounded-0" style={{ height: '4px' }}>
        //         <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} />
        //     </div>
        //     <p className="mb-0">1528</p>
        // </div>
        <div className="rating">
            <i className={
                value >= 1 ? "fas fa-star" : value >= 0.5 ? "fas fa-star-half-alt" : "fas fa-star"
            }></i>
            <i className={
                value >= 2 ? "fas fa-star" : value >= 1.5 ? "fas fa-star-half-alt" : "fas fa-star"
            }></i>
            <i className={
                value >= 3 ? "fas fa-star" : value >= 2.5 ? "fas fa-star-half-alt" : "fas fa-star"
            }></i>
            <i className={
                value >= 4 ? "fas fa-star" : value >= 3.5 ? "fas fa-star-half-alt" : "fas fa-star"
            }></i>
            <i className={
                value >= 5 ? "fas fa-star" : value >= 4.5 ? "fas fa-star-half-alt" : "fas fa-star"
            }></i>
               <i className={
                value >= 0 ? "fas fa-star" : value >= 0.0 ? "fas fa-star-half-alt" : "fas fa-star"
            }></i>
         <span>{text && text}</span>
        </div>
    )
}
export default Rating;