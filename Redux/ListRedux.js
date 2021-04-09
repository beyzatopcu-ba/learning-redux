// Initial State
const INITIAL_STATE = {
    list: [],
};

// Action Types
const ADD_ITEM = "itemlist/add_item";

// Action Creators
export const addItem = (item) => {
    console.log('add item action creator');
    console.log(`Type'o ADD_ITEM, payload'u da ${item} içeren action'ı döndürüyorum.`);
    return {
        type: ADD_ITEM,
        payload: {
            item,
        }
    }
}

// Selectors
export const listSelector = state => {
    console.log('List Selector')
    console.log('Bana gelen state: ', state);
    console.log('İçinden seçip döndürdüğüm liste: ', state.shoppingList.list);
    return state.shoppingList.list;
}

// Reducer
// action: {type: String, payload: {name}}
export const listReducer = (state = INITIAL_STATE, action) => {

    console.log('List reducer')
    console.log('Mevcut state: ', state)
    console.log('Gelen action nesnesi', action)

    switch (action.type) {
        case ADD_ITEM:
            console.log('List reducer -> ADD_ITEM case\'ini çalıştırıyorum');
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