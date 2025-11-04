import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/axios";

export const loginUser = createAsyncThunk("user/login", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await API.post("/auth/login", credentials);
    return data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const registerUser = createAsyncThunk("user/register", async (payload, { rejectWithValue }) => {
  try {
    const { data } = await API.post("/auth/register", payload);
    return data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

const userFromStorage = JSON.parse(localStorage.getItem("auron_user") || "null");

const userSlice = createSlice({
  name: "user",
  initialState: { userInfo: userFromStorage, status: "idle", error: null },
  reducers: {
    logout: (state) => { state.userInfo = null; localStorage.removeItem("auron_user"); },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (s) => { s.status = "loading"; })
      .addCase(loginUser.fulfilled, (s, a) => {
        s.status = "succeeded"; s.userInfo = a.payload; localStorage.setItem("auron_user", JSON.stringify(a.payload));
      })
      .addCase(loginUser.rejected, (s, a) => { s.status = "failed"; s.error = a.payload; })

      .addCase(registerUser.pending, (s) => { s.status = "loading"; })
      .addCase(registerUser.fulfilled, (s, a) => {
        s.status = "succeeded"; s.userInfo = a.payload; localStorage.setItem("auron_user", JSON.stringify(a.payload));
      })
      .addCase(registerUser.rejected, (s, a) => { s.status = "failed"; s.error = a.payload; });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
