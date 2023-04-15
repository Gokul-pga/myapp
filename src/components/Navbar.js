import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Box, IconButton } from '@mui/material';

function Navbar() {
    const navLists = [
        {
          title: <HomeOutlinedIcon sx={{ fontSize: '30px', borderRadius: '5px', padding: '3px' ,'&:hover':{ color: '#4dd2ff', backgroundColor: '#4d4dff',transform:"scale(1.2)",transition:'.3s'}}} />,
          to: ''
        },
        {
          title: <GroupsOutlinedIcon sx={{ fontSize: '30px', borderRadius: '5px', padding: '3px' ,'&:hover':{ color: '#4dd2ff', backgroundColor: '#4d4dff',transform:"scale(1.2)",transition:'.3s'}}}/>,
          to: ''
        },
        {
          title: <MessageOutlinedIcon sx={{ fontSize: '30px', borderRadius: '5px', padding: '3px' ,'&:hover':{ color: '#4dd2ff', backgroundColor: '#4d4dff',transform:"scale(1.2)",transition:'.3s'}}} />,
          to: ''
        },
        {
          title: <AccessTimeOutlinedIcon sx={{ fontSize: '30px', borderRadius: '5px', padding: '3px' ,'&:hover':{ color: '#4dd2ff', backgroundColor: '#4d4dff',transform:"scale(1.2)",transition:'.3s'}}} />
          ,
          to: ''
        },
        {
          title: <TourOutlinedIcon sx={{ fontSize: '30px', borderRadius: '5px', padding: '3px' ,'&:hover':{ color: '#4dd2ff', backgroundColor: '#4d4dff',transform:"scale(1.2)",transition:'.3s'}}} />,
          to: ''
        },
        {
          title: <SettingsOutlinedIcon sx={{ fontSize: '30px', borderRadius: '5px', padding: '3px' ,'&:hover':{ color: '#4dd2ff', backgroundColor: '#4d4dff',transform:"scale(1.2)",transition:'.3s'}}} />,
          to: ''
        },
      ]
  return (
    <>

    <Box sx={{height:'80px',width:500,color:'black',alignItems:'center',display:'flex',justifyContent:'center',position:'fixed',borderRadius:'0 0 25px 25px'}}>
          <Box sx={{alignItems:'center',display:'flex',justifyContent:'space-between',height:'100%',width:'95%',backgroundColor:'#a6a6a6',borderRadius:'0 0 25px 25px'}} >
          {navLists.map((nav,index) => {
              return (<IconButton key={index}>{nav.title}</IconButton>)
            })}
          </Box>
        </Box>
        
    </>
  )
}

export default Navbar;