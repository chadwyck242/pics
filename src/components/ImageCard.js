import React from "react";

class ImageCard extends React.Component {
  // Contructor that will be used to create a React ref
  // used to capture image height as a prop
  constructor(props) {
    super(props);

    // how to create a reference (ref) in React
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // use event listener to capture data once images have finished
    // loading, then call the setSpans function for grid layout
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // this function will calculate how many grid rows the image will span
  // so we can dynamically set the grid-row-span CSS property for each image
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    // destructuring the props object to clean up repetitive code
    const { description, urls } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
