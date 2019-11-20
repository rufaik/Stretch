import React from 'react';
import './Logo.css';
import './Cred.css';
import Navigation from './Navigation'
 

const Cred = () => {
  return (
	<div className = "back">
		<Navigation showLogo={true}/>
    		<div className="pt5 tc">
				<div className = 'pr1 pr4-ns pl1 pl4-ns pb4 '>
					<div className = 'pagetitle bg-black white tc pa5 f1 f-subheadline-ns mt0'> What Our Qualifications Are</div>

				    <div className = 'container mt4 mt5-ns'>
					    
				 <div className = "row">
				    	<div className ="col-12 center right-2-ns col-md-5"  >
				      		<img alt='robots' 
				      			src='./JDD.png' width="470"/>
				      			
				      	</div>
				          	<div style = {{ alignSelf: 'center'}} className = "col-12 col-md-7  pageinfo f4 f5-ns pa4 pb0 pt4 tc tl-ns pt2 pl4">
									
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
    		</div>
     </div>
    
   
    )};



export default Cred;


