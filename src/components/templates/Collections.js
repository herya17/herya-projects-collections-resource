import React from 'react';
import CollectionsApp from './CollectionsApp';

function Collections({ collections, openEventHandler, openCodeEventHandler }) {
  return (
    <CollectionsApp
			collections={collections}
			open={openEventHandler}
			openCode={openCodeEventHandler} />
  );
}

export default Collections;
