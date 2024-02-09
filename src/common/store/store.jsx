import { configureStore } from "@reduxjs/toolkit";
import dragonSlice from "./slices/dragonSlice";

const store = configureStore({
  reducer: {
    dragon: dragonSlice,
  },
});

export default store;
