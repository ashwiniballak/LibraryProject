import { configureStore,combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice";
import userReducer from "./features/userSlice";
import issueBookReducer from "./features/issueBookSlice";
import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas/rootSaga'
const sagaMiddleware = createSagaMiddleware()

const combine =combineReducers({
  bookList: bookReducer,
  userList: userReducer,
  issueBookList: issueBookReducer,
  
})
export const store = configureStore({
  reducer : combine,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(mySaga)