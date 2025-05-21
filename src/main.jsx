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
import AllPlants from './Pages/AllPlants.jsx';
import AuthProvider from './AuthProvider.jsx';
import Details from './Pages/Details.jsx';
import PrivateRout from './PrivateRout/PrivateRout.jsx';
import PlantUpdate from './Pages/PlantUpdate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true, Component:Home,

      },
      {
        path:'All-Plants',
        loader: () => fetch('http://localhost:3000/plants').then(res => res.json()),
         Component:AllPlants,
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
        loader: () => fetch('http://localhost:3000/plants').then(res => res.json()),
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
        loader:()=>fetch('http://localhost:3000/plants')
      },
      {
        path:'/updatePlant/:id',
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
