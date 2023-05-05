import React,{useState,useEffect} from 'react';
import {CssBaseline,Grid} from '@material-ui/core';
import List from '../components/Bestplaces_design/List/List';
import {Getattractiondata} from '../components/Bestplaces_design/Api/Plans_Index';
import RestaurentGrid from '../components/Bestplaces_design/List/RestaurentGrid';
import {Plan_section} from './Plans.style';


export default function Plans() {
  const[places,setPlaces] =useState([]);
  const[filteredPlaces,setFilteredPlaces] =useState([]);
  const[loading,setLoading]=useState(false);
  const[rate,setRate]=useState('');
  

  useEffect(()=>{
      const filteredPlaces = places.filter((Place)=>Number(Place.num_reviews)>rate);
      setFilteredPlaces(filteredPlaces);
  },[rate]);

  useEffect(()=>{
    setLoading(true);
    Getattractiondata()
       .then((data)=>{
            console.log(data);
            setPlaces(data);
            setRate('');
            setFilteredPlaces([]);
            setLoading(false);
            
            
       })
  },[]);
  return (
    <>
    <Plan_section>
    <CssBaseline/>
    
    <Grid container spacing={3} style={{width:'100%'}}>
      <Grid item xs={5} md={7}>
        <List  
              places={filteredPlaces.length ? filteredPlaces :places }
              loading={loading}
              rate={rate}
              setRate={setRate}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <RestaurentGrid   
        />
      </Grid>
    </Grid>
    </Plan_section>
    </>
    
  )
}


