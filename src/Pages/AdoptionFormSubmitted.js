import React from "react";
import "./Style/AdoptionFormSubmitted.css"
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


function AdoptionFormSubmitted(){
	return <div class="AdoptionFormSubmitted">
  <Navbar/>
  <div class="adoptionFormSubmitted">
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
        <Link href="./" underline="hover" color="inherit">
          Our Cats
        </Link>
        <Link href="./adoptionForm" underline="hover" color="inherit">
          Adoption Form
        </Link>
        <Link underline="never">
          Adoption Form Submitted
        </Link>
      </Breadcrumbs>
  <br/>
  <br/>
  <h1> Adoption Form Submitted ! </h1>
  <br/>
  <br/>
  <h3> Thanks for submitting the Adoption Form !</h3>
  <p> A copy of the form has been sent to your email address. We will get back to you within a few days !</p>

    <br/>
    <Button variant="contained" href="./"endIcon={<ArrowForwardIosIcon/>}> Go back to Home </Button>
      </div>
      <div class="banner">
      <img alt="A banner with a cat laying down and looking into the objective" width="100%"src={require("./Media/banner.jpg")}/>
    <br/>
    <br/>
      </div>
    </div>
	
}

export default AdoptionFormSubmitted;