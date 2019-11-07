// export function formatQuestion(question, author) {
//     const { id, optionOne } = question
//     const { name, avatarURL } = author

//     return {
//         id,
//         name,
//         avatarURL,
//         text: optionOne.text
//     }
// }

export function isVoted(question, authedUser) {
    const { optionOne, optionTwo } = question
    const votes = [...optionOne.votes, ...optionTwo.votes]
    return votes.includes(authedUser)
}

export function formatQuestionResult(question, author, authedUser) {
    const { id, optionOne, optionTwo } = question
    const { name, avatarURL } = author
    const votedOptionOne = optionOne.votes.includes(authedUser)
    const votedOptionTwo = optionTwo.votes.includes(authedUser)
    const votesOptionOne = optionOne.votes.length
    const votesOptionTwo = optionTwo.votes.length
    const votesTotal = votesOptionOne+votesOptionTwo

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


export const optionOne = 'optionOne'
export const optionTwo = 'optionTwo'