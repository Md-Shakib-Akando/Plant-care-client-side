import React from 'react';
import { FaBug, FaCheck, FaCloud, FaSeedling, FaSun, FaThermometerHalf, FaTint } from 'react-icons/fa';

const EssentialTips = () => {
    return (
        <>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 ">Essential Plant Care Tips</h2>
                        <p className="max-w-2xl mx-auto ">
                            Follow these simple guidelines to keep your plants healthy and thriving.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                       
                        <div className="p-6 rounded-lg shadow-md shadow-gray-600 border-1 border-gray-400 bg-base-100">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                <FaTint size={24} className='text-blue-500'></FaTint>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 ">Watering</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24} mt-'></FaCheck>
                                    <span className="">Check soil moisture before watering</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Water thoroughly until it drains out</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Adjust frequency based on season</span>
                                </li>
                            </ul>
                        </div>

                       
                        <div className="p-6 rounded-lg shadow-md shadow-gray-600 border-1 border-gray-400 bg-base-100">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                <FaSun size={24} className='text-yellow-500'></FaSun>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 ">Lighting</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Understand your plant's light needs</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Rotate plants regularly for even growth</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Use sheer curtains for harsh direct light</span>
                                </li>
                            </ul>
                        </div>

                       
                        <div className="p-6 rounded-lg shadow-md  shadow-gray-600 border-1 border-gray-400 bg-base-100">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                               <FaSeedling size={24} className='text-green-600'></FaSeedling>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 ">Soil & Nutrition</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Use appropriate soil mix for each plant</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Fertilize during growing season</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Repot when roots outgrow container</span>
                                </li>
                            </ul>
                        </div>

                        
                        <div className="p-6 rounded-lg shadow-md  shadow-gray-600 border-1 border-gray-400 bg-base-100">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                <FaThermometerHalf size={24} className='text-red-600'></FaThermometerHalf>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 ">Temperature</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Keep plants away from drafts</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Most houseplants prefer 65-75°F</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Avoid placing near heaters or AC vents</span>
                                </li>
                            </ul>
                        </div>

                       
                        <div className="p-6 rounded-lg shadow-md  shadow-gray-600 border-1 border-gray-400 bg-base-100">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                               <FaCloud size={24} className='text-blue-600'></FaCloud>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 ">Humidity</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Group plants together to increase humidity</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Use a pebble tray with water</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Mist tropical plants regularly</span>
                                </li>
                            </ul>
                        </div>

                        
                        <div className="p-6 rounded-lg shadow-md  shadow-gray-600 border-1 border-gray-400 bg-base-100">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                               <FaBug size={24} className='text-red-950'></FaBug>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 ">Pest Control</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Inspect new plants before bringing home</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Clean leaves regularly to prevent pests</span>
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className='text-green-500 size={24}'></FaCheck>
                                    <span className="">Use natural remedies for common pests</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default EssentialTips;