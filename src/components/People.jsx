import React from 'react'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Stack, Typography } from '@mui/material';
import Template from './Template';


function People() {
  return (
    <>
      <Stack flex={1} sx={{  borderRadius: '20px 0 0 20px', margin: '5px' ,display:{xl:'block',lg:'block',md:'none',sm:'none',xs:'none'}}}>
       <Box sx={{position:'fixed' ,backgroundColor: '#e6e6e6',width:'300px',height:'100vh',borderRadius:'20px 0 0 20px'}}>
        <Box sx={{ margin: '10px' }}>
          <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 0, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: '15px' }}>
          <Typography marginBottom='9px' fontWeight='bold' color='#8c8c8c'>YOUR GROUP</Typography>
          <Template name='Figam Community' />
          <Template name='Sketch Community' />


        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', margin: '15px' }}>
          <Typography marginBottom='9px' fontWeight='bold' color='#8c8c8c'>CHATS </Typography>
          <Template name='Sarah' time='10 min' />
          <Template name='GokulAnand' time='Online' />
          <Template name='Jerin' time='30 min' />
          <Template name='Eraiyarul' time='15 min' />
          <Template name='Nishanth' time='Online' />
          <Template name='Mahesh' time='Just now' />
          <Template name='Deva' time='Online' />



        </Box>
        </Box>
      </Stack>
    </>
  )
}

export default People;