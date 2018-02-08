import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyC3UagneG0smpLP9NOe3kWOnN4CxNRlJHQ';

// create a new component
// this is the constructor, not the
// component instance
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('javascript');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		// utiliza la libreria lodash para convertir videoSearch en una funcion
		// que solo puede llamarse cada 300ms
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 750);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);	
	}
	
}

// put this component's generated html on the page
// <App/> is creating an instance of App
ReactDOM.render(<App/>, document.querySelector('.container'));