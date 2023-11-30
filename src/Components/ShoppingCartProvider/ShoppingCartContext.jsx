
// ShoppingCartContext.js
import React, { createContext, useReducer, useContext, useEffect } from 'react';

const initialState = {
    cartItems: [],
};

const actionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const updatedCartAdd = [...state.cartItems, action.payload];
            saveToLocalStorage(updatedCartAdd);
            return {
                ...state,
                cartItems: updatedCartAdd,
            };
        case actionTypes.REMOVE_FROM_CART:
            const updatedCartRemove = state.cartItems.filter(item => item.name !== action.payload.name);
            saveToLocalStorage(updatedCartRemove);
            return {
                ...state,
                cartItems: updatedCartRemove,
            };
        case actionTypes.CLEAR_CART:
            clearLocalStorage();
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
};

const saveToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const clearLocalStorage = () => {
    localStorage.removeItem('cartItems');
};

const getInitialStateFromLocalStorage = () => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? { cartItems: JSON.parse(savedCartItems) } : initialState;
};

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState, getInitialStateFromLocalStorage);

    useEffect(() => {
        saveToLocalStorage(state.cartItems);
    }, [state.cartItems]);

    const addToCart = (item) => dispatch({ type: actionTypes.ADD_TO_CART, payload: item });
    const removeFromCart = (item) => dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: item });
    const clearCart = () => dispatch({ type: actionTypes.CLEAR_CART });

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems: state.cartItems,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};

export const useShoppingCart = () => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
    }
    return context;
};
