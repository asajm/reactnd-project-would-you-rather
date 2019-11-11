import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import SignIn from "./signIn";

class PrivateRoute extends Component {
  render() {
    const { children, ...rest } = this.props
    const { isAuthenticated, loginPath } = rest
    return (
      <Route
        {...rest}
        render={
          ({ location }) => isAuthenticated
            ? (children)
            : (<SignIn />)
        }
      />
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isAuthenticated: !(authedUser === null),
    loginPath: '/login'
  }
}

export default connect(mapStateToProps)(PrivateRoute)