import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const details = data.find((singleData) => singleData._id.toString() === id);
    const { PlantName, image, wateringFrequency, category, HealthStatus, nextWatering, lastWatered, careLevel, Description } = details;
    useEffect(() => {
        document.title = 'PlantCare | Details';
    }, [])
    return (
        <>
            <div className='min-h-[calc(100vh-210px)]'>
                <div className=" max-w-6xl mx-auto my-10 md:mt-20  p-6   border-1 border-gray-300 shadow-xl rounded-2xl">
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-24">

                        <div className="w-full md:w-3/4 ">
                            <img
                                src={image}
                                alt=""
                                className="rounded-xl w-full h-96 object-cover shadow-md"
                            />
                        </div>


                        <div className="md:w-1/2 space-y-2 md:space-y-6">
                            <h2 className="text-3xl font-bold text-green-700">{PlantName}</h2>

                            <p >
                                <span className="font-semibold">Category:</span> {category}
                            </p>

                            <p >
                                <span className="font-semibold">Health Status:</span> {HealthStatus}
                            </p>

                            <p >
                                <span className="font-semibold">Watering Frequency:</span> {wateringFrequency}
                            </p>

                            <p >
                                <span className="font-semibold">Last Watered:</span> {lastWatered}
                            </p>

                            <p >
                                <span className="font-semibold">Next Watering:</span> {nextWatering}
                            </p>

                            <p >
                                <span className="font-semibold">Care Level:</span> {careLevel}
                            </p>
                        </div>
                    </div>


                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Description :</h3>
                        <p className=" leading-relaxed">{Description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;