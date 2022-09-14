import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props) {
  const { post, onClickingDelete, onClickingDecrement, onClickingIncrement } =
    props;

  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>
        {post.title} ||{' '}
        <a href={post.url} target='_blank' rel='noreferrer'>
          Follow the link
        </a>
      </h3>
      <p>{post.timeStamp}</p>
      <p>
        <em>description: {post.description}</em>
        <br />
        <em>votes: {post.votes}</em>
      </p>
      <button className='buttonStyle' onClick={props.onClickingEdit}>
        Update {post.name} Post
      </button>
      <button className='buttonStyle' onClick={() => onClickingDelete(post.id)}>
        Remove Post
      </button>
      <button
        className='buttonStyle'
        onClick={() => onClickingIncrement(post.id)}>
        Updoodle
      </button>
      <button
        className='buttonStyle'
        onClick={() => onClickingDecrement(post.id)}>
        Downdoodle
      </button>
      <hr />
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func,
  onClickingIncrement: PropTypes.func
};

export default PostDetail;
