import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardSlice"; // Corrected import

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer, // Updated to match the slice name
  },
});

export default store;
