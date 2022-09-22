import React from 'react';
import Lightbox from 'react-image-lightbox';

function LightboxImages({ photoIndex, isOpen, listImage, onClose, onMove }) {
	console.log(listImage);
	return (
		<>	
			{
				isOpen && (
					<Lightbox
						mainSrc={listImage[photoIndex]}
						nextSrc={listImage[(photoIndex + 1) % listImage.length]}
						prevSrc={listImage[(photoIndex + listImage.length -1) % listImage.length]}
						onCloseRequest={() => onClose(false)}
						onMovePrevRequest={() => 
							onMove((photoIndex + listImage.length - 1) % listImage.length)
						}
						onMoveNextRequest={() =>
							onMove((photoIndex + 1) % listImage.length)
						} 
					/>
				)
			}
		</>
	);
}

export default LightboxImages;
