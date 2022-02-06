import React from 'react';
import web from "../src/images/offer.png"
import { NavLink } from 'react-router-dom';
import Common from "./Common";
const Home =()=>{
    return(
      <>  
      <Common  name="Grow your business with"
       imgsrc={web}
        visit="/Services"
         btname="Get Started"/>
      </>
    );
  };
  
  
  export default Home;
  