import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../Components/Plant/PlantCard';

const AllPlants = () => {
    const plants= useLoaderData();
    console.log(plants)
    return (
        <>

        <div className="overflow-x-auto min-h-[calc(100vh-144px)]">
              <table className="min-w-full my-7 divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr >
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Plant
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Care Level
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Watered
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Next Watering
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Water Frequency
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Health
                    </th>
                    
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      
                    </th>
                  </tr>
                </thead>
                {
                    plants.map(plant=> <PlantCard key={plant._id} plant={plant}></PlantCard>)
                }
              </table>
            </div>
            
        </>
    );
};

export default AllPlants;