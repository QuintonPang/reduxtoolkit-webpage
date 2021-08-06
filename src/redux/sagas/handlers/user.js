import {call} from "redux-saga/effects";
import {put} from "redux-saga/effects";
import {setUser} from "../../ducks/userSlice.js";
import { requestGetUser } from "../requests/user.js";


export function* handleGetUser (action){



	
	try{


		const response = yield call(requestGetUser);
		const {data} = response;
		yield put(setUser({...data}));

	}catch(error){

		console.log(error);
	}


}
