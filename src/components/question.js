import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
    toVote = (e, questionId) => {
        e.preventDefault()
        // Todo: redirect to question page
    }

    render() {
        const question = this.props.question
        const author = this.props.author
        return (
            <div>
                <h3>{author.name}</h3>
                <img src={author.avatarURL} alt="avatar" height='50'></img>
                <h4>whoudl your rather:</h4>
                <p>{question.optionOne.text} ...</p>
                <button onClick={(e) => this.toVote(e, question.id)}>vote</button>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {id}) {
    const question = questions[id]
    const author = question ? users[question.author] : null

    return {
        authedUser,
        question,
        author

    }
}

export default connect(mapStateToProps)(Question)