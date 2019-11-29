import React from 'react';
import './Logo.css';
import {Link} from 'react-router-dom';
import LogoHeader from './LogoHeader'
import './Curriculum.css'
 import Navigation from './Navigation'
 

const Curriculum = () => {
  return (

  	<div className = "back">
  		<div >
    	<Navigation showLogo={true}/>
    	</div>
    	<div className="pt5">
		<div className = 'pr1 pr4-ns pl1 pl4-ns pb4 '>
					<div className = 'pagetitle bg-black white tc pa5 f1 f-subheadline-ns mt0'> What We Offer </div>
   	 
				
				{/*<div  className = "ink tc mt0 mb0 ml6 mr6 pl3 pl2-ns pr3 pr2-ns pt4 pb0">
								<a href="#1"><button className = " pageinfo black" >
								R.E.A.C.H programme </button></a>
								
								<a href="#2"><button className = " pageinfo black" >
								Mama and Mini fitness classes</button></a>
				
								<a href="#3"><button className = " pageinfo black" >
								Extracurricular clubs</button></a>
				
								<a href="#4"><button className = " pageinfo black" >
								‘Stay and play’</button></a>
								
								</div>*/}



				<div id="1" className = "f3 pb3 pt4"  > </div>
				<div className= "black pl0 pl4=ns">

				 <div className = 'container mt4 maeemo'>
				 <div className = "row">
				    	<div className = "col-12 col-md-6" style = {{ alignSelf: 'center'}} >
				      		<img  alt='robots' 
				      			src='./images/9.jpg' className = "hey"/>
				      	</div>
				          	<div style = {{ alignSelf: 'center'}} className = "col-12 col-md-6 pageinfo f4 pt4 pt2-ns  pa4 pb0 tc tl-ns pt2 pl4">
								
									<h3>R.E.A.C.H programme</h3>
									<p> Aimed at young people aged 11+
										but can be adapted for younger children.
										Can be ran as part of the enrichment programme for years 12&13 <br></br>

										Combines practical dance and short teaching sessions which explore 5 
										key areas with the aim to promote positive wellbeing.
										 Entails looking at the domains of 
										resilience and different coping Strategies for some of 
										life’s common stresses for the targeted age group.</p>
						</div>
						</div>
						</div>
						</div>

						<div style = {{ width: 'auto'}}className = 'horse tc ml4 mr4 pb4 pa1'>
    
      	</div>

						<div id="2" s className = "f3 pb3-ns pt4-ns"  > </div>
				<div className= "black pl0 pl4=ns">
				 <div className = 'container mt4 maeemo'>
				 <div className = "row">

				 	  	<div  style = {{ alignSelf: 'center'}} className = "col-12 col-md-6 pageinfo f4 pa4 pt2 pb0-ns pb2 tc tl-ns pt2 pl4">
								
									<h3>Mama and Mini fitness classes</h3> 
									<p>These are created with a 
									home from home experience so mums can get fit and relax while their 
									little ones have a safe space to play/nap or join in all whilst being 
									apart of a community- 
									With recorded sessions from PT Rachel Evans - specialist in Pre 
									and post natal exercises..</p>
						</div>


				    	<div className = "col-12 col-md-6" style = {{ alignSelf: 'center'}} >
				      		<img  alt='robots' 
				      			src='./images/00.jpg' className = "hey"/>
				      	</div>
				        </div>
						</div>
						</div>

						<div id="3"  className = " f3 pb3 pt4"  > </div>
				<div className= "black pl0 pl4=ns">

				 <div className = 'container mt4 maeemo'>
				 <div className = "row">
				    	<div className ="col-12 col-md-6" style = {{ alignSelf: 'center'}} >
				      		<img  alt='robots' 
				      			src='./images/1.jpg' className = "hey"/>
				      	</div>
				          	<div style = {{ alignSelf: 'center'}} className = "col-12 col-md-6 pageinfo f4 pa4 pb0 pt4 tc tl-ns pt2 pl4">
								
									<h3>Extracurricular clubs</h3> 
									<p> 
										We work in schools across the UK delivering a wide range of sport 
										related clubs for children to access. These include football, basketball, 
										street dance and multi sports. We aim to promote healthy well being, creativity, 
										great character skills and the building of friendships</p>
						</div>
						</div>
						</div>
						</div>

						<div style = {{ width: 'auto'}}className = 'horse tc ml4 mr4 pb4 pa1'>
    
      	</div>

						<div id="4" className = "f3 pb3-ns pt4-ns"  > </div>
				<div className= "black pl0 pl4=ns">

				 <div className = 'container mt4 maeemo'>
				 <div className = "row">
				 	  	<div style = {{ alignSelf: 'center'}} className = "col-12 col-md-6 pageinfo f4 pa4 pb0 tl-ns tc pt2 pl4">
								
									<h3>'Stay and play’</h3> 
									<p>
										Parents can bring theirs children aged 0-3 years to join 
										in our fun and engaging mornings. We promote learning through 
										play and involve various activity areas (sensory, reading, music, 
											craft, building and counting) healthy snacks and song time. .</p>
						</div>


				    	<div className ="col-12 col-md-6" style = {{ alignSelf: 'center'}} >
				      		<img  alt='robots' 
				      			src='./images/4.jpg' className = "hey" />
				      	</div>
				        </div>
						</div>
						</div>

						







						</div>
						</div>
						</div>

  );
    };



export default Curriculum;



