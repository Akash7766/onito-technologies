import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    date: "2020/07/25",
    amount: 5142,
    payment_method: "bank",
    remark: "Akash",
  },
  {
    id: 2,
    date: "2020/07/25",
    amount: 500,
    payment_method: "cash",
    remark: "Akash",
  },
];

export const receiptSlice = createSlice({
  name: "receipt",
  initialState: initialState,
  reducers: {
    addNewReceipt: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
      console.log(state);
    },
  },
});

export const { addNewReceipt } = receiptSlice.actions;

export default receiptSlice.reducer;
