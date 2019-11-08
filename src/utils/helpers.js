
export function isVoted(question, authedUser) {
    console.log('# isVoted > question: ', question)
    const { optionOne, optionTwo } = question
    const votes = [...optionOne.votes, ...optionTwo.votes]
    return votes.includes(authedUser)
}

export function getScores(user) {
    const answers = Object.keys(user.answers).length
    const questions = user.questions.length
    const score = questions + answers
    return {
        score,
        answers,
        questions
    }
}

export const formatUser = {
    forAddQuestion: ({ user, qid }) => {
        return {
            ...user,
            questions: user.questions.concat([qid])
        }
    },
    forAnswerQuestion: ({ user, qid, answer }) => {
        return {
            ...user,
            answers: {
                ...user.answer,
                [qid]: answer
            }
        }
    },
    forLeaderboard: () => {
        return {

        }
    }
}

export const formatQuestion = {
    forAnswerQuestion: ({ question, uid, answer }) => {
        console.log(question)
        return {
            ...question,
            [answer]: {
                ...question[answer],
                votes: question[answer].votes.concat([uid])
            }
        }
    },
    forResult: ({ question, author, authedUser }) => {
        const { id, optionOne, optionTwo } = question
        const { name, avatarURL } = author
        const votedOptionOne = optionOne.votes.includes(authedUser)
        const votedOptionTwo = optionTwo.votes.includes(authedUser)
        const votesOptionOne = optionOne.votes.length
        const votesOptionTwo = optionTwo.votes.length
        const votesTotal = votesOptionOne + votesOptionTwo

        return {
            id,
            name,
            avatarURL,
            votedOptionOne,
            votedOptionTwo,
            votesOptionOne,
            votesOptionTwo,
            votesTotal,
            textOptionOne: optionOne.text,
            textOptionTwo: optionTwo.text,
        }
    }
}


export const optionOne = 'optionOne'
export const optionTwo = 'optionTwo'