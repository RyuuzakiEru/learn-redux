import React from 'react';

const Comments = React.createClass({
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map((comment)=> console.log(comment))}
      </div>
    );
  }
});

export default Comments;
