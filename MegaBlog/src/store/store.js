import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
const store = configureStore({
  reducer: {
    auth:authSlice,
    //TOdo: add more slices here for posts
  },
});
export default store;
