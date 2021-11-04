import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Appoinment from '../Appoinment/Appoinment';
import Services from '../Services/Services';
import Treatment from './../Treatment/Treatment';
import Banner from './../Banner/Banner';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Review />
            <Services />
            <Treatment />
            <Appoinment />
        </div>
    );
};

export default Home;