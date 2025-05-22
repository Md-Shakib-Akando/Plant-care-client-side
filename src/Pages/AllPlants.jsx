import React, { useEffect, useState } from 'react';

import PlantCard from '../Components/Plant/PlantCard';

const AllPlants = () => {
   
    const [plants, setPlants] = useState([]);
    const [sortBy, setSortBy] = useState("");
    useEffect(() => {
        document.title = 'PlantCare | AllPlant';
    }, [])
    useEffect(() => {
        const url = sortBy
            ? `http://localhost:3000/plants-sorted?sortBy=${sortBy}`
            : `http://localhost:3000/plants`;
            
 
        fetch(url)
            .then(res => res.json())
            .then(data => setPlants(data))
            .catch(err => console.error(err));
    }, [sortBy]);



    return (
        <>

            <div className="flex items-center justify-center mt-8">
                <h1 className='text-xl font-semibold mr-5'>Sort by: </h1>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}

                    className="select select-bordered"
                >
                    <option value="" disabled>
                        -- Select Sort Option --
                    </option>
                    <option value="careLevel">Care Level</option>
                    <option value="nextWatering">Next Watering</option>
                </select>
            </div>

            <div className="overflow-x-auto min-h-[calc(100vh-144px)]">
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

                            </th>
                        </tr>
                    </thead>
                    {
                        plants.map(plant => <PlantCard key={plant._id} plant={plant}></PlantCard>)
                    }
                </table>
            </div>

        </>
    );
};

export default AllPlants;