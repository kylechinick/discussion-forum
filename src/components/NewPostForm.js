import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewPostForm(props) {
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    let postDate = new Date();
    props.onNewPostCreation({
      title: event.target.title.value,
      timeStamp: postDate,
      url: event.target.url.value,
      votes: parseInt(event.target.votes.value),
      description: event.target.description.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText='Post'
      />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
