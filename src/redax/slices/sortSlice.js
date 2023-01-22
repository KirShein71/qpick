import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

export const sortSlice = createSlice ({
    name: "sort",
    initialState,
    reducers: {
        setSort(state, action) {
            state.sort = action.payload;
        }
    }
})

export const {setSort} = sortSlice.actions

export default sortSlice.reducer