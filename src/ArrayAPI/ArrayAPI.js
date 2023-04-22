import { Box, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function ArrayAPI() {

        const [display, setDisplay] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        setDisplay(Arraylist);
      }, 5000);
    }, [])
    

    const Arraylist = [
        {
            title: <MenuIcon/>,
            
        },
        {
            title: <FmdGoodIcon/>,
            
        },
        {
            title: <AccountCircleIcon/>,
           
        },
        {
            title: <SupervisorAccountIcon/>,
            
        }
    ]

  return (
    <>
    <Box sx={{color:'red',fontSize:'20px',width:'100%',display:'flex',justifyContent:'center',margin:'15px'}}>* TextAPI have been displayed after 5 seconds</Box>
    {display.length === 0 && <p>Loading....</p>}
    <Box sx={{height:'100px',width:'100%',display:'flex',backgroundColor:'palegreen',alignItems:'center',justifyContent:'space-around'}}>
    {display.map((nav)=>{
        return(<IconButton>{nav.title}</IconButton>)
    })}
    </Box>
    </>
  )
}

export default ArrayAPI;