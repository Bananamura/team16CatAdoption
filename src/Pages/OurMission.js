import React from "react";
import "./Style/OurMission.css"
import Navbar from "./Navbar";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

function OurMission(){
	return <div class="OurMission">
  <Navbar/>
  <div class="ourMission">
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
          Our Mission
        </Link>
      </Breadcrumbs>
      <div id="missionContent">
      <h1> About the Mission of the Happy <br/> Home Cate Shelter </h1>

      <h2>Our big-picture hope is for every pet in Spain to be safe, respected and loved - whether the pet is owned, surrendered to a shelter, unclaimed at the pound, seized by authorities, or trapped by rangers.</h2>
	    <img alt="A banner with a cat laying down and looking into the objective" width="100%"src={require("./Media/banner.jpg")}/>
      <b><p id="ourMissionIsTo"> Our mission is to... </p></b>
      <br/>
      <b><p>Disrupt the status quo</p></b>
      <p> We look at the big picture and create radical change that improves outcomes for rescue pets in Spain. We were disrupters from the get-go when we first launched the PetRescue website in 2004 before disruption became an overused buzzword!</p>
      <b><p>Use technology to drive social change</p></b>
      <p> We are digital innovators, always looking for ways we can leverage the latest advances in the tech world to solve the big issues and challenges that rescue pets face in Spain.</p>
      <b><p>Create a positive and progressive culture for rescue</p></b>
      <p> We want to improve the rescue and adoption experience for everyone and believe that the best way to achieve this is by creating and nurturing a positive and progressive culture for rescue.</p>
	  <b><p>Drive advocacy through action</p></b>
      <p> Through all the innovative campaigns, programs and services we create and deliver, we actively advocate for rescue pets.</p>
      <b><p>Unite to save lives</p></b>
      <p> We unite pets with new families, rescue groups with adopters and foster carers, corporate partners with a national rescue community, and we unite all passionate advocates for rescue pets to drive positive change.</p>

      <br/>
      <br/>
      <br/>
      </div>
	</div>
  </div>
}

export default OurMission;