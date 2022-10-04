import React from 'react';
import DynamicIsland from './templates/DynamicIsland';
import CollectionsApp from './templates/CollectionsApp';
import { collectionsResource } from '../data/collectionsResource';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: collectionsResource,
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

		return (
			<>
				<DynamicIsland
					value={this.state.search}
					onChange={this.onSearchChangeEventHandler}
					onClick={this.onSearchDeleteEventHandler}
					onBlur={this.onBlurEventHandler} />
				<CollectionsApp
					collections={collections}
					open={this.openEventHandler}
					openCode={this.openCodeEventHandler} />
			</>
		);
	}
}

export default App;
