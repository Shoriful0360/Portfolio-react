import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import Details from './component/Details.jsx';
import Main from './layout/Main.jsx';
import AuthProvider from './component/Provider/AuthProvider.jsx';
import Education from './component/resume section/Education.jsx';
import Professional from './component/resume section/Professional.jsx';
import Experience from './component/resume section/Experience.jsx';
import Interview from './component/resume section/Interview.jsx';


const router=createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    children:[
     {
      path:'/education',
      element:<Education/>
     },
     {
      path:'/professional',
      element:<Professional/>
     },
     {
      path:'/experience',
      element:<Experience/>
     },
     {
      path:'/interview',
      element:<Interview/>
     }
    ]
  },
  {
    path:'/details/:id',
    element:<Details></Details>,
    // loader:({params})=>fetch(`/detail.json/${params.id}`)
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<div className=' bg-[#ECF0F3] font-serif'>
  <AuthProvider>
  <RouterProvider router={router}>

</RouterProvider>
  </AuthProvider>

</div>
  </StrictMode>,
)
