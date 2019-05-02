import React from 'react';

function Info() {
	return(
		<div style={{ 
				position: 'absolute',
				bottom: 0, right: 0,
				margin: 10, padding: 10,
				backgroundColor: 'rgb(5, 9, 80)',
				borderRadius: 4,
				color: 'white',
				textAlign: 'initial'
			}}>
			Icons used<br />
			Featured:{' '}
			<a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy" target="_blank" rel="noopener noreferrer">{' '}Dave Gandy{' '}</a>
			<br />
			Seach:{' '}
			<a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target="_blank" rel="noopener noreferrer">Smashicons</a> 
			<br />
			Events:{' '}
			<a href="https://www.freepik.com/" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a>
			<br />
			Settings:{' '}
			<a href="https://www.freepik.com/" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a>
			<br />
			from
			{' '}
			<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
			title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer" >CC 3.0 BY</a>
		</div>
	)
}

export default Info;