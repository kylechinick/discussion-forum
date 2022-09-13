import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='title' placeholder='Post Title' />
        <input type='text' name='url' placeholder='Post URL' />
        <input type='number' name='votes' placeholder='Post Votes' />
        <textarea name='description' placeholder='Post Description' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
