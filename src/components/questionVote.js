import React, { Component } from "react";
import { connect } from "react-redux";
import { optionOne, optionTwo, getColor } from "../utils/helpers";
import { handleAnswerQuestion } from "../actions/shared";
import {
  Card,
  Container,
  Col,
  Row,
  CardBody,
  CardFooter,
} from "shards-react";

class QuestionVote extends Component {
  state = {
    selectedOption: null,
    color: getColor()
  }

  changeOption = (e) => {
    this.setState({
      selectedOption: e.target.value
    })
  }

  submitVote = (e) => {
    e.preventDefault()
    const { currentUser, question } = this.props
    const answer = this.state.selectedOption
    if (answer === null) return
    const info = {
      user: currentUser,
      question,
      answer
    }
    this.props.dispatch(handleAnswerQuestion(info))
  }

  render() {
    const { question, author } = this.props
    const color = this.state.color
    return (
      <form onSubmit={this.submitVote}>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
          </Row>
          <Row>
            <Col sm={{ size: 6, order: 3, offset: 3 }}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundColor: color }}
                >
                  <h5 className='text-white text-center mt-3'>{author.name}</h5>
                  <div className="card-post__author d-flex">
                    <li
                      href="#"
                      className="card-post__author-avatar"
                      style={{ backgroundImage: `url('${author.avatarURL}')` }}
                    >
                    </li>
                  </div>
                </div>
                <CardBody>
                  <h4 className="card-title">Would You Rather</h4>
                  <select className="custom-select custom-select-lg" size="2">
                    <option value={optionOne} onClick={this.changeOption}>{question.optionOne.text}</option>
                    <option value={optionTwo} onClick={this.changeOption}>{question.optionTwo.text}</option>
                  </select>

                </CardBody>
                <CardFooter className="border-top d-flex">
                  <button
                    className='btn btn-light w-100'
                    style={{ color: color, backgroundColor: color.concat('20') }}
                  >
                    <strong>Vote</strong>
                  </button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </form>
    )

  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  const author = users[question.author]
  const currentUser = users[authedUser]

  return {
    question,
    author,
    authedUser,
    currentUser,
  }
}

export default connect(mapStateToProps)(QuestionVote)