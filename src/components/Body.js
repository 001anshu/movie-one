import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'


const Body = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,displayName,phoneNumber,email} = user;
        dispatch(adduser({
          uid:uid,
          name:displayName,
          number:phoneNumber,
          Email:email
        }));
        // ...
      } else {
        dispatch(removeuser)
        // User is signed out
        // ...
      }
    });
  },[])
  const approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browser",
      element:<Browser/>
    }
  ])

  
  return (
    <div className=''>
      <RouterProvider router={approuter}/>

    </div>
  )
}

export default Body