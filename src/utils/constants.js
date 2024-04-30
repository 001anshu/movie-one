
import { getAuth } from "firebase/auth";
import app from "../components/firebase";
export const formValidation=(email,password)=>{
  const isValidMail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if(!isValidMail)return("Please Enter a Valid E-Mail")
  else if(!isValidPassword)return("Your password must contain at least one capital letter, one small letter, one special character, one digit, and be more than 7 characters long ");
  else return(null);
}
export const logo = "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
export const auth =getAuth(app);
export const login_bg_IMG="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
export const API_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmZhNmJmZDY5NzVhODY2MjcyMmVhMmVkZjk1YTE1MSIsInN1YiI6IjY2MmM5YzZmYTE5OWE2MDEyODcyMDU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nDhCgdUqu80HISSzqO2xkSH6iQMqM8KUUXsVpqJEjEw'
  }
};