import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function ReusableForm(props) {
  return (
    <React.Fragment>
      {/* <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='title' placeholder='Post Title' />
        <input type='text' name='url' placeholder='Post URL' />
        <input type='number' name='votes' placeholder='Post Votes' />
        <textarea name='description' placeholder='Post Description' />
        <button type='submit'>{props.buttonText}</button>
      </form> */}

    <Form onSubmit={props.formSubmissionHandler}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Post Title:</Form.Label>
        <Form.Control type="text" placeholder="Enter Post Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="url">
        <Form.Label>Post URL:</Form.Label>
        <Form.Control type="text" placeholder="Enter Post URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="votes">
        <Form.Label>Post Votes:</Form.Label>
        <Form.Control type="number" value="0" placeholder="Enter Post Votes" disabled/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Post Description:</Form.Label>
        <Form.Control type="text" placeholder="Enter Post Description" />
      </Form.Group>
      <button type='submit'>{props.buttonText}</button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
