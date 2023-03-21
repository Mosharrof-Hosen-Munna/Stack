import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice = createSlice({
    name:'users',
    initialState:{
        users: {},
        isLoading:false
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loadUsers.pending,(state,action)=>{
            state.isLoading = true
        })
        .addCase(loadUsers.fulfilled,(state,action)=>{
            if(action.payload.data){
                state.users = action.payload
            }
            state.isLoading = false
        })
        .addCase(loadUsers.rejected,(state,action)=>{
            state.isLoading = false
        })
    }
})

//load user thunk
export const loadUsers = createAsyncThunk('user/all',async (pageNumber)=>{
    const res = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`)
    return res.data
})

// export const {} = usersSlice.actions

export default usersSlice.reducer