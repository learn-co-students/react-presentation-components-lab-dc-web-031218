import React from 'react';
// Code SimplerComponentHere Here
const SimplerComponent = (props) =>{
	return(
		<div style={{margin: 10, border: "1px solid red"}}
			  onClick={props.handleClick}>
			  <p>I am just happy</p>
		</div>
	)
}

export default SimplerComponent;