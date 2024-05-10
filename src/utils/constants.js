
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
export const login_bg_IMG="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
export const API_options = {
 
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjZiOWJkZThhZGMwMTllZTUxNDgxNjUyODAxM2U5YyIsInN1YiI6IjY2MmM5YzZmYTE5OWE2MDEyODcyMDU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v4xD83EDYJopSUel9IMgM2dyTLCFnNkT1I4HHbZ5PKw'
    }
};
export const TMDM_IMG="https://image.tmdb.org/t/p/w200/";
  
export const AiApiKey="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"