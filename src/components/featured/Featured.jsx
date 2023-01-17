import React, {useState} from "react";
import "./featured.css"

const Featured = () => {
    return(
        <div className="featured">
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/124941.jpg?k=1b53ce371fa40b95c0d123980493103d600007e59f9de6995de2f67f1b34666a&o=" alt="" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/807954.jpg?k=9b26dbd35f7cbdf9f20df873dd3f7dc2409962ec47f860fe87f0119755286140&o=" alt="" />
                <div className="featuredTitles">
                    <h1>Douala</h1>
                    <h2>243 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/654659.jpg?k=9c4ac59d35869485631346dc1ee16d28e82ec5f79654bf56b4b4eaeef3388299&o=" alt="" />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h2>232 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured