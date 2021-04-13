// Initial State
const INITIAL_STATE = {
    name: '',
};

export const nameSelector = globalState => globalState.nameState.name;

// Action Types
export const CHANGE_NAME = "name/change_name";
export const CHANGE_NAME_FOR_SAGA = "name/change_name_for_saga";

// Action Creators
export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: {
            name,
        }
    }
}

export const changeNameForSaga = (name) => {
    return {
        type: CHANGE_NAME_FOR_SAGA,
        payload: {
            name,
        }
    }
}

// Reducer
export const nameReducer = (state = INITIAL_STATE, action) => {

    console.log('nameReducer with action type ' + action.type
                    + ' and with action data ' + action.payload);

    switch (action.type) {
        case CHANGE_NAME:
            console.log('In CHANGE_NAME case: creating new state');
            // ismi değiştirecek
            let newName = action.payload.name;
            return {
                name: newName,
            };
    
        default:
            return state;
    }

};