import React from 'react';
import CollectionsItem from './CollectionsItem';

function CollectionsList({ collections, open, openCode }) {
	return (
		<div className="collections-list">
			{
				collections.map((collection) => (
					<CollectionsItem 
						key={collection.id} 
						open={open} 
						openCode={openCode}
						{...collection} />
				))
			}
		</div>
	);
}

export default CollectionsList;
