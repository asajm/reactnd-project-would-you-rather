import React, { Component } from "react";
import { connect } from "react-redux";
import { optionOne, optionTwo } from "../utils/helpers";
import { handleAnswerQuestuon } from "../actions/shared";

class QuestionVote extends Component {
    state = {
        selectedOption: optionOne
    }

    changeOption = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    submitVote = (e) => {
        e.preventDefault()
        const { authedUser, question } = this.props
        const answer = this.state.selectedOption
        const info = {
            authedUser,
            question,
            answer
        }
        this.props.dispatch(handleAnswerQuestuon(info))
    }

    render() {
        const { question, author } = this.props
        return (
            <div>
                <form onSubmit={this.submitVote}>
                    <h3>{author.name}</h3>
                    <img src={author.avatarURL} alt="avatar" height='50'></img>
                    <h2>Would You Rather...</h2>
                    <input type='radio'
                        value={optionOne}
                        checked={this.state.selectedOption === optionOne}
                        onChange={this.changeOption}
                    />
                        {question.optionOne.text}
                    <br/>
                    <input type='radio'
                        value={optionTwo}
                        checked={this.state.selectedOption === optionTwo}
                        onChange={this.changeOption}
                    />
                        {question.optionTwo.text}
                    <br/>
                    <button>submit</button>
                </form>
            </div>
        )

    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const author = users[question.author]

    return {
        question,
        author,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionVote)