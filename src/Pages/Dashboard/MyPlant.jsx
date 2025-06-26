import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';

import { AuthContext } from '../../AuthContext';
import MyPlantData from './MyPlantData';



const MyPlant = () => {
    const allPlants = useLoaderData();
    const { user } = useContext(AuthContext);
    
    const [userPlants, setUserPlants] = useState(() =>
        allPlants.filter(plant => plant.userEmail === user?.email)

    );




    useEffect(() => {
        document.title = 'DashBoard | MyPlant';
    }, [])

    
    return (
        <>
            <div className=' my-10'>

                {

                    userPlants.length === 0 ? (<div className='flex flex-col justify-center items-center min-h-[calc(100vh-225px)]'>
                        <p className='text-center text-4xl lg:text-5xl font-bold col-span-2 text-gray-500 mb-5'>No plants found.</p>
                        <Link to='/Add-Plants'><button className='btn text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white '>Go to Add</button></Link>
                    </div>
                    ) : (
                        <div className="overflow-x-auto bg-base-100 h-screen p-10 ">
                           <h1 className='text-3xl font-bold'>My Plants</h1>
                            <table className="min-w-full my-7 divide-y  divide-gray-300">
                                <thead className="bg-base-300  ">
                                    <tr >

                                        <th
                                            scope="col"
                                            className="px-6 py-7 text-center  text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Plant Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-7 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-7 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Care Level
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-7 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Last Watered
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-7 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Next Watering
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-7 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Water Frequency
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-7 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Health
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-7 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>


                                    </tr>
                                </thead>
                                {
                                    userPlants.map(plant => <MyPlantData key={plant._id} plant={plant} setUserPlants={setUserPlants} ></MyPlantData>)
                                }
                            </table>

                        </div>
                    )

                }

            </div>
        </>
    );
};

export default MyPlant;