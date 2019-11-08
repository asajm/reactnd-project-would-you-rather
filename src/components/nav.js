import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { setAuthedUser } from "../actions/authedUser";

class Nav extends Component {

  handleLogout = (e) => {
    this.props.dispatch(setAuthedUser(null))
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/new'>New</Link>
        <Link to='/leaderboard'>Leaderboard</Link>
        {
          user === null
            ? null
            : (
              <div>
                <img src={user.avatarURL} alt="avatar" height='50'></img>
                <button onClick={this.handleLogout}>logout</button>
              </div>
            )
        }
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    user: authedUser ? users[authedUser] : null
  }
}

export default connect(mapStateToProps)(Nav)