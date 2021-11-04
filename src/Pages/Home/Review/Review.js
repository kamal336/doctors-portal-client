
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Paper  from '@mui/material/Paper';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { Box } from '@mui/system';

const Review = () => {
    return (
      <Container>
      <Grid container spacing={2}>
        <Grid item md={4}>
        <Paper  elevation={1} sx={{backgroundColor:'#0EC4C0 ',display:'flex',justifyContent:'space-evenly',alignItems:'center',color:'white',padding:'14px'}}>
           <AccessAlarmIcon style={{ fontSize: '60px' }}/>
        <Box>
        <Typography variant="h6">
           Opening Hour
         </Typography>
         <Typography><small>Our opening time: 9:00 am to 8:00 pm </small></Typography>
        </Box>
        </Paper>
        </Grid>
        <Grid item md={4}>
        <Paper  elevation={1} sx={{backgroundColor:'#344544 ',display:'flex',justifyContent:'space-evenly',alignItems:'center',color:'white',padding:'14px'}}>
          <AddLocationIcon style={{ fontSize: '60px' }}/>
         <Box>
         <Typography variant="h6">
           Visit our location
         </Typography>
         <Typography>
           Eidgah,Cox's Bazar,Bangladesh
         </Typography>
         </Box>
        </Paper>
        </Grid>
       <Grid item md={4}>
       <Paper   elevation={1} sx={{backgroundColor:'#0EC4C0 ',display:'flex',justifyContent:'space-evenly',alignItems:'center',color:'white',padding:'14px'}}>
         <WifiCalling3Icon style={{ fontSize: '60px' }}/>
         <Box>
         <Typography variant="h6">
           Contact us now
         </Typography>
         
         <Typography>
           +45435345435
         </Typography>
         </Box>
        </Paper>
       </Grid>
      </Grid>
    </Container>
    );
};

export default Review;