import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") ?? "false"),
  role: localStorage.getItem("role") ?? "",
  data: JSON.parse(localStorage.getItem("data") ?? "{}"),
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
})

// export const {} = authSlice.actions;
export default authSlice.reducer;

