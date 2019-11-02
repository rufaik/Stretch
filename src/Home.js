import React from 'react';
import Card from './Card'
import './App.css';
import './Me.css'
import './Complete.css'
import CardList from './CardList'
import { main } from './main'
import LogoHeader from './Logo header'
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

     <div style = {{display: 'flex', justifyContent: 'center', height: 'auto' margin: '0 auto'}} className = "title responsive pb3 mb3 w-50 pa2 pa3-ns ml1 ml7-ns mr1 mr7-ns">
    <img  alt='robots' 
      src='./stt.png' />
 
  </div>


  <div className= 'pl4 mt3 pl0-ns pr4 pr0-ns'>
    <CardList main={main}/>
    </div>
    </div>
    </div>
    </div>
  );
    }


export default Home;
