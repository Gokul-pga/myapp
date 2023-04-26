import React, { useEffect, useState } from "react";
import ContainerTodo from "./ContainerTodo";
import supabase from "../Supabase";
import { Box, Button, FormGroup, TextField } from "@mui/material";


function ToDolist() {

  const [tableContents, setTableContents] = useState([]);
  const getItems = async()=>{
    const {data,error} = await supabase.from('todolist').select()
    if(data){
      setTableContents(data)
    }else{
      console.log('RESULT ERROR',error);
    }
  }
  

  useEffect(() => {
    getItems()
  }, )
  
  // delete 
  // function DeleteTodolist(id) {
  //   setTableContents((prev)=>{
  //       return prev.filter((text)=>
  //           text.id !== id
  //       )
  //   })
  // }
  //input
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
    const {data,error} = await supabase.from('todolist').update()
    if(data){
      setname(data)
    }else{
      console.log('RESULT ERROR',error);
    }
  }

  return (
    <>
    <Box sx={{width:'100%'}} >
      <Box
        maxWidth={"xl"}
        sx={{
          height:'100vh',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor:'#f2f2f2',
          gap: 2,
        }}
      >

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
        {tableContents.map((list,index)=>{
            return(<ContainerTodo key={index}  list={list} EditItems={EditItems}/>)
        })} 
        
      </Box>
      </Box>
    </>
  );
}

export default ToDolist;
