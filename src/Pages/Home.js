import React from 'react';
import './Style/Home.css';
import Navbar from './Navbar';

import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function Home(){
	return <div class="Home">
  <Navbar/>
  <div class="home">
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
          Home
        </Link>
      </Breadcrumbs>
  <br/>
  	<div id="content">
  	<div id="contentTitle">
    <h1> Happy Home <br/> Cat Shelter</h1>
    </div>
  	<div id="imagePlusText">
  		<div id="imageHome">
  			<img alt="A small kitten in a close-up shot. With the text Adopt a shelter pet today" src={require("./Media/cuteCat.jpg")}/>
  		</div>
  		<div id="textHome">
  			<h3> A brief description of us ! </h3>
  			<p>For almost two decades, Happy Home Cat Shelter has helped in creating true social change 
  			by bringing pet adoption into the mainstream. Our work has helped make a difference to the Spanish rescue community and thousands of pets in need of rescue and rehabilitation. But, until every pet is safe, respected, and loved, we all still have big, hairy work to do. </p>
  			<p>Find out more about our mission to help save 100,000 healthy and rehomable pets each year.</p>
  			<br/>
  			<a href="./OurMission">
  			<Button variant="contained" endIcon={<ArrowForwardIosIcon />}>Find out more</Button>
  			</a>
		</div>
  	</div>
  	</div>
    </div>


	</div>;

}



export default Home;