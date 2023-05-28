import React from 'react';
import ActiveButton from './ActiveButton';
import InactiveButton from './InactiveButton';

function CollectionsItemButton({ view, github, open, openCode, isComplete }) {
	return (
		<div className="collections-item__button">
			{
				isComplete
					? <ActiveButton view={view} github={github} open={open} openCode={openCode} />
					: <InactiveButton view={view} open={open} />
			}
	    </div>
	);
}

export default CollectionsItemButton;
