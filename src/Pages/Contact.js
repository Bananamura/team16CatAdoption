import React from 'react';
import "./Style/Contact.css";
import Navbar from "./Navbar";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';


function Contact(){
	return <div class="Contact">
  <Navbar/>
  <div class="contact">
  <br/>
  <div class="searchBar">
      <FormControl >
        <InputLabel> Search...</InputLabel>
        <OutlinedInput size="small"endAdornment={<SearchIcon/>}/>
      </FormControl>
    </div>
  <br/>
  <br/>
  <br/>
<Breadcrumbs separator=<NavigateNextIcon/>>
  			<Link underline="none" color="inherit">
  				You are here :
  			</Link>
  			<Link underline="never">
  				Contact Us
  			</Link>
  		</Breadcrumbs>
<br/>
    <h1> Contact Us </h1>
    <br/>
    <div class="form">
    <p>Have any questions ? Fill in the form below and we will get back to you !</p> 

    <div id="details">
    <div class="textFieldPlusLabel" id="firstNameField">
      <TextField variant="standard"label="First Name"/>
    </div>
    <div class="textFieldPlusLabel" id="lastNameField">
      <TextField variant="standard"label="Last Name"/>
    </div>
    <div class="textFieldPlusLabel" id="eMailField">
      <TextField variant="standard"label="E-Mail"/>
    </div>
    <div class="textFieldPlusLabel" id="telephoneField">
      <TextField variant="standard"label="Telephone Number"/>
    </div> 
<br/>
Your message to us
<br/>
<textarea rows="10" cols="80"></textarea>
<br/>
<br/>
<br/>
 </div>
<Button variant="contained" href="./contactFormSubmitted"endIcon={<NavigateNextIcon/>}>Submit the Contact Form</Button>
<br/>
<br/>
<br/>
</div>
</div>
	 </div>;

}

export default Contact;