import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Pages/Home.jsx';

import AddPlants from './Pages/AddPlants.jsx';
import MyPlants from './Pages/MyPlants.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';

import AuthProvider from './AuthProvider.jsx';
import Details from './Pages/Details.jsx';
import PrivateRout from './PrivateRout/PrivateRout.jsx';
import PlantUpdate from './Pages/PlantUpdate.jsx';
import Loading from './Components/Loading.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import AllPlant from './Pages/AllPlant.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        loader:()=>fetch('https://plant-care-server-seven.vercel.app/latest-plants'),
        hydrateFallbackElement:<Loading></Loading>,
       Component:Home,

      },
      {
        path:'AllPlants',
        
        Component:AllPlant,
      },
      {
        path:'Add-Plants',
        element:(
          <PrivateRout>
            <AddPlants></AddPlants>
          </PrivateRout>
        ),
      },
      {
        path:'My-Plants',
        loader: () => fetch('https://plant-care-server-seven.vercel.app/plants').then(res => res.json()),
        hydrateFallbackElement:<Loading></Loading>,
         element:(
          <PrivateRout>
            <MyPlants></MyPlants>
          </PrivateRout>
        ),
      },
      {
        path:'Login', Component:Login,
      },
      {
        path:'Register', Component:Register,
      },
      {
        path:'/details/:id',
        element:(
          <PrivateRout>
            <Details></Details>
          </PrivateRout>
        ),
        loader:()=>fetch('https://plant-care-server-seven.vercel.app/plants'),
        hydrateFallbackElement:<Loading></Loading>,
      },
      {
        path:'/updatePlant/:id',
        loader: ({params})=>fetch(`https://plant-care-server-seven.vercel.app/plants/${params.id}`),
        hydrateFallbackElement:<Loading></Loading>,
        Component:PlantUpdate,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
