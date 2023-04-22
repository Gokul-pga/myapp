import { Box, Button, FormGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import supabase from "../Supabase";


function TodoInput({setTableContents}) {
    
    const [name, setname] = useState('')
  const submitHandler = async()=>{
    if (name !=='') {
      const {error,data} = await supabase.from('todolist').insert({name})
      if (data) {
        setname(data)
        
      }else{
        console.log('EDIT ERROR',error);
      }
      setname('')
    }
  }

  const EditItems = async()=>{
    const {data,error} = await supabase.from('todolist').update({name})
    if(data){
      setTableContents(data)
    }else{
      console.log('RESULT ERROR',error);
    }
  }


  return (
    <>
      <Box
        sx={{
          width: "100%",
          height:100,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <FormGroup>
        <TextField placeholder="Create Item" size="small" value={name} onChange={(e)=>{setname(e.target.value)}}
        />
        </FormGroup>
        <Button variant="contained" onClick={()=>{submitHandler()}}>Add+</Button>
      </Box>
    </>
  );
}

export default TodoInput;
