import { Box, Rating, Stack } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductCard({product}) {
 
  const {title,image,description,rating}=product
  const {rate}=rating
  return (
    <>
    <Box sx={{width:'800px',backgroundColor:'lavender',borderRadius:'20px 20px',alignItems:'center',justifyContent:'center',display:'flex'}}>
      <Card sx={{boxShadow:'0 0 10px black'}}>
     <Stack  sx={{borderRadius:'20px',height:300,width:"800px",justifyContent:'center',alignItems:'center'}}>
       <img src={image} alt='loading...' style={{height:'95%',width:'50%'}}/>
     </Stack>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Rating  name="half-rating" defaultValue={rate} readOnly/>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Box>
      </>
  )
}

export default ProductCard