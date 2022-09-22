import React from 'react';

function DynamicIsland({ value, onChange, onBlur, onClick }) {
	return (
		<div className="dynamic-island overlay">
			<p>Collections</p>
				<i className="material-icons search-delete" onClick={onClick}>close</i>
				<input
					type="text" 
					placeholder="Search title..."
					value={value}
					onChange={onChange}
					onBlur={onBlur} />
		</div>
	);
}

export default DynamicIsland;
