import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import QuestionList from './questionList'
import { LoadingBar } from "react-redux-loading-bar";
import QuestionContainer from "./questionContainer";
import QuestionNew from "./questionNew";
import Leaderboard from "./leaderboard";
import SignIn from "./signIn";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from "./nav";
import PrivateRoute from "./privateRoute";
import NoFound from "./noFound";

function User(props) {
  console.log(props)
  return <h1>Hello {props.match.params.id}!</h1>;
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar></LoadingBar>
          <div>
            <Nav></Nav>
            {
              <Switch>
                <PrivateRoute path='/' exact >
                  <QuestionList />
                </PrivateRoute>
                <Route path='/questions/:id' render={(props) => (
                  <QuestionContainer {...props}></QuestionContainer>
                )} />
                <PrivateRoute path='/new'>
                  <QuestionNew />
                </PrivateRoute>
                <PrivateRoute path='/leaderboard'>
                  <Leaderboard />
                </PrivateRoute>
                <Route path='/login'>
                  <SignIn />
                </Route>
                <Route path="*">
                  <NoFound />
                </Route>
              </Switch>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
