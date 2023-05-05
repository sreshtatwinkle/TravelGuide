import React,{useState,useEffect} from 'react';

import {Getattractiondata} from '../components/Api/Plans_design';



export default function PlanIndex() {
  const[Places,setPlaces] = useState([]);
  const[Manages,setManages] = useState({});
  const[Bounds,setBounds]=useState(null);

  useEffect (()=>{
        Getattractiondata()
              .then((data)=>{
                console.log(data);
                setPlaces(data);
              })
  },[]);
}
