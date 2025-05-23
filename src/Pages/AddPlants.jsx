import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddPlants = () => {
    const { user } = useContext(AuthContext);
    const handleAddPlant = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const PlantData = Object.fromEntries(formData.entries());

        fetch('https://plant-care-server-seven.vercel.app/plants', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(PlantData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({

                        icon: "success",
                        title: "Plant Added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
        form.reset();
    }
    useEffect(() => {
        document.title = 'PlantCare | AddPlant';
    }, [])

    return (
        <>
            <div className='min-h-[calc(100vh-144px)]'>
                <div className='mt-8'>
                    <Link to='/'><button className='btn'>back</button></Link>
                </div>

                <div className='flex flex-col gap-3 justify-center items-center mt-5'>
                    <h1 className='text-2xl lg:text-4xl  font-bold'>Add a New Plant</h1>
                    <p className='text-sm lg:text-lg text-center'>Fill out the form below to add a new plant to your collection. <br className='hidden md:flex' /> Provide accurate details so we can help you track care routines effectively.</p>
                </div>
                <div className='flex justify-center items-center my-5 '>
                    <form onSubmit={handleAddPlant} className=' rounded-xl p-2 lg:p-5 bg-base-300'>
                        <div className='grid grid-cols-1 md:grid-cols-2'>

                            <div className="flex flex-col w-xs lg:w-md     p-4">
                                <label className="label">User Name</label>
                                <input type="text" name='userName' value={user.displayName} className="input w-full cursor-not-allowed" readOnly />

                            </div>

                            <div className="  flex flex-col w-xs lg:w-md   p-4">
                                <label className="label">User Email</label>
                                <input type="text" name='userEmail' value={user.email} className="input w-full cursor-not-allowed" readOnly />

                            </div>


                            <div className="flex flex-col w-xs lg:w-md     p-4">
                                <label className="label">Plant Name</label>
                                <input type="text" name='PlantName' required className="input w-full" placeholder="enter your plant name" />

                            </div>
                            <div className="form-control flex flex-col w-full p-4">
                                <label className="label">
                                    <span className="label-text font-medium">Category</span>
                                </label>
                                <select name="category" required className="select select-bordered w-full">
                                    <option disabled value=''>Select Category</option>
                                    <option value="flowering">flowering</option>
                                    <option value="fern"> fern</option>
                                    <option value="succulent">succulent</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-xs lg:w-md  p-4">
                                <label className="label">Description</label>
                                <input type="text" required name='Description' className="input w-full" placeholder="My awesome page" />

                            </div>
                            <div className="form-control flex flex-col w-full p-4">
                                <label className="label">
                                    <span className="label-text font-medium">Care level</span>
                                </label>
                                <select name="careLevel" required className="select select-bordered w-full">
                                    <option disabled value="">Select care level</option>
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="difficult">Difficult</option>
                                </select>
                            </div>
                            <div className=" flex flex-col w-xs lg:w-md  p-4">
                                <label className="label">Last Watered Date</label>
                                <input type="date" name='lastWatered' required className="input w-full" placeholder="enter last date" />

                            </div>
                            <div className=" flex flex-col w-xs lg:w-md  p-4">
                                <label className="label">Next Watering Date</label>
                                <input type="date" name='nextWatering' required className="input w-full" placeholder="enter next date" />

                            </div>
                            <div className="   flex flex-col w-xs lg:w-md    p-4">
                                <label className="label">Watering Frequency</label>
                                <input type="text" name='wateringFrequency' required className="input w-full" placeholder="every 3days weekly" />

                            </div>
                            <div className="   flex flex-col w-xs lg:w-md    p-4">
                                <label className="label">Health Status</label>
                                <input type="text" name='HealthStatus' required className="input w-full" placeholder="enter health" />

                            </div>

                        </div>
                        <div className=" flex flex-col    p-4">
                            <label className="label">Image</label>
                            <input type="text" name='image' required className="input w-full" placeholder="enter your plant image url" />

                        </div>

                        <div className='flex justify-center items-center my-2 p-4'>
                            <button
                                type="submit"
                                className="w-full font-semibold text-lg cursor-pointer bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                            >
                                Add
                            </button>
                        </div>
                    </form>


                </div>

            </div>
        </>
    );
};

export default AddPlants;