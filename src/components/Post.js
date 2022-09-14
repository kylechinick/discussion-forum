import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>
          {props.title} || {props.url}
        </h3>
        <p>{props.timeStamp}</p>
        <p>
          <em>description: {props.description}</em>
          <br />
          <em>votes: {props.votes}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  timeStamp: PropTypes.string,
  url: PropTypes.string,
  votes: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
};

export default Post;
