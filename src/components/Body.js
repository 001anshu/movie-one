import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'




const Body = () => {

  
  const approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browser",
      element:<Browser/>
    },
    
  ])

  
  return (
    <div className=''>
      <RouterProvider router={approuter}/>

    </div>
  )
}

export default Body