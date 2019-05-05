import React from 'react';
import styleWrapper from './../HOC/styleWrapper';

const TestButton = (props) => {
	return (
		  <React.Fragment>
			  <button style={props.styles}>Test Button One</button>
		  </React.Fragment>
	)
}

export default styleWrapper(TestButton);