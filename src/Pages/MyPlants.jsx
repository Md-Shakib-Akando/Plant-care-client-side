import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../AuthContext';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Swal from 'sweetalert2';


const MyPlants = () => {
    const allPlants = useLoaderData();
    const { user } = useContext(AuthContext);
    const [userPlants, setUserPlants] = useState(() =>
        allPlants.filter(plant => plant.userEmail === user?.email)
    );


    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/plants/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your plant has been deleted.",
                                icon: "success"
                            });
                            setUserPlants(prev => prev.filter(plant => plant._id !== _id));
                        }
                    })

            }
        });
    }

    return (
        <>
            <div className='min-h-[calc(100vh-225px)] my-10'>

                {

                    userPlants.length === 0 ? (<div className='flex flex-col justify-center items-center min-h-[calc(100vh-225px)]'>
                        <p className='text-center text-4xl lg:text-5xl font-bold col-span-2 text-gray-500 mb-5'>No plants found.</p>
                        <Link to='/Add-Plants'><button className='btn text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white '>Go to Add</button></Link>
                    </div>
                    ) : (
                        <div className=' grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-8'>
                            {
                                userPlants.map(plant =>
                                    <div key={plant._id}>
                                        <div className="flex flex-col gap-5 sm:flex-row sm:gap-16 p-4  md:p-5 sm:items-center bg-base-300 rounded-xl shadow-sm">
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

                                                <div className=" space-x-8 ">
                                                    <Link to={`/updatePlant/${plant._id}`}>
                                                        <button className='btn text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white '>
                                                            <MdEdit size={32} />

                                                        </button>
                                                    </Link>
                                                    <Link>
                                                        <button
                                                            onClick={() => handleDelete(plant._id)}
                                                            className='btn text-red-600 border-red-600 hover:bg-red-600 hover:text-white cursor-pointer'>
                                                            <MdDelete size={32} />

                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )

                }

            </div>
        </>
    );
};

export default MyPlants;