import axios from "axios";
import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // An array to contain the images state
  state = { images: [] };

  // Used ES8 Async/Await functions here
  // Refactored to an arrow function to avoid 'this' issue
  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID ea16d2d3f22d5aa6438dda7d0696dc1b97e1d169f4e5d49aa667712ef46416cf"
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images!
      </div>
    );
  }
}

export default App;
