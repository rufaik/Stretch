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
				          	<div style = {{ alignSelf: 'center'}} className = "pageinfo f4 pa4 pb0 tl pt2 pl4">
								
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
				      

				    <div className = 'container maeemo'>
				          	<div style = {{ alignSelf: 'center'}} className = "pageinfo f4 pa4 pb0 tc pt2 pl4">
								
									"We believe sport and play are not 
									only positive for health and fitness but offer a great contribution 
									to the over all well-being of an individuals development."<br></br>
									-Dan & Jo Watson
						</div>
				      	<div>
				      		<img alt='robots' 
				      			src='./skate.jpg' width="470" />
				      	</div>
				
				    </div>

				    <div className = 'container '>
					    
				      	<div>
				      		<img alt='robots' 
				      			src='./JDD.png' width="470"/>
				      			
				      	</div>
				      	<div style = {{ alignSelf: 'center'}} className = "pageinfo f4 pa4 pb0 tl pt2 pl4">
									
										<h3>Dan and Jo Watson<br></br>
										-Founders</h3>
										<p>Stretch UK was first established in 2012 by Dan and Jo Watson. 
										Dan holds a degree in both Physical education'Z and 'Teaching and mentoring' 
										with over 10 years teaching experience across schools in the UK. Jo is a 
										qualified Social worker with a passion for working with children and 
										families and plays more of an a active role within the business. 
										She has over 15 years experience working within both the mainstream and SEN sector. 
										Both are extremely big believers in the importance of creating safe and positive 
										environments for children to excel, learn and feel apart of a community. 
										Stretch is known for delivering a high standard of service whilst investing 
										into the future of both pupils and staff. <br></br><br></br>

										All Stretch staff are DBS checked, hold a qualification of at least a 
										Level 2 and receive training alongside Dan/Jo regularly.  <br></br><br></br>

										Jo holds a:<br></br>
										BA Hons degree in Social work <br></br>
										Level 3 Health studies <br></br>
										Level 3 in 'Advanced Child protection' <br></br>
										Level 2 in 'Improving Children's learning through play'<br></br>
										Level 2 in 'Mental wellbeing in Children and Young people 2018'<br></br>
										Level 2 in 'Promoting positive behaviour' <br></br>
										Level 2 in 'First aid essentials 2018'<br></br>
										</p>
							</div>
				    </div>



				</div>
    		</div>
     
    
   
    )};


export default Testimonials;