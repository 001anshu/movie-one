import React from "react";
import Header from "./Header";
import { login_bg_IMG } from "../utils/constants";

const GptSearchComp = () => {
  const handleForm=(e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <div className="absolute -z-10 bg-gradient-to-b from-black">
        <img
          className=""
          src={login_bg_IMG}
          alt="logo"
        />
      </div>
    <div className="pt-[20%] ">
      
      <form className=" bg-black flex justify-center items-center w-1/2 rounded-lg ml-auto mr-auto ">
        <input
          type="text " 
          className=" p-4 m-2  w-3/4 rounded-lg "
          placeholder="What do you want to see today"
        />
        <button onClick={handleForm} className="bg-red-500 text-white p-4 m-2 rounded-lg">Search</button>
      </form>
    </div>
    </div>
  );
};

export default GptSearchComp;
