import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewPostForm(props) {
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    // const date = Date.parse(new Date());
    // console.log(event.timeStamp);
    // console.log(date);
    props.onNewPostCreation({
      title: event.target.title.value,
      timeStamp: Date.parse(new Date()),
      url: event.target.url.value,
      votes: parseInt(event.target.votes.value),
      description: event.target.description.value,
      id: v4()
    });
    // event.setTimestamp();
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
