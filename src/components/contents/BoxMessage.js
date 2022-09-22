import React from 'react';

function BoxMessage({ icon, message }) {
	return (
		<div className="box-message">
			<i className="material-icons">{icon}</i>
			<p>{message}</p>
		</div>
	);
}

export default BoxMessage;
