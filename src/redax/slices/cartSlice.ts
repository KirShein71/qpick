import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getCartFromLS } from "../../utils/getCartFromLS";

type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
}

interface CartSliceState {
    items: CartItem[]
}

const initialState: CartSliceState = { 
    items : getCartFromLS(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state,action: PayloadAction<CartItem>) {
            state.items.push(action.payload)
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
           
        },
        
    }
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.items

export const {addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;