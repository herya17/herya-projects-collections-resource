import React from 'react';
// import Lightbox from 'react-lightbox-component';
// import LightboxImages from '../contents/LightboxImages';

function CollectionsItemImagesItem({ name, images, onImageClicked }) {
		return (
			<>
				{
					images.map((image) => (
								<img 
									key={image.id}
									className="lazyload collections-item__images-item" 
									src="./images/skeleton/placeholder.webp" 
									data-src={image.url} 
									alt={name}
									onClick={() => onImageClicked(image.url, name)} />
					))
				}
			</>
		);
}

export default CollectionsItemImagesItem;
