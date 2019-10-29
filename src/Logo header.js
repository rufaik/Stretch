import React, {Component} from 'react';
import './Logo header.css';
import hers from './NEW.png' 
import {Link} from 'react-router-dom';



class Logo extends Component{

	constructor(){

		super()
		this.state = {

			size:400

		}
	}

	componentDidMount(){

		if(this.props.size){

			this.setState({
				size:this.props.size
			})
		}

	}


	render(){
		return (
	    
	    <div className = 'ml5 pt3 pb2'>
	      
	      <Link to="/Home">
	      
	  

	      	<div size={400} style={{textDecoration: "none", width: this.state.size }} className = "log f2 tl black">
    S
 
  </div>

	      </Link>

	    </div>

	  );
	}
}



export default Logo;



