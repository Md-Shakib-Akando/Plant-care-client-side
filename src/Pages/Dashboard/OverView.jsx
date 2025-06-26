import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext';
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { RxBarChart } from "react-icons/rx";
import {
    PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';

const OverView = () => {
    const userData = useLoaderData();
    const { user } = useContext(AuthContext);
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch('https://plant-care-server-seven.vercel.app/plants')
            .then(res => res.json())
            .then(data => setPlants(data));
    }, []);

    const myPlants = plants.filter(p => p.userEmail === user?.email);

    const chartData = [
        { name: 'Users', value: userData.length },
        { name: 'All Plants', value: plants.length },
        { name: 'My Plants', value: myPlants.length },
    ];

    const COLORS = ['#6366F1', '#F59E0B', '#EF4444'];

    return (
        <div className='p-4 md:p-10'>
           
            <div className="bg-base rounded-lg p-4 md:p-6 shadow-sm mb-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden">
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                            ) : (
                                <i className="fa-solid fa-user text-2xl text-gray-600 flex justify-center items-center w-full h-full"></i>
                            )}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">{user?.displayName || 'Unknown User'}</h3>
                            <p className="text-gray-600">Plant Enthusiast</p>
                            <div className="mt-2 flex items-center space-x-4">
                                <span className="flex items-center text-sm text-gray-500">
                                    <FaEnvelope className='mr-2' />
                                    {user?.email || 'No Email'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <p className='flex gap-2 text-lg font-semibold'>
                        Verified
                        <FaCheckCircle size={28} className='text-green-600' />
                    </p>
                </div>
            </div>

            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
                <div className='p-6 shadow-md rounded-md flex justify-between border border-base-200 items-center'>
                    <div>
                        <h1 className='text-xl font-semibold'>Total Users</h1>
                        <p className='text-lg font-medium mt-2'>{userData.length}</p>
                    </div>
                    <RxBarChart size={32} className='text-[#6366F1]' />
                </div>
                <div className='p-6 shadow-md rounded-md flex justify-between border border-base-200 items-center'>
                    <div>
                        <h1 className='text-xl font-semibold'>All Plants</h1>
                        <p className='text-lg font-medium mt-2'>{plants.length}</p>
                    </div>
                    <RxBarChart size={32} className='text-[#F59E0B]' />
                </div>
                <div className='p-6 shadow-md rounded-md flex justify-between border border-base-200 items-center'>
                    <div>
                        <h1 className='text-xl font-semibold'>My Plants</h1>
                        <p className='text-lg font-medium mt-2'>{myPlants.length}</p>
                    </div>
                    <RxBarChart size={32} className='text-[#EF4444]' />
                </div>
            </div>

            
            
                <div className="mt-10  border border-base-200  rounded shadow-md p-6">
                <h2 className="text-xl font-semibold text-center mb-4">Current Overview</h2>
                <div className="w-full h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
                    {chartData.map((d, i) => (
                        <div key={i} className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                            <span>{d.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
        
    );
};

export default OverView;
