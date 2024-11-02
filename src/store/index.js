import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { persistCartMiddleware } from './cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(persistCartMiddleware),
});
