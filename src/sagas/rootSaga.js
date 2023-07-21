import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {addUserRequest} from '../Store/features/userSlice'
import {addUser} from '../sagas/addUser'

function* mySaga(){
    yield takeLatest(addUserRequest,addUser)
}

export default mySaga