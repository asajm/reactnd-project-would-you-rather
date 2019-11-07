import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveQuestions, answerQuestion } from "../actions/questions";
import { receiveUsers, answerUser } from "../actions/users";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}

export function handleAnswerQuestuon({question, authedUser, answer}) {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const info = {
            authedUser,
            answer,
            qid: question.id,
        }

        return saveQuestionAnswer(info).then(() => {
            dispatch(answerQuestion(info))
            dispatch(answerUser(info))
            dispatch(hideLoading())
        })
    }
}