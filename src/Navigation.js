import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css'
import LogoHeader from './Logo header'


class Navigation extends Component{


	constructor(){

		super()
		this.state = {

			showLogo:false

		}
	}

	componentDidMount(){

		if(this.props.showLogo){
			
			this.setState({
				showLogo:this.props.showLogo
			})
		}
	}


	getLogo(){

		if(this.state.showLogo==true){
			return(
				<LogoHeader size={100}/>
			)
		} 
		else{
			return null
		}

		

	}

	render(){
	return (
		
		<nav style = {{display: 'flex', justifyContent: 'flex-end', width:'100%' ,position: 'fixed'}}>
			
			<div>
				{this.getLogo()}
			</div>

			<div style = {{flexGrow: '1'}} />

			<div>
				<Link  to="/Contact">
					<div className='f4 subs link dim pt3 pb2 underline black mr5 pointer'>  CONTACT US </div>
				</Link>
			</div>
		</nav>
	);
	}
}

export default Navigation;