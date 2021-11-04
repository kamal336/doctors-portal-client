import { Container, Typography } from '@mui/material';
import React from 'react';
import  Box  from '@mui/material/Box';
import  Grid  from '@mui/material/Grid';
import Button from '@mui/material/Button';
import treatmentImg from './../../../images/treatment.png'
const Treatment = () => {
    return (
        <Container style={{marginTop:'50px'}}>
        <Box sx={{ flexGrow: 1 }} >
        
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item xs={5}>
         <img  width="420px" height="450px" src={treatmentImg} alt="" />
        </Grid>
        <Grid item xs={7}>
         <Typography gutterBottom variant="h2" component="div">
           Exceptional Dental
           <br />
           On Your Term
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sunt aliquam, voluptate minus mollitia consequuntur optio vero itaque alias nulla ullam blanditiis asperiores impedit dolorem laborum. Sint impedit labore dolores beatae, distinctio consequuntur voluptate animi excepturi nulla! Cumque quae incidunt at. Dolorum voluptatum harum, reiciendis et assumenda quam numquam explicabo asperiores voluptate, fuga quas voluptatibus architecto, odit a iure dicta.
          </Typography>
          <Button sx={{marginTop: 2,marginBottom:3 }} variant="contained" size="large">
            Lern More
         </Button>
        </Grid>
        </Grid>
       
      </Box>
      </Container>
    );
};

export default Treatment;