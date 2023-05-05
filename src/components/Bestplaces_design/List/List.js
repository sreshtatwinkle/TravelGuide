import React,{useState} from 'react';
import {Grid,Typography, withWidth} from '@material-ui/core';
import  useStyle from './Style';
import {Responsive_page} from './Style';
import TripDetails from '../TripDetails/TripDetails';


export default function Listitems({places}) {
  const classes = useStyle();
  

 

  return (
    <Responsive_page>
    <div className={classes.container}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Typography variant='h4' style={{color:'white'}}>Amazing Attractions around you!</Typography>
      
      <Grid container spacing={3} className={classes.list} style={{color:'white'}}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <TripDetails  place={place} />
              </Grid>
            ))}
      </Grid>
      
     
    </div>
    </Responsive_page>
  )
}
