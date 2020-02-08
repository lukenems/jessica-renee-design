import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Footer from './footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Praise from '../routes/praise';
import Portfolio from '../routes/portfolio';
import AboutMe from '../routes/aboutMe';
import Contact from '../routes/contact';


export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Portfolio path="/portfolio" />
					<Praise path="/praise" />
					<AboutMe path="/about-me" />
					<Contact path="/contact" />
				</Router>
				<Footer />
			</div>
		);
	}
}
