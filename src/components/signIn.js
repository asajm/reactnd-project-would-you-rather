import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        value: '',
        isSignedIn: false
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
                : <div>
                    <select value={this.state.value} onChange={e => this.handleChange(e)}>
                        <option>---</option>
                        {
                            usernames.map(username => (
                                <option key={username} value={username}>{username}</option>
                            ))
                        }
                    </select>
                </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        usernames: Object.keys(users)
    }
}

export default connect(mapStateToProps)(SignIn)