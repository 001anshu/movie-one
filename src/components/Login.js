import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidation, login_bg_IMG } from "../utils/constants";
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [check, setcheck] = useState(1);
  const email = useRef(null);
  const password = useRef(null);
  const Navigate=useNavigate();

  const handleclick = () => {
    setcheck(!check);
  };
  const [errorMessage, setErrorMessage] = useState(null);

  const handleform = () => {
    const message = formValidation(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!check) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
       
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);

        });
    }
  };

  return (
    <div className="bg-black">
      
      <Header />
      <div className="absolute  bg-gradient-to-b from-black">
        <img
          className=""
          src={login_bg_IMG}
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" bg-black opacity-75 mx-auto rounded-lg my-48 left-0 right-0 absolute text-white  w-1/4 "
      >
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
          ref={email}
          placeholder="Email or phone number"
          className=" bg-gray-600 mx-10 my-3 p-2 w-3/4  "
        />

        <input
          type="password"
          ref={password}
          placeholder="password"
          className="   bg-gray-600 my-3 mx-10 p-2 w-3/4"
        />
        <p className="text-red-500 my-3 mx-10">{errorMessage}</p>
        <button
          onClick={handleform}
          className="bg-red-600 p-2 my-6 mx-10 text-center px-16 rounded-lg w-3/4"
        >
          {check ? "Sign in" : "sign up"}
        </button>
        <p
          className="my-3 mx-10 p-2 w-3/4 cursor-pointer"
          onClick={handleclick}
        >
          {check
            ? "not have a account sign up now"
            : "Already a user sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
