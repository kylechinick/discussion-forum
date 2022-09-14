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
      type: 'DELETE_POST',
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
    const { id, title, url, description, votes } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      url: url,
      description: description,
      votes: votes
    };
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  };

  handleAddingNewPostToList = newPost => {
    const { dispatch } = this.props;
    const { id, title, url, description, votes } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      url: url,
      description: description,
      votes: votes
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

  handleDecrementingVotes = () => {
    const votesToDecrement = this.state.selectedPost;
    if (this.state.selectedPost.quantity !== 0) {
      const quantityToDecrement = {
        votes: (votesToDecrement.votes -= 1)
      };
      this.handleChangingSelectedPost(quantityToDecrement.id);
    } else {
      this.handleChangingSelectedPost(this.state.selectedPost.id);
    }
  };

  handleIncrementingVotes = () => {
    const votesToIncrement = this.state.selectedPost;
    if (this.state.selectedPost.quantity !== 0) {
      const quantityToIncrement = {
        votes: (votesToIncrement.votes += 1)
      };
      this.handleChangingSelectedPost(quantityToIncrement.id);
    } else {
      this.handleChangingSelectedPost(this.state.selectedPost.id);
    }
  };

  // handleSettingTimestamp = () => {
  //   const date = new Date();
  //   const showTime =
  //     date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  //   console.log('Current time: ', showTime);

  //   /* return (
  //       <div className="timeGetter">
  //           <h1 align="center">Current Time</h1>
  //           <h2 align="center"> {showTime}</h2>
  //       </div>
  //   );*/
  // };

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
          onClickingDecrement={this.handleDecrementingVotes}
          onClickingIncrement={this.handleIncrementingVotes}
        />
      );
      buttonText = 'Return to Post List';
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewPostForm
          onNewPostCreation={this.handleAddingNewPostToList}
          // setTimestamp={this.handleSettingTimestamp}
        />
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
