import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  issueBookList: [],
};

export const issueBookSlice = createSlice({
  name: "issueBookList",
  initialState,
  reducers: {
    addIssueBook: (state, action) => {
      state.issueBookList.push(action.payload);
    },
    updatedIssueBookList: (state, action) => {
      state.issueBookList = action.payload;
    },
  },
});

export const { addIssueBook, updatedIssueBookList } = issueBookSlice.actions;

export default issueBookSlice.reducer;
