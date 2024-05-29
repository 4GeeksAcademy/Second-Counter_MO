//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

function SimpleCounter(props){
	return (
		<div className="bigCounter">
			
			<div className="calander">
			<i className="far fa-clock"></i>
			</div>
			<div className="six">{props.digitSix % 10}</div>	
			<div className="five">{props.digitFive % 10}</div>	
			<div className="four">{props.digitFour % 10}</div>		
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>);
}

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;

//setInterval(function(){
	//const six = Math.floor(counter/600000);
	//const five = Math.floor(counter/60000);
	//const four = Math.floor(counter/6000);
	//const three = Math.floor(counter/60);
	//const two = Math.floor(counter/10);
	//const one = Math.floor(counter/1);
	setInterval(function() {
		const hours = Math.floor(counter / 3600);
		const minutes = Math.floor((counter % 3600) / 60);
		const seconds = counter % 60;
	
		const six = Math.floor(hours / 10);
		const five = hours % 10;
		const four = Math.floor(minutes / 10);
		const three = minutes % 10;
		const two = Math.floor(seconds / 10);
		const one = seconds % 10;



	      
	console.log(six,five,four,three,two,one);	
	counter++;

ReactDOM.render(
		<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />,
		document.querySelector("#app"));
},1000);


//render your react application
	


