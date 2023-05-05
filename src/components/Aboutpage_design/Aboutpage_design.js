import React from 'react';
import {Animator, Fade, FadeIn, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, batch} from 'react-scroll-motion';
import {Aboutus_back, Aboutussection,Aboutpage_body} from './Aboutpage_design.style';
import Abtback_image from '../../Assets/Aboutus_Backimg.jpg';

const Aboutpage_design =()=> {
  return (
    <Aboutpage_body>
        <ScrollContainer>
            <ScrollPage>
                <Aboutus_back src={Abtback_image} alt="aboutus"/>
                <Animator animation={batch(Sticky(),Fade(),MoveOut(0,-200))}>
                    <h1 style={{color:"white"}}>Who are we?</h1>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(),Sticky(),MoveOut(0,-200))}>
                    <h2>We are here with the technology that plans your trips for the future.</h2>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(),Sticky(),MoveOut(0,-200))}>
                    <h2>We support you in planning the best vacation ever.</h2>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Aboutussection>
                    <h2>
                        <Animator animation={MoveIn(-1000,0)}>Visit us:</Animator>
                        <Animator animation={MoveIn(1000,0)}>Instagram :Travel_Guide</Animator>
                        <Animator animation={MoveIn(-1000,0)}>Facebook :TravelGuide</Animator>
                        <Animator animation={MoveIn(1000,0)}>Twitter :Travel@Guide </Animator>
                    </h2>
                </Aboutussection>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(),Sticky())}>
                    <h2>Official website : www.TravelGuide.com</h2>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    </Aboutpage_body>
  )
};

export default Aboutpage_design;
