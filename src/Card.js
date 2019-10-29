import React from 'react';


const Card = ({ name, id, email }) => {
	
        return (
                <div className = 'bg-white fw10 dib tc br3 pa3 ma3 grow bw2 shadow-5 link pointer'>
                <img className = 'br-100' alt='robots' src={email} width="300" height="300" border-radius="50%"/>
                <div>
                
                <div className ='subs f4'> {name}</div>
                        
                </div>
                </div>
                )
	}
	


export default Card;