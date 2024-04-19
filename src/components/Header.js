import React from "react";
import { logo } from "../utils/constants";

const Header = () => {
  return (
    <div className=" absolute bg-gradient-to-b from-black items-center">
  
      <img className="  h-14  px-8 " src={logo} alt="logo" />
    </div>
  );
};

export default Header;
