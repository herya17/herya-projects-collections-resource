import React from 'react';
import ActiveButton from './ActiveButton';
import InactiveButton from './InactiveButton';

function CollectionsItemButton({ view, github, open, openCode, isComplete, description, showAlert }) {
	return (
		<div className="collections-item__button">
			{
				isComplete
				? <ActiveButton view={view} github={github} open={open} openCode={openCode} />
				: <InactiveButton description={description} showAlert={showAlert} />
			}
	    </div>
	);
}

export default CollectionsItemButton;
