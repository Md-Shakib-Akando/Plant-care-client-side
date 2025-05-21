import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../AuthContext';

const MyPlants = () => {
    const allPlants=useLoaderData();
    const {user}=useContext(AuthContext);
    const userPlants=allPlants.filter(plant=>plant.userEmail===user?.email)

    return (
        <>
            {
                userPlants.map(plant=> <div><img src={plant.image} alt="" /></div>)
            }
        </>
    );
};

export default MyPlants;