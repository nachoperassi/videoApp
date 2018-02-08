import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;

	return (
		<li onClick={() => onVideoSelect(video)} className='list-group-item'>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' src={ imageUrl } />
				</div>

				<div className='media-body'>
					<p className='media-heading'>{ title }</p>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;