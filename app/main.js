import React from 'react';
import ReactDOM, { react } from 'react-dom';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

class App extends React.Component {

	render() {
		return (
			<div>
				<Technologies />
				<Projects />
				<Certificates />
				<Contact />
			</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('app'));