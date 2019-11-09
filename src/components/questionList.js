import React, { Component } from "react";
import { connect } from "react-redux";
import Question from './question'
import { isVoted } from "../utils/helpers";
import {
  Container,
  Row,
} from "shards-react";

class QuestionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewAnsweredQuestions: false
    }
  }

  changeView = (e) => {
    e.preventDefault()
    this.setState((state, props) => {
      return {
        viewAnsweredQuestions: !state.viewAnsweredQuestions
      }
    })
  }

  render() {
    console.log('# QuestionList > render > props : ', this.props)
    const { authedUser, questions } = this.props
    const notYet = this.state.viewAnsweredQuestions === false ? 'active' : null
    const answered = this.state.viewAnsweredQuestions === true ? 'active' : null
    return (
      <Container fluid className="main-content-container px-4 py-4">
        <Row>
          <ul className="nav nav-tabs w-100 justify-content-center mb-3">
            <li className="nav-item">
              <a className={`nav-link ${notYet}`} href="#" onClick={this.changeView}>Need Your Answer</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${answered}`} href="#" onClick={this.changeView}>Answered</a>
            </li>
          </ul>
        </Row>
        <Row>
          {
            questions
              .filter(question => this.state.viewAnsweredQuestions === isVoted(question, authedUser))
              .map(question => (
                  <Question key={question.id} id={question.id}></Question>
              ))
          }
        </Row>
      </Container>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  const orderedQuestions = Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    .map(key => {
      return questions[key];
    })
  return {
    authedUser,
    questions: orderedQuestions
  }
}

export default connect(mapStateToProps)(QuestionList)