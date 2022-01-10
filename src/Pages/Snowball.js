import React from 'react';
import "./Style/Suzie.css"
import Navbar from './Navbar';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Suzie(){
	return <div class="Suzie">
    <Navbar/>
  <div class="suzie">
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
  				Snowball
  			</Link>
  		</Breadcrumbs>
  		<h1> Snowball </h1>
  		<br/>
  		Gentle sweetheart
  		<br/>
  		Female Domestic : Shorthair Cat
  		<br/>
  		<div id="suzieImages">
  			<div id="bigImage">
  				<img alt="Snowball the cat"width="100%" height="100%" src={require("./Media/snowball.jpg")}/>
  			</div>
  			<div id="smallImages">
  				<ImageList sx={{ width: 450, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  			</div>
  		</div>
      <div id="suzieText">
  		<h3> About Snowball </h3>
  		<p> Snowball is a little shy at first, but once she has settled in she turns into an attentive and purring lap cat. She loves pats and chin tickles and has super soft fur, a fluffy tail, and gorgeous green eyes. We noticed she’s not so sure about men with deep voices, but she can be convinced to trust you if you have plenty of treats on offer.</p>
  		<br/>
  		<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="information table about the cat">
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Information</b></TableCell>
            <TableCell align="left"><b>Snowball</b></TableCell>
            <TableCell align="left"><b>Comments</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="left">{row.information}</TableCell>
              <TableCell align="left">{row.suzie}</TableCell>
              <TableCell align="left">{row.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  		<br/>
  		<br/>
  		<h3> Adoption details </h3>
  		<p> Please complete our online Adoption Application form to arrange an introductory "date" with one of our special kittens or adult cats that are eagerly awaiting their new home.</p>
  		<br/>
      <a href="./AdoptionForm">
  		<Button variant="contained" endIcon={<ArrowForwardIosIcon/>}>Go to the Adoption Form </Button>
      </a>
  		<br/>
  		<p> Effort has been directed to each and everyone of our furry mates to ensure we understand each feline's personality profile and special needs in order to suitably match you with your new furry companion. All our kittens and cats look forward to meeting you!</p>
  		<br/>
  		<p> As a not-for-profit street cat rescue organisation our adoption fees only cover the costs incurred from desexing and all initial vet work.</p>
		  </div>
    <br/>
		<br/>
		<br/>

  		
  		</div>
	</div>;
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    title: 'Black and white cat on green background',
  },
  {
    img: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6',
    title: 'Cat halp-cropped out with blue eye',
  },
  {
    img: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4',
    title: 'Cat laying on the ground with eyes closed',
  },
  {
    img: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec',
    title: 'Kitten on a bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1520315342629-6ea920342047',
    title: 'White cat on white background',
  },
  {
    img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    title: 'Cat sitting on a couch',
  },
  {
    img: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0',
    title: 'Kitten walking on grass',
  },
  {
    img: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce',
    title: 'Cat with cool yellow-tainted sunglasses',
  },
  {
    img: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83',
    title: 'Four kittens inside a basket in a garden',
  },
];

function createData(information, suzie, comments) {
  return {information, suzie, comments};
}

const rows = [
  createData('Age', '3-5 years', 'Estimation'),
  createData('Microchip', 991003001479829, '-'),
  createData('Location', 'Madrid, Spain', 'Locals preferred'),
  createData('Adoption Fee', '$220', 'Includes vaccines'),
];

export default Suzie;