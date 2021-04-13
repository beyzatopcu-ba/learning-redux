// Initial State
const INITIAL_STATE = {
    list: [],
};

// Action Types
const ADD_ITEM = "itemlist/add_item";

// Action Creators
export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: {
            item,
        }
    }
}

// Selectors
export const listSelector = state => {
    return state.shoppingList.list;
}

// Reducer
// action: {type: String, payload: {name}}
export const listReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_ITEM:
            let item = action.payload.item;
            let copyList = [...state.list];
            copyList.push(item);
    
            return {
                list: copyList,
            }
        default:
            return state;
    }

};