import React from 'react';
import CollectionsItemButton from './CollectionsItemButton';

function CollectionsItemHeader({ logo, name, author, view, github, open, openCode, isComplete }) {
	return (
		<div className="collections-item__header">
      <div className="collections-item__picture">
        <img className="lazyload" src="./images/skeleton/placeholder.webp" data-src={logo} alt={name} />
      </div>
      <div className="collections-item__header-body">
        <div className="collections-item__name"><b>{name}</b></div>
        <div className="collections-item__author"><p>{author}</p></div>
      </div>
      <CollectionsItemButton 
        view={view} 
        github={github} 
        open={open} 
        openCode={openCode} 
        isComplete={isComplete} />
    </div>
	);
}

export default CollectionsItemHeader;
