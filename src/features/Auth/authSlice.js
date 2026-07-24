import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, signupAPI } from "./authAPI";
import { meAPI } from "./authAPI";
import { toast } from 'sonner';


export const signInUser = createAsyncThunk("products/signInUser", async ( arg , thunkAPI ) => {
    try {
        return await loginAPI(arg);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


export const signUpUser = createAsyncThunk("products/signUpUser", async ( arg , thunkAPI ) => {
    try {
        return await signupAPI(arg);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


export const getMe = createAsyncThunk("auth/getMe", async (_, thunkAPI) => {
    try {
        return await meAPI();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data);
    }
});


const initialState = {
    user: null,
    loading: false,
    error: null,
    authChecked: false,
};


const userSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder

         // Sign In
            .addCase(signInUser.pending, (state) => {
                state.loading = true;
            })

            .addCase(signInUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                toast.success("User login Successfully")
            })

            .addCase(signInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload?.message || "Login failed");
            })


            // Sign Up
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
            })

            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                toast.success("User Signup Successfully")
            })

            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(action.payload?.message || "Signup failed");
            })


            // Get Me Check
            .addCase(getMe.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.loading = false;
                state.authChecked = true;
                state.user = action.payload;
            })
            .addCase(getMe.rejected, (state) => {
                state.loading = false;
                state.authChecked = true;
                state.user = null;   // no valid session — not logged in, not an error to show
            })
        
        },
    });



export default userSlice.reducer;