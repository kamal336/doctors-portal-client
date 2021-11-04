import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cavityImg from '../../../images/serviceImg/cavity.png'
import flourideImg from './../../../images/serviceImg/fluoride.png'
import whiteningImg from './../../../images/serviceImg/whitening.png'

const Services = () => {
    const services = [
    
        {
            "title":"Cavity Filling",
            "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloremque atque? Porro corrupti unde ut, enim laudantium consectetur nam et.",
            "img": cavityImg
        },
        {
            "title":"Teeth Whitening",
            "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloremque atque? Porro corrupti unde ut, enim laudantium consectetur nam et.",
            "img": whiteningImg
        },  {
            "title":"Flouride Treatment",
            "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloremque atque? Porro corrupti unde ut, enim laudantium consectetur nam et.",
            "img": flourideImg
        }
        
     
    ]
    return (
        <Container style={{margin:'0 auto'}}>
            <Box sx={{ flexGrow: 1,margin:3,textAlign:'center' }}>
            <Typography fontWeight='fontWeightBold' sx={{ color: 'info.main',  }} gutterBottom variant="h4" component="div">
                    Our   Services
           </Typography>
            <Typography fontWeight='fontWeightBold' gutterBottom variant="h3" component="div">
                     Services We Provide
            </Typography>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {services.map((service, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card sx={{height: '100%',textAlign: 'center',border: 0 ,boxShadow:0  }}>
                    <CardMedia
                        component="img"
                        style={{width:'100px',margin:'0 auto',padding:'20px'}}
                        
                        image={service.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {service.title}
                        </Typography>
                        <Typography style={{fontSize:'17px'}} variant="body2" color="text.secondary">
                        {service.desc}
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Box>
        </Container>
    );
};

export default Services;