import React from "react";
import './hotel.css'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"
import { useState } from "react";
import { faCar, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {

    const[slideNumber, setSlideNumber] = useState(0)
    const[open, setOpen] = useState(false)
    
    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max500/287431287.jpg?k=456848d6e3d105ff5877221b7611acb2450c94d9fb36802c958f68464300f0bd&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max500/287489454.jpg?k=d5b6da2d39f1d8e6bb4af865fc14f3b41651a59d45d9c78fff6fd0c0a69cb4c6&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/287431288.jpg?k=0f5f49f0b432e97ec8948cf35e5d98931bc1e6fd352012a8f204bc7901a06e63&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max300/287431289.jpg?k=ae8939194e1b4b544d55df3b902b3ec67fa507f1c3013aea81c08f4e55498a33&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/287431287.jpg?k=456848d6e3d105ff5877221b7611acb2450c94d9fb36802c958f68464300f0bd&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/287431293.jpg?k=cd1b1dcd990d72e78befe6234d2ab7550a717119112019df135f438b0ec6616b&o=&hp=1"
        }
    ]

    // Open slider
    const handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(true)
    }

    // handle property image slider by moving it left and right here
    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
        }else{
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
        }

        // final update the state of the slidenumber
        setSlideNumber(newSlideNumber)
    }


    return(
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="hotelContainer">
                {open && (
                    <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
                    </div>
                )

                }
                <div className="hotelWrapper">
                    <button className="bookNow">
                        Reserve Or Book Now
                    </button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                    <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton 12 sr Mint New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent Location - 500m from center town
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $121 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Grand Price Hotel</h1>
                            <p className="hotelDesc">
                            You're eligible for a Genius discount at Brand New Ealing Common Apartment with Large 
                            Private Patio! To save at this property, all you have to do is sign in. 
                            In the Ealing district of London, close to Ealing Broadway Tube Station, 
                            Brand New Ealing Common Apartment with Large Private Patio has a fitness center, free WiFi and a 
                            washing machine. Guests staying at this 
                            apartment can use the patio. Offering a balcony with garden views, this apartment also includes a 
                            cable flat-screen TV, a well-equipped kitchen with a fridge,
                             an oven and a dishwasher, as well as a bathroom with a shower and free toiletries. orthfields Tube 
                             Station is 2.4 km from the apartment, while Park Royal 
                             Tube Station is 2.7 km from the property. The nearest airport is London Heathrow Airport, 16.1 km from 
                             Brand New Ealing Common Apartment with Large Private Patio. 
                             Brand New Ealing Common Apartment with Large Private Patio has been welcoming Booking.com guests since Feb 10, 2021
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay</h1>
                            <span>Top Location: Highly rated by recent guests (8.9)</span>
                            <h2>
                                <b>$456</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel