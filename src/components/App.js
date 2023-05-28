import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import DynamicIsland from './templates/DynamicIsland';
import Collections from './templates/Collections';
import { getAllCollections, getNewCollections, getUpcomingCollections } from '../data/collectionsResource';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: getAllCollections(),
			newCollections: getNewCollections(),
			upcomingCollections: getUpcomingCollections(),
			search: "",
		}

		// this.showAlertEventHandler = this.showAlertEventHandler.bind(this);
		this.openEventHandler = this.openEventHandler.bind(this);
		this.openCodeEventHandler = this.openCodeEventHandler.bind(this);
		this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
		this.onBlurEventHandler = this.onBlurEventHandler.bind(this);
		this.onSearchDeleteEventHandler = this.onSearchDeleteEventHandler.bind(this);
	}

	// showAlertEventHandler(description) {
	// 	window.alert(description);
	// }

	openEventHandler(view) {
		window.open(view);
	}

	openCodeEventHandler(github) {
		window.open(github);
	}

	onSearchChangeEventHandler(event) {
		const searchDeleteButton = document.querySelector(".search-delete");

		searchDeleteButton.style.display = "block";

		this.setState(() => {
			return {
				search: event.target.value,
			}
		})
	}

	onBlurEventHandler() {
		const searchDeleteButton = document.querySelector(".search-delete");
		if (this.state.search.length === 0) {
			searchDeleteButton.style.display = "none";
		}
		console.log(this.state.search.length);
	}

	onSearchDeleteEventHandler() {
		const searchDeleteButton = document.querySelector(".search-delete");
		searchDeleteButton.style.display = "none";

		this.setState(() => {
			return {
				search: "",
			}
		})
	}

	render() {
		const collections = this.state.collections.filter((collection) => (
			collection.name.toLowerCase().includes(this.state.search.toLowerCase())
		));

		const newCollections = this.state.newCollections.filter((collection) => (
			collection.name.toLowerCase().includes(this.state.search.toLowerCase())
		));

		const upcomingCollections = this.state.upcomingCollections.filter((collection) => (
			collection.name.toLowerCase().includes(this.state.search.toLowerCase())
		));

		return (
			<>
				<header>
    			<app-bar></app-bar>
					<NavBar />
  			</header>
  			<main>
					<DynamicIsland
						value={this.state.search}
						onChange={this.onSearchChangeEventHandler}
						onClick={this.onSearchDeleteEventHandler}
						onBlur={this.onBlurEventHandler} />
					<Routes>
						<Route 
							path='/' 
							element={
								<Collections 
									collections={collections}
								 	openEventHandler={this.openEventHandler}
									openCodeEventHandler={this.openCodeEventHandler} />
							} />
						<Route
							path='/new'
							element={
								<Collections
									collections={newCollections}
									openEventHandler={this.openEventHandler}
									openCodeEventHandler={this.openCodeEventHandler} />
							} />
						<Route
							path='/upcoming'
							element={
								<Collections
									collections={upcomingCollections}
									openEventHandler={this.openEventHandler}
									openCodeEventHandler={this.openCodeEventHandler} />
							} />
					</Routes>
				</main>
				<footer>
    			<foot-bar></foot-bar>
  			</footer>
			</>
		);
	}
}

export default App;
