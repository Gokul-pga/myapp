import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import supabase from './Supabase';

export default function TestAPI() {


  const [inputvalue, setinputvalue] = useState({
    name:'',
    email:'',
    password:''
  })
  const {name,email,password}=inputvalue;

  const [errorMessage, seterrorMessage] = useState(false);

  const submitHandler = async()=>{ 
    if (name !=='' && email !=='' && password !=='') {
const {error,data } = await supabase.auth.signUp({
  email: email,
  password: password,
  options:{
    first_name:name,
  }
})
if(error){
  console.log("signup",error);
}else{
  console.log(data);
  alert("Check Your Mail For Conformation");
};
      seterrorMessage(false)
      setinputvalue({
        name:'',
        email:'',
        password:'',
      });
    }else{
      seterrorMessage(true)
    }
  };


  return (
   <Box sx={{width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
     <Box sx={{width:'400px',display:'flex',}}>
      <form style={{display:'flex',flexDirection:'column'}} >
        { errorMessage && <Typography color='red'>*All Fields are mandatory</Typography> }
        <label>Name:
        <input 
        name='name' 
        type='text' 
        placeholder='Name'
        value={name}
        onChange={(e)=>{setinputvalue({...inputvalue,name:e.target.value})}}/>
        </label>

        <label>Email:
        <input
         name='email' 
         type='email' 
         placeholder='Email'
         value={email}
         onChange={(e)=>{setinputvalue({...inputvalue,email:e.target.value})}}/>
         </label>

        <label>Password:
        <input 
        name='password' 
        type='password' 
        placeholder='Password'
        value={password}
        onChange={(e)=>{setinputvalue({...inputvalue,password:e.target.value})}}/>
        </label>

        <Button variant='outlined' onClick={(e)=>{submitHandler(e);e.preventDefault()}}>Submit</Button>
      </form>
    </Box>
   </Box>
  )
}
