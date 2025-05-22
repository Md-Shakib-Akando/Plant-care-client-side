import React from 'react';
import { Link, useLoaderData } from 'react-router';

const NewPlant = () => {
    const data = useLoaderData();


    return (
        <>
            <div className='my-10'>
                <div className='my-7'>
                    <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>New Plants</h1>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5  lg:gap-8'>
                {
                    data.slice(0, 6).map(plant => (
                        <div key={plant._id} className="flex flex-col gap-5 sm:flex-row sm:gap-16 p-4 mt-3  md:p-5 sm:items-center border-1 border-gray-300 rounded-xl shadow-sm">
                            <figure className='sm:w-1/2 '>
                                <img
                                    src={plant.image}
                                    alt=""
                                    className='md:h-[300px] rounded-xl' />
                            </figure>
                            <div className='space-y-3'>
                                <h2 className="card-title font-bold">{plant.PlantName}</h2>
                                <p><span className='font-semibold'>Category : </span>{plant.category}</p>
                                <p><span className='font-semibold'>Care Level: </span>{plant.careLevel}</p>
                                <p><span className='font-semibold'>Next Watering: </span>{plant.nextWatering}</p>
                                <p><span className='font-semibold'>Watering: </span> {plant.wateringFrequency}</p>
                                <p><span className='font-semibold'>Health: </span>{plant.HealthStatus}</p>

                                <div >
                                    <Link to={`/details/${plant._id}`}>
                                        <button className="btn text-green-600 hover:text-green-900 mr-3 cursor-pointer  whitespace-nowrap">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </>
    );
};

export default NewPlant;