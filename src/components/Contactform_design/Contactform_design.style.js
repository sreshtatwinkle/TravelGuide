import styled from "styled-components";


export const Contact_back = styled.img`
    object-fit: cover;
	width: 100%;
	height: 150%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;  
`;
export const Container = styled.section`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: auto;
`;
export const Container_form = styled.div`
    width: 70%;
    border: 1px solid #dfdfdf;
    padding: 20px;
    border-radius: 5px;
    background: #fff;
`; 

export const Container_field = styled.div`
 
`;

export const Container_input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Container_comment = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Container_label = styled.label`
    font-family: 'Titillium Web', sans-serif;
`;
export const Container_btn = styled.button`
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Heading = styled.h1`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: white;
`;