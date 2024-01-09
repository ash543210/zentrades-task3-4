import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice.js";

const store = configureStore({ reducer: { user: userSliceReducer } });

export default store;
