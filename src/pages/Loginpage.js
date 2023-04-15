import {
  Box,
  Button,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../Supabase";

export default function Loginpage() {

  const Navigate = useNavigate();

  const [open, setopen] = useState(false)
  const [inputData, setinputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validator, setvalidator] = useState(false);
  const { name, password, email } = inputData;

  // signup page submithandler
  const handleSubmit = async() => {

    if (name !== "" && email !== "" && password !== "") {
      const {error}=await supabase.auth.signUp({
        email:email,
        password:password
      })
      if(error){
        console.log("SIGNUP",error);
      }else{
        alert("For Conformation check your email")
      }

      setvalidator(false);
      setinputData({
        name: "",
        email: "",
        password: "",
      });
    } else {
      setvalidator(true);
    }
  };

      // login page submithandler
  const submitHandler = async() => {
    if (email !=="" && password !== "") {

const {error}=await supabase.auth.signInWithPassword({
  email:email,
  password:password,
})
if(error){
  console.log("LOGIN",error);
}

      setvalidator(false);
      setinputData({
        email: "",
        password: "",
      });
      Navigate('/Website')
    } else {
      setvalidator(true);
    }
  };

  return (
            // {!open?(<signin/>):(<Login/>)} ---- syntaxt for signin & login page in single js file
            // {!comment? <icon/> : <Comment/>}

      <>

      {/* //login form */}
      {!open?(
      <>
      <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: "linear-gradient(to bottom right,#1a53ff,#ff1aff)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "800px",
          height: "600px",
          backgroundColor:'#cccccc',
          padding: "20px",
        }}
      >
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "space-around",
            width: "350px",
            height:'350px',
            fontSize: "35px",
            backgroundColor:'palegreen',
            backgroundImage:
            'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.empuls.io%2Fbest-motivational-quotes-for-employees%2F&psig=AOvVaw1wRJzSi63AkCv4WIXmPH_g&ust=1681400016425000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjBwafVpP4CFQAAAAAdAAAAABAE")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
        >
          <Box>LogIn</Box>
          <Box sx={{ fontSize:"35px"}}>
            <Typography>Start Your Journey</Typography>
            <Typography>Today.</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "350px",
            marginBottom: "10px",
          }}
        >
          {validator && (
            <Typography color="red" marginBottom='10px'>* All fields are mandatory</Typography>
          )}
          <FormGroup sx={{ marginBottom: "10px" }}>
            <TextField
              label="email"
              type="text"
              value={email}
              variant="outlined"
              onChange={(e) => {
                setinputData({ ...inputData, email: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup sx={{ marginBottom: "10px" }}>
            <TextField
              label="password"
              type="password"
              value={password}
              variant="outlined"
              onChange={(e) => {
                setinputData({ ...inputData, password: e.target.value });
              }}
            />
          </FormGroup>

          <Button
            sx={{ mt: "15px" }}
            variant="contained"
            onClick={(e) => {
              submitHandler(e);
              e.preventDefault();
             
            }}
          >
            Submit
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              mt: "15px",
            }}
          >
            <Typography marginTop="5px">Don't have an account?</Typography>
            <Button fontWeight="Bold"
            onClick={()=>{
              setopen(true);
              setvalidator(false)
            }}
            >Sign up</Button>
          </Box>
        </Box>
      </Stack>
    </Box>
      </>
      ):(
      


    <>
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: "linear-gradient(to bottom right,#1a53ff,#ff1aff)",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "800px",
          height: "600px",
          backgroundColor:'#cccccc',
          padding: "20px",
        }}
      >
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "space-around",
            width: "350px",
            height:'350px',
            fontSize: "35px",
          }}
        >
          <Box>SignUp</Box>
          <Box sx={{ fontSize:"35px"}}>
            <Typography>Start Your Journey</Typography>
            <Typography>Today.</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "350px",
            marginBottom: "10px",
          }}
        >
          {validator && (
            <Typography color="red" marginBottom='10px'>* All fields are mandatory</Typography>
          )}
          <FormGroup sx={{ marginBottom: "10px" }}>
            <TextField
              label="Name"
              type="text"
              value={name}
              variant="outlined"
              onChange={(e) => {
                setinputData({ ...inputData, name: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup sx={{ marginBottom: "10px" }}>
            <TextField
              label="email"
              type="text"
              value={email}
              variant="outlined"
              onChange={(e) => {
                setinputData({ ...inputData, email: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup sx={{ marginBottom: "10px" }}>
            <TextField
              label="password"
              type="password"
              value={password}
              variant="outlined"
              onChange={(e) => {
                setinputData({ ...inputData, password: e.target.value });
              }}
            />
          </FormGroup>

          <Button
            sx={{ mt: "15px" }}
            variant="contained"
            onClick={(e) => {
              handleSubmit(e);
              e.preventDefault();
            }}
          >
            Create Account
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              mt: "15px",
            }}
          >
            <Typography marginTop="5px">Already  have an account?</Typography>
            <Button fontWeight="Bold"
            onClick={()=>{
              setopen(false);
              setvalidator(false)
            }}
            >LogIN</Button>
          </Box>
        </Box>
      </Stack>
    </Box>
    
    </>
    )}
    </>
  );
}
