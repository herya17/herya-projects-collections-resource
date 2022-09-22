import React from 'react';

function InactiveButton({ description, showAlert }) {
	return (
		<>
			<div className="collections-item__button-comingsoon">
				<button onClick={() => showAlert(description)}>Coming soon</button>
			</div>
		</>
	);
}

export default InactiveButton;
