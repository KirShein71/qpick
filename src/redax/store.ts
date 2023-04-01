import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import category from './slices/categorySlice'
import sort from './slices/sortSlice'
import cart from './slices/cartSlice'
import goods from './slices/goodsSlice'

export const store = configureStore({
  reducer: {
    category,
    sort,
    cart,
    goods
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 