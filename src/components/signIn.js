import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from 'react-router-dom'
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Container,
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "shards-react";

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      value: '',
      isSignedIn: false,
      open: false
    }
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }

  handleChange(e) {
    const username = e.target.value
    this.props.dispatch(setAuthedUser(username))
    this.setState({ isSignedIn: true })
  }

  render() {
    const { usernames } = this.props
    return (

      this.state.isSignedIn
        ? <Redirect to='/'></Redirect>
        : <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
          </Row>
          <Row>
            <Col sm={{ size: 6, order: 3, offset: 3 }}>
              <Card small className="mb-4 pt-3">
                <CardHeader className="border-bottom text-center">
                  <div className="mb-3 mx-auto">
                    <img
                      src='https://hackernoon.com/hn-images/1*VeM-5lsAtrrJ4jXH96h5kg.png'
                      alt={'userDetails.name'}
                      width="256"
                    />
                  </div>
                  <h4 className="mb-0">Would You Rather</h4>
                </CardHeader>
                <ListGroup flush>
                  <ListGroupItem className="px-4">
                    <Dropdown open={this.state.open} toggle={this.toggle} size="lg">
                      <DropdownToggle className='w-100'>Login</DropdownToggle>
                      <DropdownMenu className='w-100'>
                        {
                          usernames.map(username => (
                            <DropdownItem key={username} value={username} onClick={(e) => this.handleChange(e)}>{username}</DropdownItem>
                          ))
                        }
                      </DropdownMenu>
                    </Dropdown>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    usernames: Object.keys(users)
  }
}

export default connect(mapStateToProps)(SignIn)