import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    regError: {},
    loginError: {},
    isLoading: true,
  },
  reducers: {
    setRegError: (state, action) => {
      state.regError = action.payload;
    },
    setLoginError: (state, action) => {
      state.LoginError = action.payload;
    },
    getUserLocalStorage: (state, action) => {
      state.isLoading = true;
      const user = localStorage.getItem("user");
      if (user) state.user = JSON.parse(user);
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    logout: (state) => {
      state.user = {};
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.regError = {};
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      })

      // sign in user
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        if (action.payload.token) {
          state.user = action.payload;
          localStorage.setItem("user", JSON.stringify(action.payload));
          state.loginError = {};
        } else {
          state.loginError = { message: "User not found!" };
        }
        state.isLoading = false;
      })
      .addCase(signInUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

//create sign up thunk
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData) => {
    try {
      const res = await axios.post("https://reqres.in/api/register", userData);
      return res.data;
    } catch (err) {
      return err;
    }
  }
);

// create signin user thunk
export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (userData) => {
    try {
      const res = await axios.post("https://reqres.in/api/login", userData);
      return res.data;
    } catch (err) {
      return err;
    }
  }
);

export const {
  setRegError,
  getUserLocalStorage,
  setLoading,
  setLoginError,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
