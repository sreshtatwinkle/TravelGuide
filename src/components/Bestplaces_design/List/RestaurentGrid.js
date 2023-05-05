import React, { useState } from 'react';
import Restaurents from './CusineList';
import {RestGrid_section,InnerDiv,Btn,Grid_container} from '../List/Restaurentgrid.style';



export default function RestaurentGrid() {

  const[items,setItems] =useState(Restaurents);

  const filterItem =(category_item)=>{
        const updateItems = Restaurents.filter((currEle) =>{
             return currEle.category === category_item;
        })
        setItems(updateItems);
  }

  return (
    <>
    <Grid_container>
    <h2 style={{color:'white'}}>Best Resaturents near your Trips</h2>
    <hr />
    <div>
        <div>
            <p style={{color:'white'}}>Choose your favourite Here</p>
            <Btn onClick={()=>filterItem('multicusine')}>Multi Cusine</Btn>
            <Btn onClick={()=>filterItem('authentic')}>Authentic</Btn>
            <Btn onClick={()=>filterItem('Chinese')}>Chinese</Btn>
            <Btn onClick={()=>filterItem('Indian')}>Indian</Btn>
            
        </div>
    </div><br/>
    {/*Restaurents section*/}
    
                    <div>
                        {
                            items.map((elem)=>{
                                const {name,image,description,price_range,category}=elem;

                                return (
                                <RestGrid_section>
                                    <div >
                                        <img src={image} alt='' width={200} height={100}/>
                                    </div>
                                    <InnerDiv>
                                        <h3>{name}</h3><hr/>
                                        <p>{description}</p>
                                        <h5>Category:{category}</h5>
                                        <h5>Price Rnage : {price_range}</h5>
                                        <Btn style={{background:'green',color:'white'}}>book now</Btn>                        
                                    </InnerDiv>
                                </RestGrid_section>
                                
                            )
                            })
                        }
                    </div>
                    
                    
                    </Grid_container>           
    </>
  )
}
