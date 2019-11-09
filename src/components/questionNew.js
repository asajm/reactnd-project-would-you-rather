import React, { Component } from "react";
import { connect } from "react-redux";
import { optionOne, optionTwo } from "../utils/helpers";
import { handleAddQuestion } from "../actions/shared";
import {
  Card,
  Container,
  Col,
  Row,
  CardBody,
  CardFooter,
  ListGroup,
  ListGroupItem,
} from "shards-react";
import { getColor } from "../utils/helpers";
import { Redirect } from 'react-router-dom'

class QuestionNew extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
    color: getColor()
  }

  handleChange = (e, option) => {
    const text = e.target.value
    const optionOneText = option === optionOne ? text : this.state.optionOneText
    const optionTwoText = option === optionTwo ? text : this.state.optionTwoText

    this.setState({
      optionOneText,
      optionTwoText
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { author } = this.props
    const { optionOneText, optionTwoText } = this.state

    if (optionOneText.length === 0 || optionTwoText.length === 0) return
    const info = {
      optionOneText,
      optionTwoText,
      author
    }
    this.setState({ toHome: true })
    this.props.dispatch(handleAddQuestion(info))
  }

  render() {
    const { optionOneText, optionTwoText, color, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (

      <form onSubmit={this.handleSubmit}>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
          </Row>
          <Row>
            <Col sm={{ size: 6, order: 3, offset: 3 }}>
              <Card small className="card-post card-post--1">
                <div className="card-post__image" style={{ backgroundColor: color }}>
                  <h5 className='text-white text-center mt-3'>Create New Question</h5>
                </div>
                <ListGroup>
                  <ListGroupItem className="px-4">
                    <h4 className="card-title">Would You Rather</h4>
                    <p style={{marginBottom: '0'}}>Complete the question...</p>
                  </ListGroupItem>
                  <ListGroupItem className="px-4">
                    <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                      <input
                        id='optionOne'
                        type="text"
                        className="form-control"
                        placeholder="Option one..."
                        value={optionOneText}
                        onChange={(e) => this.handleChange(e, optionOne)}
                        style={{marginTop: '1rem'}}
                      ></input>
                    </div>
                    <div className='text-muted text-center' style={{ marginBottom: '0.5rem' }}>───── OR ─────</div>
                    <div className="form-group">
                      <input
                        id='optionTwo'
                        type="text"
                        className="form-control"
                        placeholder="Option two..."
                        value={optionTwoText}
                        onChange={(e) => this.handleChange(e, optionTwo)}
                      ></input>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="px-4">
                    <button
                      className='btn btn-light w-100'
                      style={{ color: color, backgroundColor: color.concat('20') }}
                    >
                      <strong>Submit</strong>
                    </button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </form >
    )

  }
}

function mapStateToProps({ users, authedUser }) {
  const author = users[authedUser]
  return {
    author,
  }
}

export default connect(mapStateToProps)(QuestionNew)