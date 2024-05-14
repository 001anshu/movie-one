import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GptSearchComp from './GptSearchComp'
import DetailsMovie from './DetailsMovie'




const Body = () => {

  
  const approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browser",
      element:<Browser/>,
      
    },
    {
      path:"/moviedetails/:movieId",
      element:<DetailsMovie/>,
    },
    {
      path:"gptsearch",
      element:<GptSearchComp/>
    }
    
  ])

  
  return (
    <div className=''>
      <RouterProvider router={approuter}/>

    </div>
  )
}

export default Body