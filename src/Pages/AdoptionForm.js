import React from "react";
import "./Style/AdoptionForm.css"
import Navbar from "./Navbar";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';

function AdoptionForm(){
	return <div class="AdoptionForm">
  <Navbar/>
  <div class="adoptionForm">
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
      <Link href="./OurCats" underline="hover" color="inherit">
        Our Cats
      </Link>
      <Link underline="never">
        Adoption Form
      </Link>
  </Breadcrumbs>
  <br/>
  <br/>
    <h1> Adoption form </h1>
    <br/>
    <div class="form">
    <p>Please complete all questions to submit your application to Happy Home Cat Shelter to adopt this pet.</p> 

    <p>We ask that you answer with thought and honesty. We often receive several applications for one animal and it is our goal to match pets to the most suitable home. </p>

    <p>A good match for you and the Happy Home pet is our top priority.</p>
    
    <br/>
    <h4>Which cat do you want to adopt ?</h4>
    <br/>
    
    <FormControl component="fieldset">
      <RadioGroup row >
        <FormControlLabel value="anyCat" control={<Radio />} label="I am applying to adopt ANY cat !" />
        <FormControlLabel value="oneCat" control={<Radio />} label="I know the cat I apply for" />
      </RadioGroup>
  <div id="catNameField">
  <TextField variant="standard" label="Name of the cat"/>
  </div>
</FormControl>

    <h4>Your details</h4>

    <br/>
    <div id="details">
    <div class="textFieldPlusLabel" id="firstNameField">
      <TextField label="First Name" variant="standard"/>
    </div>
    <div class="textFieldPlusLabel" id="lastNameField">
      <TextField label="Last Name" variant="standard"/>
    </div>
    <div class="textFieldPlusLabel" id="eMailField">
      <TextField label="E-Mail" variant="standard"/>
    </div>
    <div class="textFieldPlusLabel" id="telephoneField">
      <TextField label="Telephone Number" variant="standard"/>
    </div>
    <div class="textFieldPlusLabel" id="birthField">
      <TextField type="date" InputLabelProps={{ shrink: true }} label="Date of Birth" variant="standard"/>
      <br/>
      <br/>
      <br/>
    </div>
    <div class="textFieldPlusLabel" id="addressField">
      <TextField label="Street and Number" variant="standard"/>
    </div>
    <div class="textFieldPlusLabel" id="postalField">
      <TextField label="Postal Code" variant="standard"/>
    </div>
    </div>
    
    <h4>You and the Pet</h4>
    A few questions about your lifestyle, so we can match the cat to you !
    <br/>
    <br/>
    <br/>
    <div id="questions">
      <div class="question" id="question1">
        1. How often would you spend time with this pet and what is the longest they would be left alone ?
        <br/>
        <TextField label="Your answer to question 1" fullWidth variant="standard"/>
      </div>
      <br/>
      <div class="question" id="question2">
        2. Will this pet be indoors or outdoors and where would their bedding be located ?
        <br/>
        <TextField label="Your answer to question 2" fullWidth variant="standard"/>
      </div>
      <br/>
      <div class="question" id="question2">
        3. If you have other pets, please give us details (breed/size/age)
        <br/>
        <br/>
        <TextField fullWidth multiline rows={5} id="answerQ3" minRows="10"  label="Your answer to question 3"/>
      </div>
      <br/>
    </div>
      <br/>
    <h4>Finished the form ?</h4>
    Once you have answered all the questions, submit the form with the button below !
    <br/>
    We will contact you within a few days to set up a meeting or get more information.
    <br/>
    <br/>
    <Button variant="contained" href="./adoptionFormSubmitted"endIcon={<ArrowForwardIosIcon/>}>Submit the Adoption Form </Button>
    <br/>
    <br/>
    <br/>
      </div>
    </div>
	</div>
}

export default AdoptionForm;