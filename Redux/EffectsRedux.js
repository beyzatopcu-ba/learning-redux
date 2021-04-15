// Initial State
const INITIAL_STATE = {
    text: '',
};

export const textSelector = globalState => globalState.effects.text;

// Action Types
export const SET_TEXT = "effects/set_text";
export const SET_TEXT_REQUEST = "effects/set_text_request";

// Action Creators
export const setTextAC = (text) => {
    return {
        type: SET_TEXT,
        payload: {
            text,
        }
    }
}

export const setTextRequestAC = () => {
    return {
        type: SET_TEXT_REQUEST,
    }
}

// Reducer
export const effectsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SET_TEXT:
            // ismi değiştirecek
            let newText = action.payload.text;
            return {
                text: newText,
            };
    
        default:
            return state;
    }

};