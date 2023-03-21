import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        user: {},
        regError: {},
        LoginError: {},

    },
    reducers:{},
    extraReducers:(builder)=>{

    }
})

export const signupUser = createAsyncThunk('user/signupUser',async(userData)=>{
    const res = await axios.post('https://reqres.in/api/register',userData)
})

export default authSlice.reducer