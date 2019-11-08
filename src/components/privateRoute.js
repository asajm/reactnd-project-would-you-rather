import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    const { children, ...rest } = this.props
    const { isAuthenticated, loginPath } = rest
    console.log('# PrivateRoute > props : ', this.props)
    return (
      <Route
        {...rest}
        render={
          ({ location }) => isAuthenticated
            ? (children)
            : (<Redirect to={{
              pathname: loginPath,
              state: { from: location }
            }}
            />)
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