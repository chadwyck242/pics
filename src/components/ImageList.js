import './ImageList.css';
import React from 'react';

const ImageList = props => {
  // use the map method to create a list of image elements
  // this list is assigned to images variable which is
  // referenced in the div below
  const images = props.images.map(({ description, id, urls }) => {
    // notice the use of destructuring above and below...
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
