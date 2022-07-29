import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    date: "2020/07/25",
    amount: 5142,
    payment_method: "bank",
    remark: "Akash",
  },
  {
    id: uuidv4(),
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
    },
    deleteReceipt: (state, action) => {
      const { id } = action.payload;
      const exitsContact = state.find((contact) => contact.id === id);
      if (exitsContact) {
        return state.filter((contact) => contact.id !== id);
      }
    },
  },
});

export const { addNewReceipt, deleteReceipt } = receiptSlice.actions;

export default receiptSlice.reducer;
