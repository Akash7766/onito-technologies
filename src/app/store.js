import { configureStore } from "@reduxjs/toolkit";
import receiptReducer from "../services/receiptSlice";

export const store = configureStore({
  reducer: {
    receipt: receiptReducer,
  },
});
