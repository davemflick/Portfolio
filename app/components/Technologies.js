import React from 'react';
import ReactDOM, { react } from 'react-dom';



export default class Technologies extends React.Component {
	render () {

		return (
			<div className="techContainer" id="technologies">
			  <h3> Experience Using </h3>
			  <div className="iconCont">
			    <i className="devicon-html5-plain-wordmark colored"></i>
			    <i className="devicon-css3-plain-wordmark colored"></i>
			    <i className="devicon-javascript-plain colored"></i>
			    <i className="devicon-bootstrap-plain-wordmark" id="bootstrap"></i>
			    <i className="devicon-sass-original colored"></i>
			    <i className="devicon-react-original-wordmark colored"></i>
			    <i className="devicon-d3js-plain colored"></i>
			    <i className="devicon-babel-plain colored"></i>
			    <i className="devicon-git-plain colored"></i>
			    <i className="devicon-github-plain colored"></i>
			  </div>
			</div>
		)
	}
}