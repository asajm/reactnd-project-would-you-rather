import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import { receiveQuestions, updateQuestion } from "../actions/questions";
import { receiveUsers, updateUser } from "../actions/users";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { formatUser, formatQuestion } from "../utils/helpers";

// const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            // dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}

export function handleAnswerQuestion({ question, user, answer }) {
    return (dispatch) => {
        dispatch(showLoading())
        const info = {
            authedUser: user.id,
            answer: answer,
            qid: question.id,
        }

        const _question = question
        const _user = user
        const _answer = answer

        return saveQuestionAnswer(info).then(() => {
            const user = formatUser.forAnswerQuestion({
                user: _user,
                qid: _question.id,
                answer: _answer
            })
            const question = formatQuestion.forAnswerQuestion({
                question: _question,
                uid: _user.id,
                answer: _answer
            })

            dispatch(updateQuestion(question))
            dispatch(updateUser(user))
            dispatch(hideLoading())
        })
    }
}

export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
    return (dispatch) => {
        dispatch(showLoading())
        const info = {
            optionOneText,
            optionTwoText,
            author: author.id
        }
        const _author = author
        return saveQuestion(info).then((question) => {
            const user = formatUser.forAddQuestion({
                user: _author,
                qid: question.id,
            })
            dispatch(updateQuestion(question))
            dispatch(updateUser(user))
            dispatch(hideLoading())

        })
    }
}


