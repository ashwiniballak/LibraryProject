import { call, put } from "redux-saga/effects";
import axios from "axios";
import {addUser as addNewUser} from '../Store/features/userSlice'

function addUserCall(request) {
  return axios.post("https://jsonplaceholder.typicode.com/posts", request);
}

export function* addUser(action) {
  try {
    const responce = yield call(addUserCall, action.payload);
    yield put(addNewUser(responce.data))
  } catch (error) {
    console.log("error", error);
  }
}
