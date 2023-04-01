import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Sort = {
    name: string;
    sortProperty: 'raiting' | 'price' | 'title' | '-title' | '-price';
}

interface SortSliceState {
    sort: Sort
}

const initialState: SortSliceState = {
    sort: {
        name: 'популярности',
        sortProperty: 'raiting'
    }
}

export const sortSlice = createSlice ({
    name: "sort",
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        }
    }
})

export const selectSort = (state: RootState) => state.sort.sort
export const selectSortType = (state: RootState) => state.sort.sort.sortProperty
export const {setSort} = sortSlice.actions

export default sortSlice.reducer