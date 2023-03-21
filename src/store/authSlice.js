import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        user: {},
        regError: {},
        LoginError: {},
        isLoading: true
    },
    reducers:{
        setRegError: (state,action)=>{
            state.regError = action.payload
        },
        setLoginError: (state,action)=>{
            state.LoginError = action.payload
        },
        getUserLocalStorage: (state,action)=>{
            state.isLoading = true
            const user = localStorage.getItem('user')
            if(user) state.user = JSON.parse(user)
            state.isLoading = false
        },
        setLoading : (state,action)=>{
            state.isLoading = action.payload
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

        // sign in user
        .addCase(signInUser.pending,(state,action)=>{
            state.isLoading = true
        })
        .addCase(signInUser.fulfilled,(state,action)=>{
            state.user = action.payload
            state.isLoading= false
        })
        .addCase(signInUser.rejected,(state,action)=>{
            console.log(action.payload)
            state.isLoading = false
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

export const signInUser = createAsyncThunk('user/signInUser',async(userData)=>{
   try{
    const res = await axios.post('https://reqres.in/api/login',userData)
    return res.data
   }catch(err){
    return err
   }
})

export const {setRegError,getUserLocalStorage,setLoading,setLoginError} = authSlice.actions

export default authSlice.reducer