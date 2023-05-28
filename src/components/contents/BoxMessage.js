import React from 'react';

function BoxMessage({ icon, message }) {
	return (
		<div className="box-message">
			{icon}
			<p>{message}</p>
		</div>
	);
}

export default BoxMessage;
