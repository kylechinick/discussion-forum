import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <React.Fragment>
      <hr />

      {Object.values(props.postList).map(post => (
        <Post
          whenPostClicked={props.onPostSelection}
          names={post.names}
          location={post.location}
          issue={post.issue}
          formattedWaitTime={post.formattedWaitTime}
          id={post.id}
          key={post.id}
        />
      ))}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;
