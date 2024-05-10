
import { getAuth } from "firebase/auth";
import app from "../components/firebase";
export const formValidation=(email,password)=>{
  const isValidMail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if(!isValidMail)return("Please Enter a Valid E-Mail")
  else if(!isValidPassword)return("Your password must contain at least one capital letter, one small letter, one special character, one digit, and be more than 7 characters long ");
  else return(null);
}
export const logo = "https://img.icons8.com/?size=256&id=20519&format=png"
export const auth =getAuth(app);
export const login_bg_IMG="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/1ac1cee7-5580-4cfa-b701-99d1a8f2d148/IN-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ebbef551-d229-4865-8cdc-fb00f8960227_large.jpg"
export const API_options = {
 
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjZiOWJkZThhZGMwMTllZTUxNDgxNjUyODAxM2U5YyIsInN1YiI6IjY2MmM5YzZmYTE5OWE2MDEyODcyMDU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v4xD83EDYJopSUel9IMgM2dyTLCFnNkT1I4HHbZ5PKw'
    }
};
export const TMDM_IMG="https://image.tmdb.org/t/p/w200/";
  