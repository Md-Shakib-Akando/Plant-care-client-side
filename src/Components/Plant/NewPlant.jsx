import { format } from 'date-fns';
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  lg:gap-8'>
                    {
                        data.slice(0, 8).map(plant => {
                            const formattedNextWatering = plant.nextWatering
                                ? format(new Date(plant.nextWatering), 'dd/MM/yyyy')
                                : 'N/A';

                            return (
                                <div key={plant._id} className="flex flex-col gap-5  p-4 mt-3  md:p-5  border-1 border-gray-300 rounded-xl shadow-sm">
                                    <figure className=''>
                                        <img
                                            src={plant.image}
                                            alt=""
                                            className=' rounded-xl' />
                                    </figure>
                                    <div className=' px-2'>
                                        <div className='flex justify-between mb-3'>
                                            <h2 className="card-title font-bold">{plant.PlantName}</h2>

                                            <p className='bg-green-300 py-1 px-2 rounded-full'>{plant.HealthStatus}</p>
                                        </div>
                                        <p><span className='font-semibold'>Category : </span>{plant.category}</p>

                                        <p className='mb-2'><span className='font-semibold '>Next Watering: </span>{formattedNextWatering}</p>

                                        <p className='font-semibold'>Description : </p>
                                        <p className='mb-2'>
                                            {plant.Description.length > 60
                                                ? `${plant.Description.substring(0, 60)}...`
                                                : plant.Description}
                                                <Link to={`/details/${plant._id}`}>
                                                <button className=" text-green-600 hover:text-green-900 mr-3 cursor-pointer  whitespace-nowrap">
                                                    See More
                                                </button>
                                            </Link>
                                        </p>


                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default NewPlant;