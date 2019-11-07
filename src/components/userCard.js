import React, { Component } from "react";
import { connect } from "react-redux";
import { getScores } from "../utils/helpers";

class UserCard extends Component {
    render() {
        const { user, scores } = this.props
        return (
            <div>
                <h3>{user.name}</h3>
                <img src={user.avatarURL} alt="avatar" height='50'></img>
                <p>Score-<strong>{scores.score}</strong></p>
                <p>answers-<strong>{scores.answers}</strong></p>
                <p>questions-<strong>{scores.questions}</strong></p>
            </div>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    const user = users[id]
    const scores = getScores(user)
    return {
        user,
        scores
    }
}

export default connect(mapStateToProps)(UserCard)