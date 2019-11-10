import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import {
  Col,
  Card,
  CardBody,
  CardFooter,
} from "shards-react";
import { getColor } from "../utils/helpers";

class Question extends Component {
  toVote = (e, questionId) => {
    e.preventDefault()
    // Todo: redirect to question page
  }

  render() {
    const { question, author } = this.props
    const color = getColor()
    return (
      <Col lg="3" md="6" sm="12" className="mb-4">
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
            <h5 className="card-title">Would You Rather</h5>
            <p className="card-text d-inline-block mb-3">{question.optionOne.text} ...</p>
          </CardBody>
          <CardFooter className="border-top d-flex">
            <Link
              to={`/questions/${question.id}`}
              className='btn btn-light w-100'
              style={{ color: color, backgroundColor: color.concat('20') }}
            >
              <strong>Vote</strong>
            </Link>
          </CardFooter>
        </Card>
      </Col>
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