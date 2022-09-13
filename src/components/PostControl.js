import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import EditPostForm from './EditPostForm';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      };
      dispatch(action);
    }
  };

  handleDeletingPost = id => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id
    };
    dispatch(action);
    this.setState({
      selectedPost: null
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingPostInList = postToEdit => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = postToEdit;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue
    };
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  };

  handleAddingNewPostToList = newPost => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = newPost;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue
    };
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    };
    dispatch(action2);
  };

  handleChangingSelectedPost = id => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({ selectedPost: selectedPost });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditPostForm
          post={this.state.selectedPost}
          onEditPost={this.handleEditingPostInList}
        />
      );
      buttonText = 'Return to Post List';
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = (
        <PostDetail
          post={this.state.selectedPost}
          onClickingDelete={this.handleDeletingPost}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = 'Return to Post List';
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      );
      buttonText = 'Return to Post List';
    } else {
      currentlyVisibleState = (
        <PostList
          onPostSelection={this.handleChangingSelectedPost}
          postList={this.props.mainPostList}
        />
      );
      buttonText = 'Add Post';
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  };
};

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
