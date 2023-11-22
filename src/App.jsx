import {  useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormControl, FormHelperText, Input, InputLabel, Container, Button, Alert, Switch, TextField } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import registrationLogo from "./assets/task1.webp"
import {Lock} from "@mui/icons-material"
function App() {
  // const [form, setForm] = useState({
  //   name : "",
  //   email : "",
  //   password : "",
  //   confirmPassword : "",
  //   phoneNumber : ""
  // });

  // const ForChangeHandler = (e)=>{

  // }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [number, setNumber] = useState('');
// const [isCompleted, setIsCompleted] = useState(false);

  const submitHandler =(e) => {
e.preventDefault()
  if(!name || !email || !password || !confirmPassword || !number){
  
    return toast.error("Please enter all the fields")
  
  }
  if(password.length < 6){
    return toast.error("Password must conatain 6 characters..")
  }
if(password !== confirmPassword){
  return toast.error(" Password doesn't match...")
}
// if(number.length != 10){
//   return toast.error(" Invalid phone number")
// }
// if(typeof number != )
console.log(name , password , email , confirmPassword , number)
console.log(typeof number)
setName("")
setConfirmPassword("")
setEmail("")
setPassword("")
setNumber("")
toast.success("Hurray ! Form Submitted...")

  }
  function validatePhoneNumber(input){
    input.target.value = input.target.value.replace(/\D/g, '');

  }
  return (
    <>
    <Container className='container' maxWidth="lg" sx={{ bgcolor : "#e8d5f0", display : "flex"}}>
<img src={registrationLogo} alt="" />
    <form onSubmit={submitHandler} style={{display:"flex" , flexDirection : "column" , gap : "2.8vmax" ,  justifyContent : "center", alignItems : "center", padding : "2vmax", width : "70%" }}>
    <h2 style={{fontFamily : "Roboto" , fontSize : "2vmax", color: "purple"}} >Registration Form</h2>
      <FormControl sx={{width : "30vmax"}} >
  
  <TextField value={name} color='secondary' required onChange={e => setName(e.target.value)} label="Name" type='text' variant='standard'   id="my-input" aria-describedby="my-helper-text" />
 
</FormControl>
      <FormControl sx={{width : "30vmax"}} >
  {/* <InputLabel htmlFor="my-input">Email address</InputLabel> */}
  <TextField value={email} color='secondary' required onChange={e => setEmail(e.target.value)} variant='standard'  label="Email" type='email' id="my-input" aria-describedby="my-helper-text" />
  
</FormControl>
      <FormControl sx={{width : "30vmax"}} >
  {/* <InputLabel htmlFor="my-input">Password</InputLabel> */}
  {/* <Lock/> */}
  <TextField color='secondary'  value={password} required onChange={e => setPassword(e.target.value)} variant='standard' label="Password" type='password' id="my-input" aria-describedby="my-helper-text" />
  
</FormControl>
      <FormControl sx={{width : "30vmax"}} >
  {/* <InputLabel  htmlFor="my-input">Confirm Password</InputLabel> */}
  <TextField  color='secondary' value={confirmPassword} required onChange={e => setConfirmPassword(e.target.value)} variant='standard' label="Confirm Password"  type='password' id="my-input" aria-describedby="my-helper-text" />
  
</FormControl>
      <FormControl sx={{width : "30vmax"}} >
  {/* <InputLabel htmlFor="my-input">Phone Number</InputLabel> */}
  <TextField  color='secondary'   required label="Phone Number" sx={{color : "white"}} onInput={(e) => validatePhoneNumber(e)}   value={number} variant='standard' onChange={e => setNumber(e.target.value)} inputProps={{ inputMode : "numeric",  title:"Please enter a valid phone number" ,pattern:"[1-9]{1}[0-9]{9}", maxLength : 10}}  type='tel'  id="my-input" aria-describedby="my-helper-text" />
  
  
</FormControl>

<Button variant='contained' color='secondary'  type='submit'>Submit</Button>

    </form>
      
    </Container>
      <ToastContainer/>
    </>
  )
}

export default App
