import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router';



const Footer = () => {
    return (
        <>
            <footer className="bg-base-300 text-base-content py-10  ">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <div className='flex justify-center md:justify-start items-center gap-1 mb-2'>
                            <img className='h-[50px] w-[50px]' src='/logo.png' alt="" />

                            <h1 className='text-xl md:text-2xl font-semibold text-green-600'>PlantCare</h1>
                        </div>
                        <p className='my-3 text-center md:text-start'>Your personal plant care assistant. <br /> Track,manage,and learn about your <br /> plants all in one place</p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://www.facebook.com/sha.kib.493731/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-600">

                                <FaFacebook size={24}></FaFacebook>
                            </a>
                            <a href="https://www.linkedin.com/in/md-shakib-akando-b1a84533b/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-600">

                                <FaLinkedin size={24}></FaLinkedin>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-600">
                                <FaYoutube size={24}></FaYoutube>
                            </a>
                        </div>
                        
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h1 className='text-xl font-semibold mb-2'>Quick Link</h1>
                        <NavLink to='/' ><li className='px-2 py-1 list-none rounded-sm'>Home</li></NavLink>
                        <NavLink to='AllPlants' ><li className='px-2 py-1 list-none rounded-sm'>All-Plants</li></NavLink>
                        <NavLink to='Add-Plants' ><li className='px-2 py-1 list-none rounded-sm'>Add-Plants</li></NavLink>
                        <NavLink to='My-Plants' ><li className='px-2 py-1 list-none rounded-sm'>My-Plants</li></NavLink>
                    </div>
                    <div className="mb-4 text-center md:text-start md:mb-0">

                        <p>Contact us: <a href="mailto:support@shakibakando2@.com" className="text-green-600 hover:underline">support@plantcare.com</a></p>
                        <p className='mt-2'>Phone: +1 (555) 123-4567</p>
                    </div>

                </div>
                <div className='container mx-auto border-1 border-gray-300 my-5'></div>
                <div className='container mx-auto '>
                        <p className='text-center'>© 2025 Plant Care . All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;