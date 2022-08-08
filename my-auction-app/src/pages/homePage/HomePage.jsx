import React from 'react';
import './HomePage.css';
import NavComp from '../../components/NavComp';
import StartSection from './StartSection';
import Feature from './Feature';
import Blog from './Blog';
import FooterSection from './FooterSection';
import CardContainer from './CardContainer';

function HomePage() {
    return (
        <>
            <div className="gradient__bg">
                <NavComp />
                <StartSection />
            </div>
            <Feature />
            <CardContainer />
            <Blog />
            <FooterSection />
        </>

    );
}
export default HomePage;