import React, { Component } from "react";
import { connect } from "react-redux";
import { isVoted } from "../utils/helpers";
import QuestionVote from './questionVote'
import QuestionResult from './questionResult'

class QuestionContainer extends Component {
    render() {
        console.log(this.props)
        const { authedUser, question } = this.props
        return (
            <div>
                {
                    isVoted(question, authedUser)
                    ? (<QuestionResult id={question.id}></QuestionResult>)
                    : (<QuestionVote id={question.id} ></QuestionVote>)
                }
            </div>
        )

    }
}

function mapStateToProps({ authedUser, questions }, { id }) {
    const question = questions[id]
    return {
        question,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionContainer)