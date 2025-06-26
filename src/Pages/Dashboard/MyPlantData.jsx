import React from 'react';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { MdDelete, MdEdit } from 'react-icons/md';

const MyPlantData = ({ plant ,setUserPlants}) => {
    
    const { _id, PlantName, image, wateringFrequency, category, HealthStatus, nextWatering, lastWatered, careLevel } = plant;
    const formattedDate1 = nextWatering ? format(new Date(nextWatering), 'dd/MM/yyyy') : 'N/A';
    const formattedDate2 = lastWatered ? format(new Date(lastWatered), 'dd/MM/yyyy') : 'N/A';


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


                fetch(`https://plant-care-server-seven.vercel.app/plants/${_id}`, {
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
            <tbody className="bg-base-200 divide-y divide-gray-200">

                <tr key={_id} className="hover:bg-base-100">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                                <img
                                    src={image}
                                    alt=''
                                    className="h-full w-full  object-cover"
                                />
                            </div>
                            <div className="ml-4">
                                <div className="text-sm text-center ml-10 font-medium ">
                                    {PlantName}
                                </div>

                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {category}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${careLevel === "easy"
                                    ? "bg-green-100 text-green-800"
                                    : careLevel === "moderate"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-red-100 text-red-800"
                                }`}
                        >
                            {careLevel}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                        {formattedDate2}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                        {formattedDate1}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {wateringFrequency}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                        <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${HealthStatus === "Excellent"
                                    ? "bg-green-100 text-green-800"
                                    : HealthStatus === "Good"
                                        ? "bg-blue-100 text-blue-800"
                                        : "bg-yellow-100 text-yellow-800"
                                }`}
                        >
                            {HealthStatus}
                        </span>
                    </td>

                    <td className="px-6 py-4 text-center whitespace-nowrap">
                        <div className=" space-x-8 ">
                            <Link to={`/dashBoard/plantUP/${plant._id}`}>
                                <button className='btn text-green-600 border-green-600 hover:bg-green-600 hover:text-white '>
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
                    </td>


                </tr>

            </tbody>
        </>
    );
};

export default MyPlantData;