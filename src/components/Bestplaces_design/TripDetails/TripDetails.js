import React from 'react';
import { Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import useStyle from './Style';


export default function TripDetails({place}) {
  const classes = useStyle();

  return (
    <card elevation={6}>
      <CardMedia
          style={{height:350}}
          image={place.photo ? place.photo.images.large.url:'https://www.pexels.com/photo/brown-wooden-house-on-edge-of-cliff-1028225/'}
          title= {place.name}
          
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle'>Price</Typography>
          <Typography  gutterBottom variant='subtitle'>{'$'+place.num_reviews}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle'>Rating</Typography>
          <Typography  gutterBottom variant='subtitle'>{place.Rating}</Typography>
        </Box>
        {place.address_obj && (
          <Typography style={{color:'white'}} gutterBottom variant='subtitle' color='textSecondary' className={classes.subtitle}>
                <LocationOnIcon /> {place.address_obj.city} ,{place.address_obj.street1},{place.address_obj.postalcode}
          </Typography>
        )}
        {place.city && (
          <Typography gutterBottom variant='subtitle' color='textSecondary' className={classes.spacing}>
                <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button style={{borderRadius:'8px', color:'green'}} size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Explore
        </Button>
        <Button style={{borderRadius:'8px', color:'green'}} size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>


    </card>
    
  )
}
