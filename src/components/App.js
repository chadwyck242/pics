import unsplash from "../api/unsplash";
import React from "react";
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends React.Component {
  // An array to contain the images state
  state = { images: [] };

  // Used ES8 Async/Await functions here
  // Refactored to an arrow function to avoid 'this' issue
  // unplash comes from the api/unsplash configuration file
  onSearchSubmit = async term => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term }
      }
    );
    // sets the state for images using unsplash api data
    // retrieved from axios
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
