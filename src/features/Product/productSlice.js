import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsAPI, fetchSingleProductAPI } from "./productAPI";


export const fetchProducts = createAsyncThunk("products/fetchProducts", async ( arg , thunkAPI ) => {
    try {
        return await fetchProductsAPI(arg);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


export const fetchSingleProduct = createAsyncThunk("products/fetchSingleProduct", async ( arg , thunkAPI ) => {
    try {
        return await fetchSingleProductAPI(arg);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


const initialState = {
    products: [],
    loading: false,
    error: null,
    hasMore: true,
    loadingMore: false,
    // Single Product
    product: {
        images: [],
        tags: [],
        colors: [],
        sizes: [],
    },
};


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(fetchProducts.pending, (state, action) => {
                if (action.meta.arg.page === 1) {
                    state.loading = true;
                }else{
                    state.loadingMore = true;
                }
            })

            .addCase(fetchProducts.fulfilled, (state, action) => {

                state.loading = false;
                state.loadingMore = false;
                const { products, hasMore } = action.payload;

                if (action.meta.arg.page === 1) {
                    state.products = products;
                } else {
                    state.products = [...state.products, ...products];
                }

                state.hasMore = hasMore;

            })

            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.loadingMore = false;
                state.error = action.payload;
            })

            // Single Product
            .addCase(fetchSingleProduct.pending, (state) => {
                    state.loading = true;
            })

            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.loading = false;
                const { product } = action.payload;
                state.product = product;
            })

            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    },
});



export default productSlice.reducer;