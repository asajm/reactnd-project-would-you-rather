import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";
import { fsl, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Question extends Component {
  toVote = (e, questionId) => {
    e.preventDefault()
    // Todo: redirect to question page
  }

  getColor = () => {
    const colors = ['#007bff', '#674eec', '#8445f7', '#ff4169', '#fb7906', '#ffb400', '#17c671', '#1adba2', '#00b8d8', '#868e96', '#007bff', '#5A6169', '#17c671', '#00b8d8', '#ffb400']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  render() {
    const { question, author } = this.props

    return (

      <Col lg="3" md="6" sm="12" className="mb-4">
        <Card small className="card-post card-post--1">
          <div
            className="card-post__image"
            style={{ backgroundColor: this.getColor() }}
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
            <p className="card-text d-inline-block mb-3">{question.optionOne.text}</p>
          </CardBody>
          <CardFooter className="border-top d-flex">
            <Button theme="white" className='w-100'>Vote</Button>
          </CardFooter>
        </Card>
      </Col>


      // <div>
      //   <h3>{author.name}</h3>
      //   <img src={author.avatarURL} alt="avatar" height='50'></img>
      //   <h4>whoudl your rather:</h4>
      //   <p>{question.optionOne.text} ...</p>
      //   <Link to={`/questions/${question.id}`}>vote</Link>
      // </div>
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