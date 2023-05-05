import React,{useState} from 'react';
import {NavbarTrack, LeftnavTrack, RightnavTrack,NavbarIntTrack,NavbarLinksextend,NavbarExtTrack,NavLinks,NavbarLinks,ButtonOpenLink,Logoimg} from '../Styles/Navbar.style';
import Logo from '../Assets/Logo.png';



function Navbar(){
    const [extendnav,setextendnav] = useState(false);
    return <NavbarTrack extendnav={extendnav}>
        <NavbarIntTrack>
          <LeftnavTrack>
            <NavLinks>
                    <NavbarLinks to="/Homepage">Home</NavbarLinks>
                    <NavbarLinks to="/Aboutus" >Aboutus</NavbarLinks>
                    <NavbarLinks to="/Plans" >Best Places</NavbarLinks>
                    <NavbarLinks to="/Contact" >Contact</NavbarLinks>
                    <ButtonOpenLink 
                        onClick={()=>{
                          setextendnav((curr)=>!curr);
                        }}>
                          {extendnav? <> &#10005;</>:<>&#8801;</>}
                    </ButtonOpenLink>
            </NavLinks>
          </LeftnavTrack>
          <RightnavTrack>
            <Logoimg src={Logo}></Logoimg>
          </RightnavTrack>
         
        </NavbarIntTrack>
        {extendnav && (
        <NavbarExtTrack>
            <NavbarLinksextend to="/Homepage">Home</NavbarLinksextend>
            <NavbarLinksextend to="/Aboutus">Aboutus</NavbarLinksextend>
            <NavbarLinksextend to="/Plans">Plans</NavbarLinksextend>
            <NavbarLinksextend to="/Contact">Contact</NavbarLinksextend>
        </NavbarExtTrack>
        )}
    </NavbarTrack>;
    

}
export default Navbar