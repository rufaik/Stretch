import React from 'react';
import './Logo.css';
import './About.css';
import Navigation from './Navigation'
 

const About = () => {
  return (
	<div className = "back">
		<Navigation showLogo={true}/>
    		<div className="pt5 tc">
				<div className = 'pr1 pr4-ns pl1 pl4-ns pb4 '>
					<div className = 'pagetitle bg-black white tc pa5 f1 f-subheadline-ns mt0'> Who We Are</div>
				 <div className = 'container mt4 maeemo'>
				 <div className = "row">
				    	<div className = "col-12 col-md-6" style = {{ alignSelf: 'center'}} >
				      		<img  alt='robots' 
				      			src='./images/newg.jpg'width="470" />
				      	</div>
				          	<div style = {{ alignSelf: 'center'}} className = "col-12 col-md-6 pageinfo f4 pt4 pt2-ns  pa4 pb0 tc tl-ns pt2 pl4">
								
								
									<h3>Stretch UK was birthed out of a desire to see more young people reach 
									their full potential.</h3> 
									<p> Initially focusing on delivering PE lessons and 
									extra curricular clubs, Stretch specialised in putting the fun and 
									creativity back into sport. However, over time Stretch has expanded 
									and now offers more activities for parents and children as well as 
									young people to get involved with. We believe sport and play are not 
									only positive for health and fitness but offer a great contribution 
									to the over all well-being of an individuals development.</p>
						</div>
						</div>
						</div>
						<div style = {{ width: 'auto'}}className = 'horse tc ml4 mr4 pb2 pa1'>
    
      	</div>

				    <div className = 'container maeemo'>
				 <div className = "row">

				 	  	<div  style = {{ alignSelf: 'center'}} className = "col-12 col-md-6 pageinfo f4 pa4 pt4 pb0-ns pb4 tc tl-ns pt2 pl4">

									"We believe sport and play are not 
									only positive for health and fitness but offer a great contribution 
									to the over all well-being of an individuals development."<br></br>
									-Dan & Jo Watson
						</div>
				    	<div className = "col-12 col-md-6 pb4" style = {{ alignSelf: 'center'}} >
				      		<img alt='robots' 
				      			src='./images/skate.jpg' width="470" />
				      	</div>
				      	</div>
				
				    </div>

				    <div className = 'container '>
					    
				    </div>





				</div>
    		</div>
     </div>
    
   
    )};



export default About;


