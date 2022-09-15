import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  function timeSince(props) {
    let currentTime = new Date();
    let timePassedSinceCreation = currentTime - props.timeStamp;
    let minutes = Math.floor(timePassedSinceCreation / 60000);
    let seconds = ((timePassedSinceCreation % 60000) / 1000).toFixed(0);
    let finalTime =
      minutes + ' minutes and ' + (seconds < 10 ? '0' : '') + seconds;
    return finalTime;
  }

  return (
    <React.Fragment>
      <div className='titleDetail'>
        <h3>
          <a href={props.url} target='_blank' rel='noreferrer'>
            {props.title}
          </a>
          </h3>
          <p
            className='post-data-detail'
            onClick={() => props.whenPostClicked(props.id)}>
            (details)
          </p>
      </div>
      <div className='post-data'>
        <p>Posted: {timeSince(props)} seconds ago</p>
        <p className='post-data-item'>
          <em>description: {props.description}</em>
        </p>
        <p className='post-data-item'>
          <em>votes: {props.votes}</em>
        </p>
      </div>
      {/* <button
        className='buttonStyle'
        onClick={() => props.whenPostClicked(props.id)}>
        Details
      </button> */}
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
