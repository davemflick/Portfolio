import React from 'react';
import ReactDOM, { react } from 'react-dom';




export default class Projects extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				projects: [
					{name: "Protect the Yard",
					 link: "https://davemflick.github.io/Dungeon-Crawler/dist/index.html",
					 image: "../app/styles/images/Dungeon.png",},
					{name: "Conway's Game of Life",
					 link: "https://davemflick.github.io/Game-of-Life/dist/index.html",
					 image: "../app/styles/images/conway.png",},
					{name: "Recipe Box",
					 link: "https://davemflick.github.io/recipe-box/dist/index.html",
					 image: "../app/styles/images/recipes.png",},
					{name: "Tic-Tac-Toe",
					 link: "https://davemflick.github.io/TicTacToe/index.html",
					 image: "../app/styles/images/tictactoe.png",},
					{name: "Simon",
					 link: "https://davemflick.github.io/Simon/index.html",
					 image: "../app/styles/images/simon.png",},
					{name: "Markdown",
					 link: "https://davemflick.github.io/markdown-previewer/dist/index.html",
					 image: "../app/styles/images/markdown.png",},
					{name: "Camp Leader",
					 link: "https://davemflick.github.io/camp-leader/dist/index.html",
					 image: "../app/styles/images/campleader.png",},
					{name: "Interactive GDP",
					 link: "https://davemflick.github.io/GDP-Bar-Chart/",
					 image: "../app/styles/images/gdp.png",},
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