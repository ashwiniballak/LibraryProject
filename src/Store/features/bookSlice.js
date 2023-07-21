import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [],
};

export const bookSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    updatedBookList: (state, action) => {
      state.bookList = action.payload;
    },
  },
});

export const { addBook, updatedBookList } = bookSlice.actions;

export default bookSlice.reducer;
