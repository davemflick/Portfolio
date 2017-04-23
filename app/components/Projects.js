import React from 'react';
import ReactDOM, { react } from 'react-dom';




export default class Projects extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				projects: [
					{name: "Protect the Yard",
					 used: "(React, Sass)",
					 link: "https://davemflick.github.io/Dungeon-Crawler/dist/index.html",
					 image: "./app/styles/images/Dungeon.png",},
					{name: "Conway's Game of Life",
					 used: "(React, Sass)",
					 link: "https://davemflick.github.io/Game-of-Life/dist/index.html",
					 image: "./app/styles/images/conway.png",},
					{name: "Recipe Box",
					 used: "(React, Sass)",
					 link: "https://davemflick.github.io/recipe-box/dist/index.html",
					 image: "./app/styles/images/recipes.png",},
					 {name: "Timestamp Microservice",
					 used: "(Node, Express, Pug)",
					 link: "https://timestamp-micro-1.herokuapp.com/",
					 image: "./app/styles/images/timestamp.png",},
					 {name: "Your Machine",
					 used: "(Node, Express, Pug)",
					 link: "https://your-machine-1.herokuapp.com/",
					 image: "./app/styles/images/yourmachine.png",},
					 {name: "Meteorite Landings",
					 used: "(D3, CSS)",
					 link: "https://davemflick.github.io/Global-Meteorite-Strikes/",
					 image: "./app/styles/images/meteorite.png",},
					 {name: "National Contiguity",
					 used: "(D3, CSS)",
					 link: "https://davemflick.github.io/Force-Directed-Graph/",
					 image: "./app/styles/images/forcegraph.png",},
					{name: "Heat Map",
					 used: "(D3, CSS)",
					 link: "https://davemflick.github.io/Heat-Map/",
					 image: "./app/styles/images/heatmap.png",},
					{name: "D3 Scatter Plot",
					 used: "(D3, CSS)",
					 link: "https://davemflick.github.io/Scatterplot-of-Cyclist/",
					 image: "./app/styles/images/scatterplot.png",},
					{name: "Markdown",
					 used: "(React, Sass)",
					 link: "https://davemflick.github.io/markdown-previewer/dist/index.html",
					 image: "./app/styles/images/markdown.png",},
					{name: "Camp Leader",
					 used: "(React, Sass)",
					 link: "https://davemflick.github.io/camp-leader/dist/index.html",
					 image: "./app/styles/images/campleader.png",},
					{name: "Tic-Tac-Toe",
					 used: "(JS, CSS, HTML)",
					 link: "https://davemflick.github.io/TicTacToe/index.html",
					 image: "./app/styles/images/tictactoe.png",},
					{name: "Simon",
					 used: "(JS, CSS, HTML)",
					 link: "https://davemflick.github.io/Simon/index.html",
					 image: "./app/styles/images/simon.png",},
					{name: "Interactive GDP",
					 used: "(D3, CSS)",
					 link: "https://davemflick.github.io/GDP-Bar-Chart/",
					 image: "./app/styles/images/gdp.png",},
					{name: "Twitch TV App",
					 used: "(JS, jQuery, CSS)",
					 link: "https://davemflick.github.io/twitchtv/",
					 image: "./app/styles/images/twitch.png",},
					{name: "Basic Calculator",
					 used: "(jQuery, CSS)",
					 link: "https://davemflick.github.io/Calculator/",
					 image: "./app/styles/images/calculator.png",},
				],
			}
		}

	mapProjects () {
		let myProjects = this.state.projects;
		let projectArr = [];
		for(var i=0; i< myProjects.length; i++){
			projectArr.push(
				<div className="project" key={i} >
				<h4>{myProjects[i].name}</h4>
				<p> {myProjects[i].used}</p>
				<div className='projLink'>
					<a href={myProjects[i].link} target="_blank">
						<img src= {myProjects[i].image} alt={myProjects[i].name}/> 
					</a>
				</div>
			</div>)
		}
		return projectArr.map((project) => project)
	}

	render () {

		return (
			<div className="projCont" id="projects">
				<h3>Sample of My Projects </h3>
				<div className="projectsContainer">
					{this.mapProjects()}
				</div>
			</div>
		)
	}
}