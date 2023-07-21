import { createSelector } from "@reduxjs/toolkit";
import GetUserDetailsSelector from './GetUserDetailsSelector'
import cloneDeep  from "lodash.clonedeep";

export const getUserByIdSelector = createSelector(
(state) => state.userList.selectedUserId,
GetUserDetailsSelector,
    (userId,userList) => {
        if(userId && userList){
            const cloneUserList = cloneDeep(userList)
            return  cloneUserList.filter((user)=>user.userId===userId)
        }
            return undefined

    }
  )
