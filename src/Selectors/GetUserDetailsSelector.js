import { createSelector } from "@reduxjs/toolkit";
const AllUserList = (state) => state.userList

const GetUserDetailsSelector = createSelector(
  AllUserList,
    (userList) => userList.userList
  )
export default GetUserDetailsSelector
