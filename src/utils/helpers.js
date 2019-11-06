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