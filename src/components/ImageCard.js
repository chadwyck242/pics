import React from "react";

class ImageCard extends React.Component {
  render() {
    // destructuring the props object to clean up repetitive code
    const { description, urls } = this.props.image;

    return (
      <div>
        <img src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
