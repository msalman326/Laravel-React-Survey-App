import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import router from './router.jsx'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import Signup from './views/Signup'
import Surveys from './views/Surveys'
import GuestLayout from './components/GuestLayout'
import DefaultLayout from './components/DefaultLayout'
const router= createBrowserRouter([
  

  {
    path: '/',
    element: <DefaultLayout/>,
    children:[
      {
        path:'/dashboard',
        element:<Navigate to="/" />
    
      },
      {
        path: '/',
        element: <Dashboard/>,
    },
    {
      path: '/surveys',
      element: <Surveys/>,
    },
    ]

  },
  {
    path:'/',
    element:<GuestLayout/>,
    children:[
      {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/signup',
        element: <Signup/>,
    },
    ]
  }
  
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router}/>
  </React.StrictMode>,
)    