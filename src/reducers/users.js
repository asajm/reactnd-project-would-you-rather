import { RECEIVE_USERS, UPDATE_USER } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case UPDATE_USER:
            return {
                ...state,
                [action.user.id]: action.user
            }
        default:
            return state
    }
}

// users = {
//     ...users,
//     [authedUser]: {
//       ...users[authedUser],
//       questions: users[authedUser].questions.concat([formattedQuestion.id])
//     }
//   }

// {
//     id: generateUID(),
//     timestamp: Date.now(),
//     author,
//     optionOne: {
//         votes: [],
//         text: optionOneText,
//     },
//     optionTwo: {
//         votes: [],
//         text: optionTwoText,
//     }
// }