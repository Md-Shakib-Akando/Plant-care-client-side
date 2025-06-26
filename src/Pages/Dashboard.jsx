import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.title = 'PlantCare | DashBoard';
  }, []);

  return (
    <>
     
      <div className="shadow-sm fixed top-0 left-0 right-0 z-30 bg-white py-4">
        <div className="navbar max-w-11/12 mx-auto flex justify-between items-center">
          
          <div className="flex items-center space-x-2">
           
            

            <img className="h-[40px] w-[40px]" src="/logo.png" alt="Logo" />
            <h1 className="text-xl md:text-2xl font-semibold text-green-600">
              PlantCare
            </h1>
          </div>

         
          <div className="navbar-end">
            <li className="list-none">
              <NavLink
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
                to="/"
              >
                Go To Home
              </NavLink>
            </li>
          </div>
        </div>
      </div>

     
      <div
        className={`fixed top-[95px] lg:top-[95px] lg:left-20 bottom-0 bg-gray-900 text-white rounded-l-md z-20
          w-[70%] max-w-[250px] lg:w-[200px]
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        
        
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Dashboard</h1>
          
          <button
            className="lg:hidden text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        
        <nav className="flex flex-col items-center mt-10 gap-12">
          <li className="list-none">
            <NavLink
              to="/dashboard"
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-sm ${
                  isActive ? 'bg-green-600' : 'hover:bg-gray-700'
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li className="list-none">
            <NavLink
              to="/dashboard/allPlants"
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-sm ${
                  isActive ? 'bg-green-600' : 'hover:bg-gray-700'
                }`
              }
            >
              All-Plants
            </NavLink>
          </li>

          <li className="list-none">
            <NavLink
              to="/dashboard/addPlant"
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-sm ${
                  isActive ? 'bg-green-600' : 'hover:bg-gray-700'
                }`
              }
            >
              Add-Plants
            </NavLink>
          </li>

          <li className="list-none">
            <NavLink
              to="/dashboard/myPlant"
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-sm ${
                  isActive ? 'bg-green-600' : 'hover:bg-gray-700'
                }`
              }
            >
              My-Plants
            </NavLink>
          </li>
        </nav>
      </div>

      
      <div
        className={`mt-[106px] transition-all duration-300 
          ${isSidebarOpen ? 'lg:ml-[200px]' : 'ml-0 lg:ml-[300px]'}
          px-4 py-4
        `}
      >
        <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden mr-2 p-2 border-1 rounded-md font-medium hover:bg-green-600 hover:text-white  border-green-600 text-green-600"
            >
             Dashboard
            </button>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
