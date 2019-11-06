import React, { Component } from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
// import QuestionList from './questionList'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <div>get start</div>
    );
  }
}

export default connect()(App);
