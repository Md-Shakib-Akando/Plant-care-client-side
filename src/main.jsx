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

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true, Component:Home,

      },
      {
        path:'All-Plants', Component:AllPlants,
      },
      {
        path:'Add-Plants', Component:AddPlants,
      },
      {
        path:'My-Plants', Component:MyPlants,
      },
      {
        path:'Login', Component:Login,
      },
      {
        path:'Register', Component:Register,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
