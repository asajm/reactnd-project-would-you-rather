import React, { Component } from "react";
import { connect } from "react-redux";
import { getScores } from "../utils/helpers";
import {
  Card,
  Container,
  Col,
  Row,
  CardBody,
} from "shards-react";
import { getColor } from "../utils/helpers";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserCard extends Component {
  render() {
    const { user, scores } = this.props
    const answerPct = 100*scores.answers/scores.score
    const questionPct = 100*scores.questions/scores.score
    const color = getColor()
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
                <h5 className='text-white text-center mt-3'>{user.name}</h5>
                <div className="card-post__author d-flex">
                  <li
                    href="#"
                    className="card-post__author-avatar"
                    style={{ backgroundImage: `url('${user.avatarURL}')` }}
                  >
                  </li>
                </div>
              </div>
              <CardBody>
                <Row>
                  <Col sm="12" md="9" lg="10">
                    <div className="progress" style={{height: '1.5rem'}}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: `${questionPct}%`, height: '1.5rem', backgroundColor: color}}
                      >
                        {scores.questions} questions
                      </div>

                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: `${answerPct}%`, height: '1.5rem', backgroundColor: color.concat('aa')}}
                      >
                        {scores.answers} answers
                      </div>
                    </div>
                  </Col>
                  <Col sm="12" md="3" lg="2">
                    <div className='text-center'>
                      <h4>
                        <FontAwesomeIcon icon={faTrophy} /> {scores.score}
                      </h4>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container >

      // <div>
      //   <h3>{user.name}</h3>
      //   <img src={user.avatarURL} alt="avatar" height='50'></img>
      //   <p>Score-<strong>{scores.score}</strong></p>
      //   <p>answers-<strong>{scores.answers}</strong></p>
      //   <p>questions-<strong>{scores.questions}</strong></p>
      // </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id]
  const scores = getScores(user)
  return {
    user,
    scores
  }
}

export default connect(mapStateToProps)(UserCard)