import styled from "styled-components";
import {Link} from 'react-router-dom';


export const NavbarTrack= styled.nav`
    width: 100%;
    height: ${(props) =>(props.extendnav ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;
`;
export const LeftnavTrack= styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left:5%;
   ;
`;
export const RightnavTrack= styled.div`
    flex:30%;
    display:flex;
    justify-content: flex-end;
    padding-right: 50px;
    
`;
export const NavbarIntTrack= styled.div`
width: 100%;
height: 80px;
display: flex;
`
export const ButtonOpenLink=styled.button`
cursor: pointer;
background: none;
border:none;
width:70px;
height:50px;
color:white;
font-size: 45px;

@media (min-width: 700px) {
    display:none;
    
}
`;
export const Logoimg=styled.img`
margin: 10px;
max-width: 180px;
height:auto;
`

export const NavLinks = styled.div`
display: flex;
`
export const NavbarLinks = styled(Link)`
color: white;
font-size: large;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-decoration: none;
margin: 10px;

@media (max-width: 700px) {
    display:none;
    
}
`

export const NavbarLinksextend = styled(Link)`
color: white;
font-size: large;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-decoration: none;
margin: 10px;
`


export const NavbarExtTrack= styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px) {
    display:none;
    
}
`
