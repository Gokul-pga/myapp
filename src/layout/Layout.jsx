import  Box  from '@mui/material/Box';
import React from 'react'
import People from '../components/People'
import Comments from '../components/Comments'
import Stack from '@mui/material/Stack';
import Navbar from '../components/Navbar';



function Layout({children}) {

 
  return (
    <>

<Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: 'white', justifyContent: 'space-between', margin: '5px' }}>
        <People />
       
        <Stack spacing={2} flex={2} sx={{alignItems:'center'}} >
        <Navbar/>

        <Box sx={{marginTop:50,width:'100%',height:100}}></Box>
        {children}
        </Stack > 
       
       <Comments />
    
        
        
        
        </Box>
    </>
  )
}

export default Layout;