import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import {toast} from "react-toastify"
import { db } from "../firebase";
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
        submit : async (state , action) => {
            const data = {
                name : action.payload.name,
                email : action.payload.email,
                password : action.payload.password,
                confirmPassword : action.payload.confirmPassword,
                number : action.payload.number
            }

const {name,email,password , confirmPassword, number} = data
 
if(data.password.length < 6){
  return toast.error("Password must conatain 6 characters..")
}
if(data.password !== data.confirmPassword){
return toast.error(" Password doesn't match...")
}
try {
    await addDoc(collection(db, "Registration"), {
        data: { name, email, password, confirmPassword, number },
      });
   
    } catch (e) {
      console.error("Error adding document: ", e);
    }



toast.success("Hurray ! Form Submitted...")


            state.form = data
        },

        fetchPost : async () => {
    await getDocs(collection(db, "Registration")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      
      console.log( newData);
    });
  }


    }
})

export const {submit , fetchPost} = formSlice.actions
export default formSlice.reducer;