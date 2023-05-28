import React from 'react';
import CollectionsList from './CollectionsList';
import BoxMessage from '../contents/BoxMessage';
import { MdOutlineSentimentDissatisfied } from 'react-icons/md';

function CollectionsApp({ collections, open, openCode }) {
	return (
		<>
			{
				collections.length > 0
					? <CollectionsList 
							collections={collections} 
							open={open} 
							openCode={openCode} />
					: <BoxMessage
							icon={<MdOutlineSentimentDissatisfied className='box-message__icon' />}
							message="Collection does not exist!" />
			}
		</>
	);
}

export default CollectionsApp;
