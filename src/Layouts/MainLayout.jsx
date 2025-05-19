import React from 'react';
import { Outlet } from 'react-router';
import '../App.css'
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='max-w-11/12  mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;