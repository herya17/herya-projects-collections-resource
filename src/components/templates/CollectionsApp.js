import React from 'react';
import CollectionsList from './CollectionsList';
import BoxMessage from '../contents/BoxMessage';

function CollectionsApp({ collections, open, openCode, showAlert }) {
	return (
		<>
		{
			collections.length > 0
				? <CollectionsList 
					collections={collections} 
					open={open} 
					openCode={openCode}
					showAlert={showAlert} />
				: <BoxMessage
					icon="pan_tool"
					message="Title could not be found!" />
		}
		</>
	);
}

export default CollectionsApp;
