import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
  Container,
  Col,
  Row,
  Badge,
  CardBody,
} from "shards-react";
import { getColor } from "../utils/helpers";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class QuestionResult extends Component {
  render() {
    const { question } = this.props
    const rateOptionOne = (100 * question.votesOptionOne / question.votesTotal).toFixed(0)
    const rateOptionTwo = (100 * question.votesOptionTwo / question.votesTotal).toFixed(0)
    const color = getColor()
    console.log(question)
    return (
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
                <h5 className='text-white text-center mt-3'>{question.name}</h5>
                <div className="card-post__author d-flex">
                  <li
                    href="#"
                    className="card-post__author-avatar"
                    style={{ backgroundImage: `url('${question.avatarURL}')` }}
                  >
                  </li>
                </div>
              </div>
              <CardBody>
                <h5 className="card-title">Would You Rather</h5>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem className="px-4">
                  <div className="progress-wrapper">
                    <strong className="text-muted d-block mb-2">
                      {question.textOptionOne}
                      {' '}
                      {
                        question.votedOptionOne
                          ? (<span className="badge badge-pill badge-success">your vote</span>)
                          : ''
                      }
                    </strong>
                    <Progress
                      className="progress-sm"
                      value={rateOptionOne}
                    >
                      <span className="progress-value">
                        <FontAwesomeIcon icon={faUserFriends}/> {question.votesOptionOne} - {rateOptionOne}%
                      </span>
                    </Progress>
                  </div>
                </ListGroupItem>
                <ListGroupItem className="px-4">
                  <div className="progress-wrapper">
                    <strong className="text-muted d-block mb-2">
                      {question.textOptionTwo}
                      {' '}
                      {
                        question.votedOptionTwo
                          ? (<span className="badge badge-pill badge-success">your vote</span>)
                          : ''
                      }

                    </strong>
                    <Progress
                      className="progress-sm"
                      value={rateOptionTwo}
                    >
                      <span className="progress-value">
                      <FontAwesomeIcon icon={faUserFriends}/> {question.votesOptionTwo} - {rateOptionTwo}%
                      </span>
                    </Progress>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>

      // <div>
      //     <h3>{question.name}</h3>
      //     <img src={question.avatarURL} alt="avatar" height='50'></img>

      //     <h3>{question.textOptionOne} <span>{question.votedOptionOne ? ' (Voted) ' : ''}</span></h3>
      //     <p> <span>{question.votesOptionOne} / {question.votesTotal}</span></p>

      //     <h3>{question.textOptionTwo} <span>{question.votedOptionTwo ? ' (Voted) ' : ''}</span></h3>
      //     <p> <span>{question.votesOptionTwo}  / {question.votesTotal}</span></p>
      // </div>
    )

  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const info = {
    question: questions[id],
    author: users[questions[id].author],
    authedUser
  }

  return {
    question: formatQuestion.forResult(info)
  }
}

export default connect(mapStateToProps)(QuestionResult)