import React from 'react';
import { Link } from 'react-router-dom';
import {Homesection,Hometext,Homebutton,Homeimg,HomeButtWrapper,HomeContainer,HomemainHeading} from './Home_design.style';
import Home_image from '../../Assets/Travel_front.jpg';

const Home_design = () => {
	return (
		
		<Homesection>
			<Homeimg src={Home_image} alt="world-map" />
			<HomeContainer>
				<HomemainHeading>TravelGuide</HomemainHeading>
				<Hometext>
					Discover Your Next Holiday with TravelGuide
				</Hometext>
				<HomeButtWrapper>
					<Link to="signup">
						<Homebutton>Get Started</Homebutton>
					</Link>
					<Homebutton>Find More</Homebutton>
				</HomeButtWrapper>
			</HomeContainer>
		</Homesection>
	);
};

export default Home_design;

