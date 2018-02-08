import React, { Component } from 'react';

class SearchBar extends Component  {
	constructor(props) {
		super(props);

		// create the component's state object
		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
	}

	render() {
		return (
			<div className='search-bar'>
				<input
				value={this.state.term} 
				onChange={ (event) => this.onInputChange(event.target.value) } />
			</div>
		);
	}

	// event handlers...
	onInputChange(term) {
		// actualiza el estado del componente
		this.setState({ term });
		// ejecuta la funcion recibida por el
		// componente padre que realiza una nueva
		// consulta a la API
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;