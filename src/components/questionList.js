import React, { Component } from "react";
import { connect } from "react-redux";
import Question from './question'
import { isVoted } from "../utils/helpers";

class QuestionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewAnsweredQuestions: false
        }
    }

    changeView = (e) => {
        e.preventDefault()
        this.setState((state, props) => {
            return {
                viewAnsweredQuestions: !state.viewAnsweredQuestions
            }
        })
    }

    render() {
        console.log(this.props)
        const { authedUser, questions } = this.props
        return (
            <div>
                <div>
                    <button onClick={this.changeView}>chagne view</button>
                </div>
                <div>
                    {
                        questions && authedUser
                        ? questions
                            .filter(question => this.state.viewAnsweredQuestions === isVoted(question, authedUser))
                            .map(question => (
                                <li key={question.id}>
                                    <Question id={question.id}></Question>
                                </li>
                            ))
                        : null
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }) {
    const orderedQuestions = Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        .map(key => {
        return questions[key];
    })
    return {
        authedUser,
        questions: orderedQuestions
    }
}

export default connect(mapStateToProps)(QuestionList)