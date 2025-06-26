import React, {  useEffect, useState } from 'react';



import PlantCard from './PlantCard';
import Loading from '../../Components/Loading';

const AllPlants = () => {
    
    const [plants, setPlants] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        document.title = 'DashBoard | AllPlant';
    }, [])
    useEffect(() => {
        setLoading(true)
        const url = sortBy
            ? `https://plant-care-server-seven.vercel.app/plants-sorted?sortBy=${sortBy}`
            : `https://plant-care-server-seven.vercel.app/plants`;


        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPlants(data)
                setLoading(false)
            })
            .catch(err => console.error(err));
    }, [sortBy]);

    if(loading){
        return <Loading></Loading>
    }


    return (
        <>

           
           
            <div className="overflow-x-auto bg-base-100 h-screen p-10 ">
                 <h1 className='text-4xl font-bold pb-10'>All Plants</h1>
                 <div className="flex items-center justify-end  mt-8">
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