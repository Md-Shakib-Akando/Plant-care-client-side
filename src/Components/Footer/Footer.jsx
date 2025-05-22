import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';



const Footer = () => {
    return (
        <>
            <footer className="bg-base-300 text-base-content py-10 mt-12 ">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <div className='flex items-center gap-1 mb-2'>
                            <img className='h-[50px] w-[50px]' src='/logo.png' alt="" />

                            <h1 className='text-xl md:text-2xl font-semibold text-green-600'>PlantCare</h1>
                        </div>
                        <p>© 2025 Plant Care . All rights reserved.</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <p>Contact us: <a href="mailto:support@shakibakando2@.com" className="text-green-600 hover:underline">support@plantcare.com</a></p>
                        <p className='mt-2'>Phone: +1 (555) 123-4567</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/sha.kib.493731/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-600">

                            <FaFacebook size={32}></FaFacebook>
                        </a>
                        <a href="https://www.linkedin.com/in/md-shakib-akando-b1a84533b/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-600">

                            <FaLinkedin size={32}></FaLinkedin>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-600">
                            <FaYoutube size={32}></FaYoutube>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;