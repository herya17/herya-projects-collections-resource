import React from 'react';
import CollectionsItemImagesItem from './CollectionsItemImagesItem';
import { MdArrowBackIos } from 'react-icons/md';

class CollectionsItemImages extends React.Component {
	constructor(props) {
		super(props);

		this.onImageClickedHandler = this.onImageClickedHandler.bind(this);
		this.onCloseHandler = this.onCloseHandler.bind(this);
	}

	onImageClickedHandler(url, captionImg) {
		const myModal = document.getElementById("myModal");
		const modalImg = document.getElementById("modalImg");
		const caption = document.querySelector(".caption");

		myModal.style.display = "block";
		modalImg.src = url;
		caption.innerHTML = captionImg;
	}

	onCloseHandler() {
		const myModal = document.getElementById("myModal");
		myModal.style.display = "none";
	}

	render() {
		return (
			<div className="collections-item__images">
	      <CollectionsItemImagesItem id={this.props.id} name={this.props.name} images={this.props.images} onImageClicked={this.onImageClickedHandler} />      
	      <div id="myModal" className="modal" onClick={this.onCloseHandler}>
					<span className="close" onClick={this.onCloseHandler}>
						{/* <i className="material-icons icon">chevron_left</i> */}
						<MdArrowBackIos />
					</span>
				  	<img className="modal-content" id="modalImg" alt="modal" />
				  	<div className="caption"></div>
				</div>
	    </div>
		);
	}
}

export default CollectionsItemImages;
