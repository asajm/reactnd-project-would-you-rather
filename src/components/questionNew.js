import React, { Component } from "react";
import { connect } from "react-redux";
import { optionOne, optionTwo } from "../utils/helpers";
import { handleAddQuestion } from "../actions/shared";

class QuestionNew extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
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
        const info = {
            optionOneText,
            optionTwoText,
            author
        }
        this.props.dispatch(handleAddQuestion(info))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>complete the question:</p>
                    <h2>Would You Rather...</h2>
                    <input type='text'
                        value={this.state.optionOneText}
                        onChange={(e) => this.handleChange(e, optionOne)}
                    />
                    <h3>OR</h3>
                    <input type='text'
                        value={this.state.optionTwoText}
                        onChange={(e) => this.handleChange(e, optionTwo)}
                    />
                    <br />
                    <button>submit</button>
                </form>
            </div>
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