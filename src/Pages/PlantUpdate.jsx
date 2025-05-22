import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const PlantUpdate = () => {
    const {_id,PlantName,image, wateringFrequency, category, HealthStatus, nextWatering, lastWatered, careLevel, Description}=useLoaderData();
    
    const handleUpdatePlant=e=>{
        e.preventDefault();
        const form= e.target;
        const formData= new FormData(form);
        const updatePlant=Object.fromEntries(formData.entries());

        fetch(`http://localhost:3000/plants/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatePlant)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                Swal.fire({

                    icon: "success",
                    title: "Plant Update successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })


    }
    useEffect(()=>{
                document.title='PlantCare | UpdatePlant';
            },[])
    return (
        <>
           <div className='min-h-[calc(100vh-144px)]'>
            <div className='py-5'>
                <h1 className='text-3xl text-center font-bold'>Update Plants</h1>
            </div>
            <div className='flex justify-center items-center my-5 '>
                    <form onSubmit={handleUpdatePlant} className=' rounded-xl p-2 lg:p-5 bg-base-300'>
                        <div className='grid grid-cols-1 md:grid-cols-2'>

                            <div className="flex flex-col w-xs lg:w-md     p-4">
                                <label className="label">Plant Name</label>
                                <input type="text" name='PlantName' defaultValue={PlantName} className="input w-full" placeholder="enter your plant name" />

                            </div>
                            <div className="form-control flex flex-col w-full p-4">
                                <label className="label">
                                    <span className="label-text font-medium">Category</span>
                                </label>
                                <select name="category" defaultValue={category} required className="select select-bordered w-full">
                                    <option disabled  value=''>Select Category</option>
                                    <option value="flowering">flowering</option>
                                    <option value="fern"> fern</option>
                                    <option value="succulent">succulent</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-xs lg:w-md  p-4">
                                <label className="label">Description</label>
                                <input type="text" defaultValue={Description} name='Description' className="input w-full" placeholder="My awesome page" />

                            </div>
                            <div className="form-control flex flex-col w-full p-4">
                                <label className="label">
                                    <span className="label-text font-medium">Care level</span>
                                </label>
                                <select name="careLevel" defaultValue={careLevel}  required className="select select-bordered w-full">
                                    <option disabled  value="">Select care level</option>
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="difficult">Difficult</option>
                                </select>
                            </div>
                            <div className=" flex flex-col w-xs lg:w-md  p-4">
                                <label className="label">Last Watered Date</label>
                                <input type="date" defaultValue={lastWatered} name='lastWatered' className="input w-full" placeholder="enter last date" />

                            </div>
                            <div className=" flex flex-col w-xs lg:w-md  p-4">
                                <label className="label">Next Watering Date</label>
                                <input type="date" defaultValue={nextWatering} name='nextWatering' className="input w-full" placeholder="enter next date" />

                            </div>
                            <div className="   flex flex-col w-xs lg:w-md    p-4">
                                <label className="label">Watering Frequency</label>
                                <input type="text" defaultValue={wateringFrequency} name='wateringFrequency' className="input w-full" placeholder="every 3days weekly" />

                            </div>
                            <div className="   flex flex-col w-xs lg:w-md    p-4">
                                <label className="label">Health Status</label>
                                <input type="text" defaultValue={HealthStatus} name='HealthStatus' className="input w-full" placeholder="enter health" />

                            </div>

                        </div>
                        <div className=" flex flex-col    p-4">
                            <label className="label">Image</label>
                            <input type="text" defaultValue={image} name='image' className="input w-full" placeholder="enter your plant image url" />

                        </div>

                        <div className='flex justify-center items-center my-2 p-4'>
                            <button
                                type="submit"
                                className="w-full font-semibold text-lg cursor-pointer bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                            >
                                Update
                            </button>
                        </div>
                    </form>


                </div> 
           </div>
        </>
    );
};

export default PlantUpdate;