import React,{useState} from 'react';
import {Grid,Typography} from '@material-ui/core';
import  useStyle from './Style';
import TripDetails from '../TripDetails/TripDetails';


export default function Listitems({places}) {
  const classes = useStyle();
  

 

  return (
    <div className={classes.container}>
      <Typography variant='h4' style={{color:'white'}}>Amazing Attractions around you!</Typography>
      
      <Grid container spacing={3} className={classes.list} style={{color:'white'}}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <TripDetails  place={place} />
              </Grid>
            ))}
      </Grid>
      
     
    </div>
  )
}
