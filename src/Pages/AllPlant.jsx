import React, { useEffect, useState } from 'react';
import Loading from '../Components/Loading';
import { format } from 'date-fns';
import { Link } from 'react-router';

const AllPlant = () => {

    const [plants, setPlants] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        document.title = 'PlantCare | AllPlant';
    }, [])
    useEffect(() => {
        setLoading(true)
        const url = sortBy
            ? `https://plant-care-server-seven.vercel.app/plants-sorted?sortBy=${sortBy}`
            : `https://plant-care-server-seven.vercel.app/plants`;


        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPlants(data);
                setLoading(false);
            }
            )
            .catch(err => console.error(err));
    }, [sortBy]);

    if (loading) {
        return <Loading />;
    }


    return (
        <>
            <div className='flex flex-col justify-center items-center pt-10 pb-5 gap-4'>
                <h1 className='text-4xl font-bold'>
                    All Available Plants
                </h1>
                <p> Explore our full collection of healthy and beautiful plants.</p>
            </div>
            <div className="flex items-center justify-end mt-8">
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


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-5 gap-5  lg:gap-8'>
                {
                    plants.map(plant => {
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
                                    <p><span className='font-semibold'>CareLevel : </span>{plant.careLevel}</p>

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


        </>
    );
};

export default AllPlant;