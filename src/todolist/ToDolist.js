import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import ContainerTodo from "./ContainerTodo";
import supabase from "../Supabase";

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
  }, [tableContents])
  
  // delete 
  function DeleteTodolist(id) {
    setTableContents((prev)=>{
        return prev.filter((text)=>
            text.id !== id
        )
    })
  }

  return (
    <>
    <Box sx={{width:'100%',display:{xl:'block',lg:'block',md:'none',sm:'none',xs:'none'}}} >
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

        <TodoInput setTableContents={setTableContents}/>
        {tableContents.map((list,index)=>{
            return(<ContainerTodo key={index}  list={list} DeleteTodolist={DeleteTodolist}/>)
        })} 
        
      </Box>
      </Box>
    </>
  );
}

export default ToDolist;
