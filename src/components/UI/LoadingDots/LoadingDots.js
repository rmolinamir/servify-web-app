import React from 'react';
// CSS
import classes from './LoadingDots.module.css';

const LoadingDots = ( props ) => {
	return (
		<div className={classes.LoadingDots}>
			<svg 
				xmlns="http://www.w3.org/2000/svg" 
				width={props.width ? props.width : "60px"} 
				height={props.height ? props.height : "40px"}
				className={props.className ? props.className : null}
				viewBox="0 0 100 100" 
				preserveAspectRatio="xMidYMid">
				<g transform="translate(20 50)">
					<circle cx="0" cy="0" r="10" fill="#FFCC80" transform="scale(0.842474 0.842474)">
						<animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
					</circle>
				</g>
				<g transform="translate(50 50)">
					<circle cx="0" cy="0" r="10" fill="#FFA726" transform="scale(0.512362 0.512362)">
						<animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
					</circle>
				</g>
				<g transform="translate(80 50)">
					<circle cx="0" cy="0" r="10" fill="#FB8C00" transform="scale(0.176231 0.176231)">
						<animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
					</circle>
				</g>
				{/* <g transform="translate(80 50)">
				<circle cx="0" cy="0" r="7" fill="#FFB080" transform="scale(0.000202672 0.000202672)">
				<animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"/>
				</circle>
				</g>  */}
			</svg>
		</div>
	);
};

export default LoadingDots;
