import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  selectedUserId : ''
};

export const userSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    updatedUserList: (state, action) => {
      state.userList = action.payload;
    },
    setSelectedUserId : (state,action)=>{
      state.selectedUserId = action.payload
    },
    addUserRequest : (state,action)=>{}
  },
});

export const { addUser, updatedUserList,setSelectedUserId,addUserRequest } = userSlice.actions;

export default userSlice.reducer;
