import { logo } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { adduser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { removeuser } from "../utils/userSlice";

const Header = () => {
  const user1 = useSelector((store) => store.user);
  const auth = getAuth();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

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
        Navigate("/browser");
        // ...
      } else {
        dispatch(removeuser)
        Navigate("/");
        // User is signed out
        // ...
      }
    });
  },[])

  const handleclick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeuser());
        Navigate("/");

        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  return (
    <div className=" absolute w-full flex justify-between  bg-gradient-to-b from-black items-center">
      <div>
        <img className="   h-14  px-8 " src={logo} alt="logo" />
      </div>
      <div>
        {user1 && (
          <button
            className="bg bg-red-500 text-white
       cursor-pointer m-2
       "
            onClick={handleclick}
          >
            <p>Hey </p>
            sign out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
