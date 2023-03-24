import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    items : []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state,action) {
            state.items.push(action.payload)
        },
        removeItem(state, action) {
            state.items = state.filter((obj)=>obj.id !== action.payload)
        },
        clearItem(state) {
            state.items = [];
        },
    }
});

export const selectCart = (state) => state.cart;

export const {addItem, removeItem,clearItem} = cartSlice.actions;

export default cartSlice.reducer;