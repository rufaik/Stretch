import React from 'react';
import Card from './Card'
import {Link} from 'react-router-dom';
import './CardList.css'


const CardList = ({ main }) => {
	return(
		<div className = "container">
    <div className = "row mr6-ns ml6-ns">
            <div className = "col-12 col-md-4 col-lg-4 pl0 pr0">

          		 <Link to="/Curriculum"><Card 
          		 	 
          		  id={main[0].id} name={main[0].name} email={main[0].email} /></Link>

            </div> 

            <div className = "col-12 col-md-4 col-lg-4 pl0 pr0">

                 <Link to="/About"><Card
        
                  id={main[1].id} name={main[1].name} email={main[1].email} /></Link>
            </div> 
            
            <div className = "col-12 col-md-4 col-lg-4 pl0 pr0">

                 <Link to="/Testimonials"><Card 
                 	
                 id={main[2].id} name={main[2].name} email={main[2].email} /></Link>

            </div> 
              </div>  
              </div>  

		)
}

export default CardList;