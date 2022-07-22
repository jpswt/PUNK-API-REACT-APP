import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import BeerCard from './components/BeerCard';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Beers: [],
		};
	}

	componentDidMount() {
		axios.get('https://api.punkapi.com/v2/beers').then((res) => {
			const Beers = res.data;
			this.setState({ Beers });
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header"> Punk API Beers </header>
				<ol>
					{this.state.Beers.map((beer, index) => (
						<BeerCard
							key={index}
							name={beer.name}
							image_url={beer.image_url}
							first_brewed={beer.first_brewed}
							tagline={beer.tagline}
							abv={beer.abv}
							description={beer.description}
						/>
					))}
				</ol>
			</div>
		);
	}
}

export default App;
