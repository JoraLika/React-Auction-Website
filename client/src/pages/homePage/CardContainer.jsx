import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const CardContainer = () => (
    <div className="card-container-body">
        <div className="card-body-content">
            <p>Request Early Access to Get Started</p>
            <h3>Bid Today & Start Exploring The Endless Possibilities.</h3>
        </div>
        <div className="card-body-btn">
            <button type="button">
                <Link id="link" to={"/products"} style={{ textDecoration: 'none', color: '#fff' }}>
                    Get Started
                </Link>
            </button>
        </div>
    </div>
);

export default CardContainer;
