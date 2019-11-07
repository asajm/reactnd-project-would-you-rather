export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_USER = 'ANSWER_USER'
export const UPDATE_USER = 'UPDATE_USER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        user
    }
}
