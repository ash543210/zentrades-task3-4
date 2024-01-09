import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: null, password: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
