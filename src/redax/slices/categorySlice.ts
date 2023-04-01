import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
type CategorySliceState = {
    categoryId: number;
}

const initialState: CategorySliceState = {
    categoryId: 0,
  }

export const categorySlice = createSlice ({
    name: 'category',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId=action.payload
        },
    },
})

export const {setCategoryId} = categorySlice.actions
export const selectCategory = (state: RootState) => state.category.categoryId;
export default categorySlice.reducer
  