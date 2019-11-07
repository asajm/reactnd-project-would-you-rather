import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import QuestionList from './questionList'
import { LoadingBar } from "react-redux-loading-bar";
import QuestionContainer from "./questionContainer";
import QuestionNew from "./questionNew";
import Leaderboard from "./leaderboard";
import SignIn from "./signIn";


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
          // : <QuestionList></QuestionList>
          // : <QuestionContainer id='8xf0y6ziyjabvozdd253nd'></QuestionContainer> // the 'id' is not answered yet by 'tylermcginnis'
          // : <QuestionContainer id='xj352vofupe1dqz9emx13r'></QuestionContainer> // the 'id' is answered by 'tylermcginnis'
          // : <QuestionNew></QuestionNew>
          // : <Leaderboard></Leaderboard>
          : <SignIn></SignIn>
        }
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
