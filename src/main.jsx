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
  <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
