export const formValidation=(email,password)=>{
  const isValidMail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if(!isValidMail)return("Please Enter a Valid E-Mail")
  else if(!isValidPassword)return("Your password must contain at least one capital letter, one small letter, one special character, one digit, and be more than 7 characters long ");
  else return(null);
}
export const logo = "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
