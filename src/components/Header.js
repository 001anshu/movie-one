import { logo } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { adduser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { removeuser } from "../utils/userSlice";
import { checkGptSearch } from "../utils/GptSearchSlice";
import GptSearchComp from "./GptSearchComp";

const Header = () => {
  
  const user1 = useSelector((store) => store.user);
  const auth = getAuth();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const gpt=useSelector((store)=>store?.gpt?.checkGpt)
 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, phoneNumber, email } = user;
        dispatch(
          adduser({
            uid: uid,
            name: displayName,
            number: phoneNumber,
            Email: email,
          })
        );
        if (window.location.pathname === "/") {
          Navigate("/browser");
        }
        // ...
      } else {
        dispatch(removeuser);
        Navigate("/");
        // User is signed out
        // ...
      }
    });
  }, []);
  const handleCheck=()=>{
    dispatch(checkGptSearch())
  }
  const handleclick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeuser());
        // Navigate("/");

        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  return (
    <div className=" absolute w-full flex px-8 py-2 z-10 justify-between  bg-gradient-to-b from-black ">
      <img className="   h-28  px-8 " src={logo} alt="logo" />

      <div>
        {user1 && (
          <>
          <div className="" >
           
          
            <button className="bg-blue-300 text-white p-3  m-6  rounded-xl " onClick={handleCheck}>
              {gpt?"Home":"Movies Gpt"}
              
            </button>
            <button
              className="bg bg-red-500 rounded-md p-3 m-6  text-white cursor-pointer "
              onClick={handleclick}
            >
              Hey 
              sign out
            </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
