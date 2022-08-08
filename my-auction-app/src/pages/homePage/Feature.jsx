import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import pic3 from '../../images/pic3.png';

const Feature = () => (
  <>
    <div className="company section__padding" id="company">
      <div className="company-image">
        <img src={pic3} alt="possibility" />
      </div>
      <div className="company-content">
        <h1 className="gradient__text">About our company <br /> and millions of unique items</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue accumsan felis, sed efficitur augue fermentum non. Vivamus eget ante massa. Sed maximus lectus orci, eu fermentum sem sodales sed.</p>
        <Link id="link" to={"/products"} style={{ textDecoration: 'none' }}>
          <h4>Request Early Access to Get Started !</h4>
        </Link>
      </div>
    </div></>
);

export default Feature;
