import { Box } from "@mui/material";
import React from "react";
import Card from "./Card";

function ContainerTodo({list,EditItems}) {
  
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
        <Card  list={list} EditItems={EditItems}/>
      </Box>
    </>
  );
}

export default ContainerTodo;
