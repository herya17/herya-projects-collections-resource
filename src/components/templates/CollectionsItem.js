import React from 'react';
import CollectionsItemHeader from './CollectionsItemHeader';
import CollectionsItemBody from './CollectionsItemBody';

function CollectionsItem({ id, logo, name, author, description, images, view, github, open, openCode, isComplete, showAlert }) {
	return (
		<div className="collections-item">
			<CollectionsItemHeader 
				logo={logo} 
				name={name} 
				author={author} 
				view={view} 
				github={github} 
				open={open} 
				openCode={openCode}
				isComplete={isComplete}
				description={description}
				showAlert={showAlert} />
			<CollectionsItemBody
				id={id}
				name={name} 
				images={images} 
				description={description} />
		</div>
	);
}

export default CollectionsItem;
