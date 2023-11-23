// Task 2

import { useEffect, useState } from "react";

import "./App.css";
import { useForm } from "react-hook-form";
import { db } from "./firebase";
import {
  FormControl,
  Container,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

import registrationLogo from "./assets/task1.webp";
import { fetchPost, submit } from "./Reducers/FormSlice";
import { getDocs, collection } from "firebase/firestore";
function App() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const submitHandler = async (data) => {
    const { name, email, password, confirmPassword, number } = data;
    dispatch(submit({ name, email, password, confirmPassword, number }));
    
    reset();
  };
  function validatePhoneNumber(input) {
    input.target.value = input.target.value.replace(/\D/g, "");
  }
  return (
    <>
      <Container
        className="container"
        maxWidth="lg"
        sx={{ bgcolor: "#e8d5f0", display: "flex" }}
      >
        <img src={registrationLogo} alt="" />
        <form
          onSubmit={handleSubmit(submitHandler)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.8vmax",
            justifyContent: "center",
            alignItems: "center",
            padding: "2vmax",
            width: "70%",
          }}
        >
          <h2
            style={{ fontFamily: "Roboto", fontSize: "2vmax", color: "purple" }}
          >
            Registration Form
          </h2>
          <FormControl sx={{ width: "30vmax" }}>
            <TextField
              color="secondary"
              label="Name"
              type="text"
              variant="standard"
              {...register("name", { required: true })}
            />
            {errors.name && <Alert severity="error"> Name is required</Alert>}
          </FormControl>
          <FormControl sx={{ width: "30vmax" }}>
            <TextField
              color="secondary"
              variant="standard"
              label="Email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <Alert severity="error"> Email is required</Alert>}
          </FormControl>
          <FormControl sx={{ width: "30vmax" }}>
            <TextField
              color="secondary"
              {...register("password", { required: true , maxLength : 6} )}
              variant="standard"
              label="Password"
              type="password"
            />
            {errors.password && (
              <Alert severity="error"> Password is required</Alert>
            )}
           
          </FormControl>
          <FormControl sx={{ width: "30vmax" }}>
            <TextField
              color="secondary"
              {...register("confirmPassword", { required: true })}
              variant="standard"
              label="Confirm Password"
              type="password"
            />
            {errors.confirmPassword && (
              <Alert severity="error"> Confirm Password is required</Alert>
            )}
          </FormControl>
          <FormControl sx={{ width: "30vmax" }}>
            <TextField
              color="secondary"
              {...register("number", { required: true })}
              label="Phone Number"
              sx={{ color: "white" }}
              onInput={(e) => validatePhoneNumber(e)}
              variant="standard"
              inputProps={{
                inputMode: "numeric",
                title: "Please enter a valid phone number",
                pattern: "[1-9]{1}[0-9]{9}",
                maxLength: 10,
              }}
              type="tel"
            />
            {errors.number && (
              <Alert severity="error"> Phone Number is required</Alert>
            )}
          </FormControl>
          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        </form>
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
