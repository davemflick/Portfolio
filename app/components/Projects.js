import React from 'react';
import ReactDOM, { react } from 'react-dom';

export default class Projects extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				projects: [
					{name: "Voting App",
					 used: "Node, Express, Mongodb, React, PassportJS",
					 link: "https://time-to-vote.herokuapp.com/",
					 image: "./app/styles/images/votingApp.png",},
					 {name: "Golf Brands",
					 used: "Express, Mongodb, Mongoose, PassportJS",
					 link: "https://golfbrandboard.herokuapp.com/",
					 image: "./app/styles/images/golfBrands.png",},
					 {name: "Nightlife",
					 used: "Node, Express, Mongodb, React, Twitter-PassportJS",
					 link: "https://my-nightlife-fcc-app.herokuapp.com/",
					 image: "./app/styles/images/nightlife.png",},
					{name: "Protect the Yard",
					 used: "React, Sass",
					 link: "https://davemflick.github.io/Dungeon-Crawler/dist/index.html",
					 image: "./app/styles/images/Dungeon.png",},
					 {name: "Image Search",
					 used: "Express, Mongodb, Mongoose",
					 link: "https://image-srch-fcc.herokuapp.com/",
					 image: "./app/styles/images/imageSearch.png",},
					{name: "Conway's Game of Life",
					 used: "React, Sass",
					 link: "https://davemflick.github.io/Game-of-Life/dist/index.html",
					 image: "./app/styles/images/conway.png",},
					 {name: "Farting Dog Company",
					 used: "React, Sass",
					 link: "https://davemflick.github.io/The-Farting-Dog-Company/index.html",
					 image: "./app/styles/images/fartingDog.png",},
					 {name: "Open Source Contribution",
					 used: "Sass",
					 link: "https://davemflick.github.io/idealblocksize/index.html",
					 image: "./app/styles/images/bitcoin.png",},
					{name: "URL-Shortener",
					 used: "Express, Mongodb, Pug",
					 link: "https://my-short-url-service.herokuapp.com/",
					 image: "./app/styles/images/urlShort.png",},
					{name: "Recipe Box",
					 used: "React, Sass",
					 link: "https://davemflick.github.io/recipe-box/dist/index.html",
					 image: "./app/styles/images/recipes.png",},
					 {name: "Mock-Zillow",
					 used: "React, Sass",
					 link: "https://davemflick.github.io/Zillow/dist/",
					 image: "./app/styles/images/zillow.png",},
					 {name: "National Contiguity",
					 used: "D3, CSS",
					 link: "https://davemflick.github.io/Force-Directed-Graph/",
					 image: "./app/styles/images/forcegraph.png",},
					 {name: "Meteorite Landings",
					 used: "D3, CSS",
					 link: "https://davemflick.github.io/Global-Meteorite-Strikes/",
					 image: "./app/styles/images/meteorite.png",},
					{name: "Heat Map",
					 used: "D3, CSS",
					 link: "https://davemflick.github.io/Heat-Map/",
					 image: "./app/styles/images/heatmap.png",},
					{name: "D3 Scatter Plot",
					 used: "D3, CSS",
					 link: "https://davemflick.github.io/Scatterplot-of-Cyclist/",
					 image: "./app/styles/images/scatterplot.png",},
					{name: "Markdown",
					 used: "React, Sass",
					 link: "https://davemflick.github.io/markdown-previewer/dist/index.html",
					 image: "./app/styles/images/markdown.png",},
					{name: "Camp Leader",
					 used: "React, Sass",
					 link: "https://davemflick.github.io/camp-leader/dist/index.html",
					 image: "./app/styles/images/campleader.png",},
					{name: "Tic-Tac-Toe",
					 used: "JS, CSS, HTML",
					 link: "https://davemflick.github.io/TicTacToe/index.html",
					 image: "./app/styles/images/tictactoe.png",},
					{name: "Simon",
					 used: "JS, CSS, HTML",
					 link: "https://davemflick.github.io/Simon/index.html",
					 image: "./app/styles/images/simon.png",},
					{name: "Interactive GDP",
					 used: "D3, CSS",
					 link: "https://davemflick.github.io/GDP-Bar-Chart/",
					 image: "./app/styles/images/gdp.png",},
					{name: "Twitch TV App",
					 used: "JS, jQuery, CSS",
					 link: "https://davemflick.github.io/twitchtv/",
					 image: "./app/styles/images/twitch.png",},
					{name: "Basic Calculator",
					 used: "jQuery, CSS",
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
				<div className='projLink'>
					<a href={myProjects[i].link} target="_blank">
						<img src= {myProjects[i].image} alt={myProjects[i].name}/>
						<div className='projTechs'>
							<p> {myProjects[i].used}</p>
						</div>
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