import React from 'react';
import Card from './Card'
import './App.css';
import './Me.css'
import './Complete.css'
import CardList from './CardList'
import { main } from './main'
import LogoHeader from './LogoHeader'
import Navigation from './Navigation'
import 'tachyons';
import {Link} from 'react-router-dom';
import Logo from './Logo'
import './Logo.css';
import Gold from './Gold'
import {Animated} from "react-animated-css"

 

const Home = () => {
  return (
  	<div className = "back">
    <Navigation />
    <div className="pt5">
    <div className="tc">

     <div  className = "title pb3 mb3 pa2 pa3-ns ml1 ml7-ns mr1 mr7-ns">
    <img 
      src='./images/stt.png' width="600"/>
 
  </div>


  <div className = "pa3 pa0-ns" >
      <CardList  main={main}/>
      </div>
    </div>
    </div>
    </div>
  );
    }


export default Home;
