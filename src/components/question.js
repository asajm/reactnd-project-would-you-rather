import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class Question extends Component {
  toVote = (e, questionId) => {
    e.preventDefault()
    // Todo: redirect to question page
  }

  render() {
    const { question, author } = this.props

    return (
      <div>
        <h3>{author.name}</h3>
        <img src={author.avatarURL} alt="avatar" height='50'></img>
        <h4>whoudl your rather:</h4>
        <p>{question.optionOne.text} ...</p>
        <Link to={`/questions/${question.id}`}>vote</Link>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id]
  const author = question ? users[question.author] : null

  return {
    authedUser,
    question,
    author

  }
}

export default connect(mapStateToProps)(Question)