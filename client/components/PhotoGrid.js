import React from 'react'
import { Link } from 'react-router'

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {JSON.stringify(this.props.posts, null, ' ')}
      </div>

    );
  }
});


export default PhotoGrid;
