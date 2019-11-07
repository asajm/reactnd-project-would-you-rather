import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestionResult } from "../utils/helpers";

class QuestionResult extends Component {
    render() {
        const { question } = this.props
        console.log(question)
        return (
            <div>
                <h3>{question.name}</h3>
                <img src={question.avatarURL} alt="avatar" height='50'></img>

                <h3>{question.textOptionOne} <span>{question.votedOptionOne ? ' (Voted) ' : ''}</span></h3>
                <p> <span>{question.votesOptionOne} / {question.votesTotal}</span></p>

                <h3>{question.textOptionTwo} <span>{question.votedOptionTwo ? ' (Voted) ' : ''}</span></h3>
                <p> <span>{question.votesOptionTwo}  / {question.votesTotal}</span></p>
            </div>
        )

    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const author = users[question.author]

    return {
        question: formatQuestionResult(question, author, authedUser)
    }
}

export default connect(mapStateToProps)(QuestionResult)