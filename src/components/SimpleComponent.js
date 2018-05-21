import React from 'react';
// Code SimpleComponentHere Here
class SimpleComponent extends React.Component{
	constructor(){
		super();
		this.state = {
			mood: "happy"
		}
	}
	handleClick = () =>{
		console.log("handleClick()")
		let flag;
		this.state.mood === "happy" ? flag = "sad" : flag = "happy";
		this.setState({
			mood:flag
		})
	}
	render(){
		console.log(this.props)
		return(
			<div style={{margin: 10, border: "1px solid blue"}}
				 onClick={this.handleClick}>
				<p>{this.state.mood}</p>

			</div>
		)
	}
}
export default SimpleComponent;