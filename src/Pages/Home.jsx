import React, { useEffect } from 'react';
import Banner from '../Components/Main/Banner';
import Tips from '../Components/Main/Tips';
import NewPlant from '../Components/Plant/NewPlant';
import EssentialTips from '../Components/EssentialTips';
import NewsLetter from '../Components/NewsLetter';
import BlogSection from '../Components/BlogSection';

const Home = () => {
    useEffect(() => {
            document.title = 'PlantCare';
        }, [])
    return (
        <div>
            <Banner></Banner>
            <NewPlant></NewPlant>
            <Tips></Tips>
            <EssentialTips></EssentialTips>
            <BlogSection></BlogSection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;