import { Box } from "@mui/material";
import React from "react";
import Card from "./Card";

function ContainerTodo({list,DeleteTodolist}) {
  
  return (
    <>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Card DeleteTodolist={DeleteTodolist} list={list}/>
      </Box>
    </>
  );
}

export default ContainerTodo;
