import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
let initialState = {
    form : 
        {
            name : "",
            email : "",
            password : "",
            confirmPassword : "",
            number : ""
        }
    
}

export const formSlice = createSlice({
    name : "Form",
    initialState,
    reducers : {
        submit : (state , action) => {
            const data = {
                name : action.payload.name,
                email : action.payload.email,
                password : action.payload.password,
                confirmPassword : action.payload.confirmPassword,
                number : action.payload.number
            }

            if(!data.name || !data.email || !data.password || !data.confirmPassword || !data.number){
  
  return toast.error("Please enter all the fields")

}
console.log(data.password)
if(data.password.length < 6){
  return toast.error("Password must conatain 6 characters..")
}
if(data.password !== data.confirmPassword){
return toast.error(" Password doesn't match...")
}
// if(number.length != 10){
//   return toast.error(" Invalid phone number")
// }
// if(typeof number != )
console.log(data.name , data.email , data.password , data.confirmPassword , data.number)


toast.success("Hurray ! Form Submitted...")


            state.form = data
        }
    }
})

export const {submit} = formSlice.actions
export default formSlice.reducer;