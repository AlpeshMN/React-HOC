import React from 'react';
import styleWrapper from './../HOC/styleWrapper';

const TestButtonNext = (props) => {
	return (
		  <React.Fragment>
			  <button style={props.styles}>Test Button Next</button>
		  </React.Fragment>
	)
}

export default styleWrapper(TestButtonNext);