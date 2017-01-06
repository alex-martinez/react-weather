import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'Austin'
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ location: '' });
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
    console.log(this.state.location);
  }

  render() {
    return (
      <form className="search" onSubmit={ this.handleSubmit.bind(this) }>
        <input
          value={ this.state.location }
          onChange={ this.handleChange.bind(this) }
          placeholder="Please enter a city"
          />

        <button type="submit">Get Weather</button>
      </form>
    );
  }
}
