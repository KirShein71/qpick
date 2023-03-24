import { configureStore } from '@reduxjs/toolkit'
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