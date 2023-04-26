import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import {  useNavigate } from 'react-router-dom'

function DefaultPage() {
    const Navigate = useNavigate();
  return (
    <>
    <Box sx={{display:'flex',width:'100%'}}>
        <Stack sx={{flexDirection:{xl:"row",lg:"row",md:"row",sm:"column",xs:"column"},width:'100%',alignItems:'center',justifyContent:'space-between',gap:2}}>
            <Box sx={{backgroundColor:'palegreen',width:'700px',height:"70px",padding:'20px',textAlign:'center',borderRadius:'10px'}}>
                <Typography>Modal Websiyte</Typography>
                <Button variant='contained' onClick={()=>{Navigate('./Loginpage')}}>Click Here!</Button>
            </Box>
            <Box sx={{backgroundColor:'palegreen',width:'700px',height:"70px",padding:'20px',textAlign:'center',borderRadius:'10px'}}>
                <Typography>Email Verification Check</Typography>
                <Button variant='contained'  onClick={()=>{Navigate('./testapi')}}>Click Here!</Button>
            </Box>
            <Box sx={{backgroundColor:'palegreen',width:'700px',height:"70px",padding:'20px',textAlign:'center',borderRadius:'10px'}}>
                <Typography>CRUD Operation using Supabase</Typography>
                <Button variant='contained'  onClick={()=>{Navigate('./ToDolist')}}>Click Here!</Button>
            </Box>
            <Box sx={{backgroundColor:'palegreen',width:'700px',height:"70px",padding:'20px',textAlign:'center',borderRadius:'10px'}}>
                <Typography>Array API</Typography>
                <Button variant='contained'  onClick={()=>{Navigate('./arrayapi')}}>Click Here!</Button>
            </Box>
        </Stack>
    </Box>
    </>
  )
}

export default DefaultPage