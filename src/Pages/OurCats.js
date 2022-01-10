import React from 'react';
import "./Style/OurCats.css";
import Navbar from './Navbar';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function OurCats(){
	return(
		<div class="OurCats">
    <Navbar/>
    <div class="ourCats">
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
    <div>
			<Breadcrumbs separator=<NavigateNextIcon/>>
        <Link underline="none" color="inherit">
          You are here :
        </Link>
        <Link underline="never">
          Our Cats
        </Link>
      </Breadcrumbs>
      </div>
<h1>Our Cats</h1>
<br/>
			<a href="./AdoptionForm">
  				<Button variant="contained" endIcon={<ArrowForwardIosIcon />}>Go directly to our adoption form</Button>
  			</a>
  			<div id="catsPresentationsLine1">
  				<div class="catPresentation">
  					<div class="catImg">
            <img alt="Suzie laying on the ground" width="100%" height="100%" src={require("./Media/suzie.jpg")}/>
  					</div>
  					<div class="catText">
  						<h3> Suzie </h3>
  						<StarBorderIcon/> Domestic Shorthair
  						<br/>
  						Looking for love !
  						<br/>
  						<br/>
  						<a href="./Suzie"><Button variant="outlined">LEARN MORE</Button></a>
  					</div>
  				</div>
  				<div class="catPresentation">
  					<div class="catImg">
            <img alt="Snowball on a white background" width="100%" height="100%" src={require("./Media/snowball.jpg")}/>
  					</div>
  					<div class="catText">
  						<h3> Snowball </h3>
  						<StarBorderIcon/> Domestic Shorthair
  						<br/>
  						Gentle Sweetheart
  						<br/>
  						<br/>
  						<a href="./Snowball"><Button variant="outlined">LEARN MORE</Button></a>
  					</div>
  				</div>
  				<div class="catPresentation">
  					<div class="catImg">
            <img alt="Megabot looking towards the camera" width="100%" height="100%" src={require("./Media/megabot.jpg")}/>
  					</div>
  					<div class="catText">
  						<h3> Megabot </h3>
  						<StarBorderIcon/> Domestic Shorthair
  						<br/>
  						Cool and Collected
  						<br/>
  						<br/>
  						<a href="./Megabot"><Button variant="outlined">LEARN MORE</Button></a>
  					</div>
  				</div>
  			</div>
  			<div id="catsPresentationsLine1">
  				<div class="catPresentation">
  					<div class="catImg">
            <img alt="Close-up on Fizzy looking upwards" width="100%" height="100%" src={require("./Media/fizzy.jpg")}/>
  					</div>
  					<div class="catText">
  						<h3> Fizzy </h3>
  						<StarBorderIcon/> Maine Coon
  						<br/>
  						Looking for love !
  						<br/>
  						<br/>
  						<a href="./Fizzy"><Button variant="outlined">LEARN MORE</Button></a>
  					</div>
  				</div>
  				<div class="catPresentation">
  					<div class="catImg">
            <img alt="BeBoop being BeBoop, not completely inside the shot" width="100%" height="100%" src={require("./Media/beboop.jpg")}/>
  					</div>
  					<div class="catText">
  						<h3> BeBoop </h3>
  						<StarBorderIcon/> Domestic Shorthair
  						<br/>
  						Gentle Sweetheart
  						<br/>
  						<br/>
  						<a href="./BeBoop"><Button variant="outlined">LEARN MORE</Button></a>
  					</div>
  				</div>
  				<div class="catPresentation">
  					<div class="catImg">
            <img alt="Daisy showing off her beautiful fur" width="100%" height="100%" src={require("./Media/daisy.jpg")}/>
  					</div>
  					<div class="catText">
  						<h3> Daisy </h3>
  						<StarBorderIcon/> Domestic Shorthair
  						<br/>
  						Cool and Collected
  						<br/>
  						<br/>
  						<a href="./Daisy"><Button variant="outlined">LEARN MORE</Button></a>
  					</div>
  				</div>
  			</div>
  			<br/>
			<br/>
			<br/>

		</div>
    </div>
		

		);
}

export default OurCats;