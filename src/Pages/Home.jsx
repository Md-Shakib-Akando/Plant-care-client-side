import React from 'react';
import Banner from '../Components/Main/Banner';
import Tips from '../Components/Main/Tips';
import NewPlant from '../Components/Plant/NewPlant';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewPlant></NewPlant>
            <Tips></Tips>
        </div>
    );
};

export default Home;