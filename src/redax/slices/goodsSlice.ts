import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type FetchGoodsArg = Record<string, string>

 export const fetchGoods= createAsyncThunk<GoodsItem[], FetchGoodsArg>('goods/fetchGoodsStatus', async (params ) => {
    const {sortBy, order, search, category} = params;
    const {data} = await axios.get<GoodsItem[]>
        (`https://62f4d568535c0c50e7634e7f.mockapi.io/items?&${search}${category}&sortBy=${sortBy}&order=${order}`);
    return data
    }
  )
  
type GoodsItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
}

export enum Status  {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface GoodsSliceState {
    items: GoodsItem[];
    status: Status;
};


const initialState: GoodsSliceState = { 
    items : [],
    status: Status.LOADING
};

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<GoodsItem[]>) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGoods.pending, (state) => {
            state.status = Status.LOADING;
            state.items = []
        })
        .addCase(fetchGoods.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        })
        .addCase(fetchGoods.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = []
        })
    },
});

export const {setItems} = goodsSlice.actions;
export const selectGoods = (state: RootState) => state.goods;

export default goodsSlice.reducer;