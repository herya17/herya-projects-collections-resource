import React from 'react';

function ActiveButton({ view, github, open, openCode }) {
	return (
		<>
			<div className="collections-item__button-open-code">
	        	<button onClick={() => openCode(github)}>Code</button>
	        </div>
	        <div className="collections-item__button-open">
	        	<button onClick={() => open(view)}>Open</button>
	        </div>
		</>
	);
}

export default ActiveButton;
