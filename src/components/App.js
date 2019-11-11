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
import Navigation from "./nav";
import PrivateRoute from "./privateRoute";
import NoFound from "./noFound";

import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import "./app.css";


class App extends Component {
  // componentDidMount() {
  //   this.props.dispatch(handleInitialData())
  // }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar></LoadingBar>
          <div>
            <Navigation></Navigation>
            {
              <Switch>
                <PrivateRoute path='/' exact  Component={QuestionList}>
                  <QuestionList />
                </PrivateRoute>
                <Route path='/questions/:id' render={(props) => (
                  <QuestionContainer {...props}></QuestionContainer>
                )} />
                <PrivateRoute path='/add' Component={QuestionNew}>
                  <QuestionNew />
                </PrivateRoute>
                <PrivateRoute path='/leaderboard' Component={Leaderboard}>
                  <Leaderboard />
                </PrivateRoute>
                <Route path='/login' Component={SignIn}>
                  <SignIn />
                </Route>
                <Route path="/404">
                  <NoFound />
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
