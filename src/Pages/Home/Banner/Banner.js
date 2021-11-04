import React from 'react';
import  Box  from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import bannerBg from './../../../images/banner/chair.png';
import  Grid  from '@mui/material/Grid';
import  Button  from '@mui/material/Button';

const bannerBackground = {
    // background: `url(${bannerBg})`,
}

const Banner = () => {
    return (
        <Box style={bannerBackground} >
           <Container style={{padding:'100px'}}>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
               
                <Grid item xs={6} >
                <Typography fontWeight='fontWeightBold' gutterBottom variant="h3" component="div">
                Your New Smile
                <br />
                Start Here
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus vel a ullam rem, asperiores magnam. Praesentium beatae rerum non nostrum.
                </Typography>
                <Button sx={{marginTop: 2,marginBottom:3 }} variant="contained" size="large">
                    Lern More
                </Button>
                </Grid>
                <Grid item xs={5}>
                <img  width="100%"  src={bannerBg} alt="" />
                </Grid>
                </Grid>
               
           </Container>
        </Box>
    );
};

export default Banner;