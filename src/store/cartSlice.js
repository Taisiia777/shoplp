// import { createSlice } from '@reduxjs/toolkit';
//
// // Retrieve cart from localStorage or set to empty
// const initialState = {
//     items: JSON.parse(localStorage.getItem('cart')) || [],
// };
//
// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             const item = action.payload;
//             const existingItem = state.items.find((i) => i.id === item.id);
//
//             if (existingItem) {
//                 // If item exists, update quantity
//                 existingItem.quantity += item.quantity;
//             } else {
//                 state.items.push(item);
//             }
//         },
//         removeFromCart: (state, action) => {
//             state.items = state.items.filter((item) => item.id !== action.payload);
//         },
//         clearCart: (state) => {
//             state.items = [];
//         },
//     },
// });
//
// // Middleware to persist cart to localStorage
// export const persistCartMiddleware = (store) => (next) => (action) => {
//     const result = next(action);
//     const state = store.getState();
//     localStorage.setItem('cart', JSON.stringify(state.cart.items));
//     return result;
// };
//
// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
//
// export default cartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

// Retrieve cart from localStorage or set to empty
const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);

            if (existingItem) {
                // If item exists, update quantity
                existingItem.quantity += item.quantity;
            } else {
                state.items.push(item);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

// Middleware to persist cart to localStorage
export const persistCartMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart.items));
    return result;
};

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
