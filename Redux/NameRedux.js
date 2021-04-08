// Initial State
const INITIAL_STATE = {
    name: '',
};

// Action Types
const CHANGE_NAME = "name/change_name";

// Action Creators
export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: {
            name,
        }
    }
}

// Reducer
// action: {type: String, payload: {name}}
export const nameReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_NAME:
            // ismi değiştirecek
            let newName = action.payload.name;
            return {
                name: newName,
            };
    
        default:
            return state;
    }

};