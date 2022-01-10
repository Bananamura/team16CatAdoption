import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./Pages/Home";
import Suzie from "./Pages/Suzie";
import Contact from "./Pages/Contact";
import AdoptionForm from "./Pages/AdoptionForm";
import OurCats from "./Pages/OurCats";
import OurMission from "./Pages/OurMission";
import Snowball from "./Pages/Snowball";
import Megabot from "./Pages/Megabot";
import Fizzy from "./Pages/Fizzy";
import BeBoop from "./Pages/BeBoop";
import Daisy from "./Pages/Daisy";
import AdoptionFormSubmitted from "./Pages/AdoptionFormSubmitted";
import ContactFormSubmitted from "./Pages/ContactFormSubmitted";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/suzie" element={<Suzie/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/adoptionForm" element={<AdoptionForm/>}/>
          <Route path="/ourCats" element={<OurCats/>}/>
          <Route path="/ourMission" element={<OurMission/>}/>
          <Route path="/snowball" element={<Snowball/>}/>
          <Route path="/megabot" element={<Megabot/>}/>
          <Route path="/fizzy" element={<Fizzy/>}/>
          <Route path="/beboop" element={<BeBoop/>}/>
          <Route path="/daisy" element={<Daisy/>}/>
          <Route path="/adoptionFormSubmitted" element={<AdoptionFormSubmitted/>}/>
          <Route path="/contactFormSubmitted" element={<ContactFormSubmitted/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
