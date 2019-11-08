import React from 'react';


const Card = ({ name, id, email }) => {
	
        return (
                <div className = 'h-100-ns fw10 dib tc br3 pa3 ma3 grow bw2 shadow-2 link pointer'>
                <div>
                <img className = 'pt3 center h-auto h-70-ns ma0' alt='robots' src={email} />
                </div>
                <div>
                
                <div className ='subs pt1 pt4-ns f4-ns f5'> {name}</div>
                        
                </div>
                </div>
                )
	}
	


export default Card;