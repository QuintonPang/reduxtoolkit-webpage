import {takeLatest} from "redux-saga/effects";
import { handleGetUser } from "./handlers/user.js";
import { getUser } from "../ducks/userSlice.js";


export function* watcherSaga(){


	yield takeLatest(getUser.type, handleGetUser);


}
