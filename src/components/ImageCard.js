import React from "react";

class ImageCard extends React.Component {
  // Contructor that will be used to create a React ref
  // used to capture image height as a prop
  constructor(props) {
    super(props);

    // setting spans state
    this.state = { spans: 0 }

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
    // capture the height retunred by ref in const height
    const height = this.imageRef.current.clientHeight;

    // calculate the number of spans based on image height / grid row height
    const spans = Math.ceil(height / 10);

    // set spans as state, using ES2015 syntax to shorten declaration
    this.setState( { spans } );
  }

  render() {
    // destructuring the props object to clean up repetitive code
    const { description, urls } = this.props.image;

    return (
      // inline styling to add the grid-row-end CSS with spans value
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
