import React from 'react';

const rightArrow = (props) => {
	return (
		<svg 
			xmlns="http://www.w3.org/2000/svg" 
			x="0px" 
			y="0px" 
			viewBox="0 0 129 129" 
			enableBackground="new 0 0 129 129"
            className={props.class}
			style={props.style}
			width={props.width ? props.width : "10px"} 
			height={props.height ? props.height : "10px"} 
			fill={props.fill ? props.fill : "#FFF"} >
			<g>
				<path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" fill="#FFFFFF"/>
			</g>
		</svg>
	);
};

export default rightArrow;