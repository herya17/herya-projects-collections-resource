import React from 'react';
import CollectionsItemDescription from './CollectionsItemDescription';
import CollectionsItemImages from './CollectionsItemImages';

function CollectionsItemBody({ id, name, images, description }) {
	return (
		<div className="collections-item__body">
			<CollectionsItemDescription description={description} />
			<CollectionsItemImages id={id} name={name} images={images} />
		</div>
	);
}

export default CollectionsItemBody;
