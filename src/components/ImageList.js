import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  // use the map method to create a list of image elements
  // the ImageCard child component is created for each image
  const images = props.images.map(image => {
    // passing the image through as a prop called image
    // the required index key is image.id
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
