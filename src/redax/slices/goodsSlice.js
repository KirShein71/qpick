import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchGoods= createAsyncThunk('goods/fetchGoodsStatus', async (params) => {
    const {sortBy, order, search, category} = params;
    const {data} = await axios.get
        (`https://62f4d568535c0c50e7634e7f.mockapi.io/items?&${search}${category}&sortBy=${sortBy}&order=${order}`);
    return data
    }
  )
  

const initialState = { 
    items : [],
    status: 'loading', //loading | success | error
};

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGoods.pending, (state) => {
            state.status = 'loading';
            state.items = []
        })
        .addCase(fetchGoods.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'succsess'
        })
        .addCase(fetchGoods.rejected, (state) => {
            state.status = 'error';
            state.items = []
        })
    },
});

export const {setItems} = goodsSlice.actions;
export const selectGoods = (state) => state.goods;

export default goodsSlice.reducer;