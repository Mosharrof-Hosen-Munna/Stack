import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        user: {},
        regError: {},
        LoginError: {},
        isLoading: false
    },
    reducers:{
        setRegError: (state,action)=>{
            state.regError = action.payload
        },
        getUserLocalStorage: (state,action)=>{
            const user = localStorage.getItem('user')
            if(user) state.user = JSON.parse(user)
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(signupUser.pending,(state,action)=>{
           state.isLoading = true
        })
        .addCase(signupUser.fulfilled,(state,action)=>{
            state.user = action.payload
            state.isLoading = false
            state.regError = {}
            localStorage.setItem('user',JSON.stringify(action.payload))
        })
        .addCase(signupUser.rejected, (state,action)=>{
            state.isLoading = false
            console.log(action.payload)
        })
    }
})

export const signupUser = createAsyncThunk('user/signupUser',async(userData)=>{
   try{
    const res = await axios.post('https://reqres.in/api/register',userData)
    return res.data
   }catch(err){
    return err
   }
})

export const {setRegError,getUserLocalStorage} = authSlice.actions

export default authSlice.reducer