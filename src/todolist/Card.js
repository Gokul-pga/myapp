import { Delete, Edit } from '@mui/icons-material'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import supabase from '../Supabase'


function Card({list,DeleteTodolist,EditItems}) {
  const {name,id}=list 
    const DeleteHandler = async()=>{
      const {error} = await supabase.from('todolist').delete().eq('id',id)
      if (error) {
        console.log("DELETE",error);
      }
      DeleteTodolist()
    }

   

  return (
    <>
  
    <Stack direction='row' sx={{width:'50%',height:30,justifyContent:'space-between',alignItems:'center',backgroundColor:'#d9d9d9',padding:'20px',borderRadius:'10px'}}>
    <Typography>{name}</Typography>
    <Box>
        <IconButton onClick={()=>{EditItems()}}><Edit/></IconButton>
        <IconButton onClick={()=>{DeleteHandler()}}><Delete/></IconButton>
    </Box>
    </Stack>
    </>
  )
}

export default Card;