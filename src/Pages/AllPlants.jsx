import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../Components/Plant/PlantCard';

const AllPlants = () => {
    const plants = useLoaderData();
    
  const careLevelRank = {
    easy: 1,
    moderate: 2,
    difficult: 3,
  };

  
  const sortedPlants = [...plants].sort(
    (a, b) => careLevelRank[a.careLevel] - careLevelRank[b.careLevel]
  );

    return (
        <>

            <div className="overflow-x-auto min-h-[calc(100vh-144px)]">
                <table className="min-w-full my-7 divide-y  divide-gray-300">
                    <thead className="bg-base-300 ">
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
                        sortedPlants.map(plant => <PlantCard key={plant._id} plant={plant}></PlantCard>)
                    }
                </table>
            </div>

        </>
    );
};

export default AllPlants;