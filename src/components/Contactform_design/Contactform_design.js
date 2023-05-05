import React, { useEffect, useState } from 'react';
import {Contact_back,Container,Heading,Container_form,Container_btn,Container_input,Container_comment,Container_label} from './Contactform_design.style';
import Contactform from '../../Assets/Contactform.jpg';


export default function Contactform_design() {
  const initValues = {username:"",email:"",phone:"",comment:""};
  const [formValues,setFormValues] =useState(initValues);
  const [frmErrors,setFrmErrors] =useState({});
  const [formSubmit,setFormSubmit] =useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFrmErrors(validation(formValues));
    setFormSubmit(true);
  };
  
  useEffect(() => {
    console.log(frmErrors);
    if (Object.keys(frmErrors).length === 0 && formSubmit) {
      console.log(formValues);
    }
  }, [frmErrors]);

  const validation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email please give your email once again!";
    }
    if (!values.phone) {
      errors.phone = "Phone No. is required";
    } else if (values.phone.length < 10) {
      errors.phone = "Phone No. cannot be less than 10 characters";
    } else if (values.phone.length > 10) {
      errors.phone = "Phone No. cannot exceed more than 10 characters";
    }
    if (!values.comment) {
        errors.comment = "There is no Comment given!";
    }
    return errors;
  };

  return (
    <Container>
        {Object.keys(frmErrors).length === 0 && formSubmit ? (
        alert('Message Sent successfully')
        ):(<pre ></pre>)}
        <Contact_back src={Contactform} alt="contact"/>
        <form  onSubmit={handleSubmit}>
            <Heading>Contact Here!</Heading>
            <div className='ui divider'></div>
            <Container_form>
                <div>
                    <Container_label>USER NAME </Container_label>
                    <Container_input type="text" name="username" placeholder='Your Name....' value={formValues.username} onChange={handleChange}/>
                    <p style={{color:'red'}}>{frmErrors.username}</p>
                </div>
                <div>
                    <Container_label>EMAIL</Container_label>
                    <Container_input type="text" name="email" placeholder='Your email....' value={formValues.email} onChange={handleChange}/>
                    <p style={{color:'red'}}>{frmErrors.email}</p>
                </div>
                <div>
                    <Container_label>PHONE NO. </Container_label>
                    <Container_input type="text" name="phone" placeholder='Your Phone number....' value={formValues.phone} onChange={handleChange}/>
                    <p style={{color:'red'}}>{frmErrors.phone}</p>
                </div>
                <div>
                    <Container_label>COMMENTS </Container_label>
                    <Container_comment rows="5" cols="40" name="comment" placeholder="Please enter your query here" value={formValues.comment} onChange={handleChange}></Container_comment>
                    <p style={{color:'red'}}>{frmErrors.comment}</p>
                </div>
                <Container_btn className='fluid ui button blue'>Send</Container_btn>
            </Container_form>


        </form>
    </Container>
  )
}
