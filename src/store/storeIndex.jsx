import { configureStore } from "@reduxjs/toolkit";
import sidebarSliceReducer from "./sidebarSlice";
import countdownSliceReducer from "./countdownSlice";

const store = configureStore({
  reducer: { app: countdownSliceReducer, sidebar: sidebarSliceReducer },
});

export default store;
