// Initial State
const INITIAL_STATE = {
    user: '',
};

// Action Types
const LOGIN = "user/login";

// Action Creators
export const login = (username, password) => {
    return {
        type: LOGIN,
        payload: {
            username,
            password,
        }
    }
}

// Reducer
export const userReducer = (state = INITIAL_STATE, action) => {


    switch (action.type) {
        case LOGIN:
            // ismi değiştirecek
            let newUsername = action.payload.username;
            let password = action.payload.password;
            if (password === "1234") {
                return {
                    user: newUsername,
                };
            }
            
            return {
                user: '',
            };
    
        default:
            return state;
    }

};