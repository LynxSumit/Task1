import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormControl, FormHelperText, Input, InputLabel, Container, Button, Alert, Switch } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    console.log(name , email, password, confirmPassword , number)
    return toast.error("Please enter all the fields")
  
  }
  if(password.length < 6){
    return toast.error("Password must conatain 6 characters..")
  }
if(password !== confirmPassword){
  return toast.error(" Password doesn't match...")
}
if(number.length != 10){
  return toast.error(" Invalid phone number")
}
// if(typeof number != )
console.log(name , password , email , confirmPassword , number)
setName("")
setConfirmPassword("")
setEmail("")
setPassword("")
setNumber("")
toast.success("Hurray ! Form Submitted...")

  }

  return (
    <>
    <Container maxWidth="lg" sx={{border : "1px solid purple" , background : ""}}>

    <form onSubmit={submitHandler} style={{display:"flex" , flexDirection : "column" , gap : "2.8vmax" , justifyContent : "center", alignItems : "center", padding : "2vmax" }}>
    <h2 style={{fontFamily : "Roboto" , fontSize : "2vmax"}} >Task1</h2>
      <FormControl sx={{width : "20vmax"}}  color='secondary'>
  <InputLabel htmlFor="my-input">Name </InputLabel>
  <Input value={name} onChange={e => setName(e.target.value)} type='text'  id="my-input" aria-describedby="my-helper-text" />
 
</FormControl>
      <FormControl sx={{width : "20vmax"}} color='secondary'>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input value={email} onChange={e => setEmail(e.target.value)}  type='email' id="my-input" aria-describedby="my-helper-text" />
  
</FormControl>
      <FormControl sx={{width : "20vmax"}} color='secondary'>
  <InputLabel htmlFor="my-input">Password</InputLabel>
  <Input  value={password} onChange={e => setPassword(e.target.value)}  type='password' id="my-input" aria-describedby="my-helper-text" />
  
</FormControl>
      <FormControl sx={{width : "20vmax"}} color='secondary'>
  <InputLabel  htmlFor="my-input">Confirm Password</InputLabel>
  <Input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}  type='password' id="my-input" aria-describedby="my-helper-text" />
  
</FormControl>
      <FormControl sx={{width : "20vmax"}} color='secondary'>
  <InputLabel htmlFor="my-input">Phone Number</InputLabel>
  <Input  value={number} onChange={e => setNumber(e.target.value)}  type='number' id="my-input" aria-describedby="my-helper-text" />
  
</FormControl>

<Button variant='contained' color='secondary'  type='submit'>Submit</Button>

    </form>
      
    </Container>
      <ToastContainer/>
    </>
  )
}

export default App
