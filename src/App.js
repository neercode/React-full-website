import logo from './logo.svg';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar"

import { Switch,Route, Redirect } from 'react-router-dom';
const App =()=>{
  return(
    <>  
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Services" component={Services}/>
      <Route exact path="/Contact" component={Contact}/>
      <Redirect to ="/"/>
    <Home/>
    </Switch>
    </>
  );
};


export default App;
