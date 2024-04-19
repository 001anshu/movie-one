import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [check, setcheck] = useState(1);
  const handleclick = () => {
    setcheck(!check);
  };
  return (
    <div className="bg-black">
      <div className="bg-gradient-to-b from-black">
        <img
          className="absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <Header />

      <div className=" bg-black opacity-75 mx-auto rounded-lg my-48 left-0 right-0 absolute text-white  w-1/4 ">
        <h1 className="text-white text-2xl m-6   font-bold ">
          {check ? "Sign in" : "Sign Up"}
        </h1>
        {/* login form  */}
        {!check && (
          <input
            placeholder="Name"
            className=" bg-gray-600 mx-10 my-3 p-2 w-3/4  "
          />
        )}
        <input
          placeholder="Email or phone number"
          className=" bg-gray-600 mx-10 my-3 p-2 w-3/4  "
        />

        <input
          placeholder="password"
          className="   bg-gray-600 my-3 mx-10 p-2 w-3/4"
        />

        <button className="bg-red-600 p-2 my-6 mx-10 text-center px-16 rounded-lg w-3/4">
          {check ? "Sign in" : "sign up"}
        </button>
        <p
          className="my-3 mx-10 p-2 w-3/4 cursor-pointer"
          onClick={handleclick}
        >{check?"not have a account sign up now":"Already a user sign in now"}
        </p>
      </div>
    </div>
  );
};

export default Login;
