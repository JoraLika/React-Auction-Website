import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { ArrowRight } from 'react-bootstrap-icons';
import pic1 from '../../images/pic1.png';
// import people from '../../images/people.png';


const StartSection = () => (
    <div className="header section__padding" id="home">
        <div className="header-content">
            <h1 className="gradient__text">Welcome To Our Auction Page !</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis pretium mauris malesuada pretium. In placerat gravida augue. Suspendisse eu dolor magna.Aenean in placerat elit. In tortor massa.</p>

            <div className="header-content-input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
            </div>

            <div className="header-content-navigate">
                <ArrowRight />
                <Link id="link" to={"/products"}>Navigate and view all auctions!</Link>
            </div>
        </div>

        <div className="header-image">
            <img src={pic1} />
        </div>
    </div>
);

export default StartSection;
