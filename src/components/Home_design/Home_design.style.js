import styled from "styled-components";




export const Homesection = styled.section`
    height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
	overflow-x: hidden;
	overflow-y: hidden;
`;

export const Homeimg = styled.img`
    object-fit: cover;
	width: 100%;
	height: 200%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;  
	
`;

export const HomeContainer = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;
export const HomemainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
	
`;


export const Hometext = styled.p`
    margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;
export const HomeButtWrapper = styled.div`
    width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;






export const Homebutton = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
	}
	&:hover {
		color: black;
	}
    color: black;
	&:before {
		background: #fff;
		height: 500%;
	}
	&:hover:before {
		height: 0%;
	}
	&:hover {
		color: white;
	}
`;
