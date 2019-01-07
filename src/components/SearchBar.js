import React from "react";

class SearchBar extends React.Component {
  state = { term: '' };

  // callback function that captures and passes the search term back to parent
  onFormSubmit = (event) => {
    event.preventDefault();

    // this is the callback function from the parent to child
    // allows the passing of data back to the parent component
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
