import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import appoinmentImg from './../../../images/doctorImg/doctor.png';
import backgroundImg from './../../../images/appointment-bg.png';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';



const backgrounStyle = {
  background:`url(${backgroundImg})`,
  backgroundColor: '#525876 ',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: 150
}

const Apponment = () => {
    return (
       
            <Box sx={{ flexGrow: 1 }} style={backgrounStyle}>
            <Container>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item xs={5}>
             <img style={{marginTop:"-110px"}} width="420px" height="500px" src={appoinmentImg} alt="" />
            </Grid>
            <Grid item xs={7}>
             <Typography  variant="h5" sx={{ color: 'info.main',lineHeight: 3 }}>
               Appoinment
             </Typography>
             <Typography style={{color:'white'}} gutterBottom variant="h2" component="div">
                Make an appoinment 
                <br />
                 Today
              </Typography>
              <Typography style={{color:'white'}} gutterBottom variant="h6" component="div">
                It's a long established fact that a reader will destructed by the readable 
                <br />
                content of a page when looking it is.
              </Typography>
              <Button sx={{marginTop: 2,marginBottom:3 }} variant="contained" size="large">
                Lern More
             </Button>
            </Grid>
            </Grid>
            </Container>
          </Box>
    
    );
};

export default Apponment;