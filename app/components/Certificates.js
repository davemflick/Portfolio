import React from 'react';
import ReactDOM, { react } from 'react-dom';



export default class Certificates extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			styleFcc: {display: "none"},
			styleStan: {display: "none"},
			style: {display: "none"},
		}
	}

 
	handleClick (e) {
		if(e.target.id == "fcc") {
			this.state.styleFcc = {display: "inline-block"};
			this.state.style = {display: "inline-block"};
		}
		else if(e.target.id == "stanford") {
			this.state.styleStan = {display: "inline-block"};
			this.state.style = {display: "inline-block"};
		}
		if(e.target.className == "exit" || e.target.className == "certs") {
			this.state.styleFcc = {display: "none"};
			this.state.styleStan = {display: "none"};
			this.state.style = {display: "none"};
		}
		this.setState(this.state);
	}

	render () {

		return (
			<div className="certContainer" id="cert">
				<h3> Certificates </h3>
				<div className="certName">
					<h4 id="fcc" onClick={this.handleClick.bind(this)}> freeCodeCamp Front-End </h4>
					<h4 id="stanford" onClick={this.handleClick.bind(this)}> Stanford cs101 </h4>
				</div>
				<div className="certs" style={this.state.style} onClick={this.handleClick.bind(this)}>

					<div className="popUpFcc" style={this.state.styleFcc}>
						<img id="fccFE" src="./app/styles/images/fccFrontEnd.png" alt="freeCodeCamp Front-End" />
						<button className="exit" onClick={this.handleClick.bind(this)}> X </button>
					</div>

					<div className="popUpStanford" style={this.state.styleStan}>
						<img id="stanford101" src="./app/styles/images/stanford.png" alt="stanford 101" />
						<button className="exit" onClick={this.handleClick.bind(this)}> X </button>
					</div>
				</div>
			</div>
		)
	}
}