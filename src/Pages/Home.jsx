import React from 'react';
import Banner from '../Components/Main/Banner';
import Tips from '../Components/Main/Tips';
import NewPlant from '../Components/Plant/NewPlant';
import EssentialTips from '../Components/EssentialTips';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewPlant></NewPlant>
            <Tips></Tips>
            <EssentialTips></EssentialTips>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;