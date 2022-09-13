import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props) {
  const { post, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>
        {post.location} - {post.names}
      </h3>
      <p>
        <em>{post.issue}</em>
      </p>
      <button onClick={onClickingEdit}>Update Post</button>
      <button onClick={() => onClickingDelete(post.id)}>Close Post</button>
      <hr />
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;
