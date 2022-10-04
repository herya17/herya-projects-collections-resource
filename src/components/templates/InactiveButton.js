import React from 'react';

function InactiveButton({ view, open }) {
	return (
		<>
			<div className="collections-item__button-comingsoon">
				<button onClick={() => open(view)}>Coming soon</button>
			</div>
		</>
	);
}

export default InactiveButton;
