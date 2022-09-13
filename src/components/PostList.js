import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <React.Fragment>
      <hr />
      <h1>All Posts</h1>

      {Object.values(props.postList).map(post => (
        <Post
          whenPostClicked={props.onPostSelection}
          title={post.title}
          url={post.url}
          votes={post.votes}
          description={post.description}
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
