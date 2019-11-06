import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import QuestionList from './questionList'
import { LoadingBar } from "react-redux-loading-bar";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar></LoadingBar>
        {
          this.props.loading === true
          ? null
          : <QuestionList></QuestionList>
        }
      </div>
    );
  }
}

function mapStateToProps({ autherUser }) {
  return {
    loading: autherUser === null
  }
}

export default connect(mapStateToProps)(App);
