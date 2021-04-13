// Initial State
const INITIAL_STATE = {
    userList: [],
};

// Selectors
export const userListSelector = globalState => globalState.user.userList;

// Action Types
// GET_USERS_REQUEST'i saga dinleyecek
export const GET_USERS_REQUEST = 'user/get_users_request';
export const SET_USERS = 'user/set_users';

// Action Creators
export const getUsersRequest = () => {
    return {
        type: GET_USERS_REQUEST,
    }
};

export const setUsers = (userList) => {
    return {
        type: SET_USERS,
        payload: {
            userList,
        }
    }
}

// Reducer
export const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SET_USERS:
            const userList = action.payload.userList;

            return {
                userList,
            };
    
        default:
            return state;
    }

};