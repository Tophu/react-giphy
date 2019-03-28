import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const giphy = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={giphy} alt="" className="gif" />
    );
  }
}

export default Gif;
