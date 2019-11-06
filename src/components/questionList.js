import React, { Component } from "react";
import { connect } from "react-redux";
import Question from './question'

class QuestionList extends Component {
    render() {
        return (
            <div>
                <div>options</div>
                <div>
                    {this.props.questionIds.map( id => (
                        <li key={id}>
                            <Question id={id}></Question>
                        </li>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions}) {
    return {
        questionIds: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionList)