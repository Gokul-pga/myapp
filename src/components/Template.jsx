import Box  from '@mui/material/Box'
import React from 'react'
import  Typography  from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';


function Template(props) {
  return (
    <>
    <Box>
    <Box  sx={{display:'flex',flexDirection:'row',marginBottom:'15px',width:'200px',justifyContent:'space-between'}}> 
    <Box> <AccountCircle /> </Box>
    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',marginLeft:'7px'}}> <Typography>{props.name}</Typography>
    <Typography>{props.time}</Typography></Box>
    </Box>
    </Box>
    </>
  )
}

export default Template;