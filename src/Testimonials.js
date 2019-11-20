import React from 'react';
import './Logo.css';
import './Testimonials.css';
import {Link} from 'react-router-dom';
import Navigation from './Navigation'

 

const Testimonials = () => {
  return (
  	<div>
    <Navigation showLogo={true}/>

    <div className = 'pr1 pt5 pr4-ns pl1 pl4-ns pb4 '>
          <div className = 'pagetitle bg-black white tc pa4 f1 f-subheadline-ns mt0'> What They Say</div>
    <div className = 'container mt4 maeemo'>
				    	<div>
				      		<img  alt='robots' 
				      			src='./newg.jpg'width="470" />
				      	</div>
				          	
							
				    </div>



				</div>
    		</div>
     
    
   
    )};


export default Testimonials;