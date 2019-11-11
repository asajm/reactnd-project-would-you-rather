import React, { Component } from "react";
import { connect } from "react-redux";
import { isVoted } from "../utils/helpers";
import QuestionVote from './questionVote'
import QuestionResult from './questionResult'
import { Redirect } from 'react-router-dom'

class QuestionContainer extends Component {
  render() {
    const { authedUser, question } = this.props

    if (question === null || authedUser == null) {
      return <Redirect to='/404' />
    }
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

function mapStateToProps(state, props) {
  const { questions, authedUser } = state
  const { id } = props.match.params
  const question = questions[id]
  return {
    question,
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionContainer)