// Initial state
const INITIAL_STATE = {
    number: 0,
    error: '',
};

// Selectors
export const numberSelector = state => state.numberState.number;

// Action Types
// Action tipleri bütün uygulama içerisinde unique olmalı

// Request action'larına Saga'lar karşılık verecek,
// Buradaki reducer'lar request tipleri için switch-case'de case açmayacak.
export const INCREASE_NUMBER_REQUEST = "number/increase_number_request";
export const DECREASE_NUMBER_REQUEST = "number/decrease_number_request";
export const RESET_REQUEST = "number/reset_request";

export const INCREASE_NUMBER_SUCCESS = "number/increase_number_success";
export const DECREASE_NUMBER_SUCCESS = "number/decrease_number_success";
export const RESET_SUCCESS = "number/reset_success";

export const INCREASE_NUMBER_ERROR = "number/increase_number_error";
export const DECREASE_NUMBER_ERROR = "number/decrease_number_error";
export const RESET_ERROR = "number/reset_error";

// Reducer
// Action tipine göre, değişikliği yapar
// Her zaman mutlaka bir state objesi döndürmek zorunda
export const numberReducer = (state = INITIAL_STATE, action) => {
    const actionType = action.type;

    // state.number = state.number + 1; // State'i doğrudan değiştirme
    // State içerisinde değiştirelecek olan şeyi ayrı değişkene aldık.

    switch (actionType) {
        case INCREASE_NUMBER_SUCCESS:
             let newNumber = action.payload.number;
             return {
                 number: newNumber
             };
        case INCREASE_NUMBER_ERROR:
             // Yazılacak
             return state;
        default:
            // Eğer action tipi, bu reducer'ın alanına girmiyorsa
            // State'i olduğu gibi değiştirmeden döndürür.
            return state;
    }
};