import React from "react";
import "./Style/ContactFormSubmitted.css"
import Navbar from "./Navbar";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';


function ContactFormSubmitted(){
	return <div class="ContactFormSubmitted">
  <Navbar/>
  <div class="contactFormSubmitted">
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
        <Link href="./contact" underline="hover" color="inherit">
          Contact Form
        </Link>
        <Link underline="never">
          Contact Form Submitted
        </Link>
      </Breadcrumbs>
  <br/>
  <br/>
  <h1> Contact Form Submitted ! </h1>
  <br/>
  <br/>
  <h3> Thanks for submitting the Contact Form !</h3>
  <p> A copy of the form has been sent to your email address. We will get back to you within a few days !</p>

    <br/>
    <Button variant="contained" href="./"endIcon={<ArrowForwardIosIcon/>}> Go back to Home </Button>
      <br/>
      <br/>
      <br/>
    
      </div>
      <div class="banner">
      <img alt="A banner with a cat laying down and looking into the objective" width="100%"src={require("./Media/banner.jpg")}/>
    <br/>
    <br/>
      </div>
    </div>

	
}

export default ContactFormSubmitted;