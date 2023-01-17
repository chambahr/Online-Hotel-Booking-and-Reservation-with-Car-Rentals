import React from "react";
import './searchItem.css'

const SearchItem = () => {
    return(
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/287431288.webp?k=8d2010ee7f05ff0525f64d24cc6926e850ab6c90e29da298e424b15cc118519b&o=&s=1" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Ealing Common Apartment</h1>
                <span className="siDistance">350 m from center</span>
                <span className="siTaxiOp">Free Airport Pickup</span>
                <span className="siSubtitle">
                    Studio Apartment with AC
                </span>
                <span className="siFeatures">
                    Entire apartment • 2 living rooms • 1 bathroom • 1 kitchen • 58m²
                </span>
                <span className="siCancelOp">Free Cancelation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel Later, So lock in this great price today
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Include Taxes and fees</span>
                    <button className="siCheckButton">See Availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem