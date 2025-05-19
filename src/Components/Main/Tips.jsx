import React from 'react';
import { FaCheck, FaSnowflake, FaSun } from 'react-icons/fa';

const Tips = () => {
    return (
        <>
            <div className="my-16 bg-green-50 rounded-lg p-4 lg:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Seasonal Plant Care Tips
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Adjust your plant care routine with the changing seasons to keep
                your green friends thriving all year round.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden px-3 py-4 lg:p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <FaSun className='text-yellow-500'></FaSun>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Spring & Summer Care
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                       <FaCheck className='text-green-600 mt-1 mr-2'></FaCheck>
                        <span>
                          Increase watering frequency as plants enter active
                          growth phase
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className='text-green-600 mt-1 mr-2'></FaCheck>
                        <span>
                          Begin regular fertilizing schedule (every 2-4 weeks)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className='text-green-600 mt-1 mr-2'></FaCheck>
                        <span>
                          Monitor for increased pest activity in warmer weather
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className='text-green-600 mt-1 mr-2'></FaCheck>
                        <span>
                          Protect sensitive plants from intense afternoon sun
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className='text-green-600 mt-1 mr-2'></FaCheck>
                        <span>
                          Consider repotting plants that have outgrown their
                          containers
                        </span>
                      </li>
                    </ul>
                   
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                    <FaSnowflake className='text-blue-500'></FaSnowflake>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Fall & Winter Care
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <FaCheck className='text-green-600 mt-1 mr-2'></FaCheck>
                        <span>Reduce watering as plant growth slows down</span>
                      </li>
                      <li className="flex items-start">
                       <FaCheck className='text-green-600 mt-1 mr-2'></FaCheck>
                        <span>
                          Stop or reduce fertilizing during dormant periods
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className='text-green-600 mt-1 mr-2'></FaCheck>
                        <span>
                          Move plants away from cold drafts and heating vents
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className='text-green-600 mt-1 mr-2'></FaCheck>
                        <span>
                          Consider using a humidifier for tropical plants
                        </span>
                      </li>
                      <li className="flex items-start">
                       <FaCheck className='text-green-600 mt-1 mr-2'></FaCheck>
                        <span>
                          Clean plant leaves to maximize light absorption
                        </span>
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </>
    );
};

export default Tips;