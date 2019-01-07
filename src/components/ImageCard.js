import React from "react";

class ImageCard extends React.Component {
  // Contructor that will be used to create a React ref
  // used to capture image height as a prop
  constructor(props) {
    super(props);

    // how to create a reference (ref) in React
    this.imageRef = React.createRef();
  }

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
