import React, { Component } from "react";
import { connect } from "react-redux";
import { getScores } from "../utils/helpers";
import UserCard from "./userCard";

class Leaderboard extends Component {
  render() {
    const { users } = this.props
    return (
      <div>
        {
          users.map(user => (
            <UserCard id={user.id}></UserCard>
          ))
        }
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const orderedUsers = Object.keys(users)
    .sort((a, b) => getScores(users[b]).score - getScores(users[a]).score)
    .map(key => {
      return users[key];
    })
  return {
    users: orderedUsers
  }
}

export default connect(mapStateToProps)(Leaderboard)