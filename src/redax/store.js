import { configureStore } from '@reduxjs/toolkit'
import category from './slices/categorySlice'

export const store = configureStore({
  reducer: {
    category
  },
})