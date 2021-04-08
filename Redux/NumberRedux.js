// Initial state
const INITIAL_STATE = {
    number: 0,
};

// Action Types
// Action tipleri bütün uygulama içerisinde unique olmalı
export const INCREASE_NUMBER = "number/increase_number";
export const DECREASE_NUMBER = "number/decrease_number";
const RESET = "number/reset";

// Reducer
// Action tipine göre, değişikliği yapar
// Her zaman mutlaka bir state objesi döndürmek zorunda
export const numberReducer = (state = INITIAL_STATE, action) => {
    const actionType = action.type;

    // state.number = state.number + 1; // State'i doğrudan değiştirme
    // State içerisinde değiştirelecek olan şeyi ayrı değişkene aldık.
    let number = state.number;

    switch (actionType) {
        case INCREASE_NUMBER:
             // Sayıyı arttır

             // Yeni state nesnesi oluştur
             // State'in yeni halini döndürürken, mutlaka yeni bir nesne olmalı
             let newState = {
                 number: number + 1
             }

             // Güncellenmek üzere döndür
             return newState;
        case DECREASE_NUMBER:
             // Sayıyı azaltacak

             // Yeni state nesnesi oluşturup döndür
             // State'in yeni halini döndürürken, mutlaka yeni bir nesne olmalı
             return {
                 number: number - 1,
             };
        case RESET:
             // Sıfırla
             return {
                 number: 0,
             };
        default:
            // Eğer action tipi, bu reducer'ın alanına girmiyorsa
            // State'i olduğu gibi değiştirmeden döndürür.
            return state;
    }
};