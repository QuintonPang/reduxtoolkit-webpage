import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({



	name: "user",
	initialState:{},
	reducers:{


		getUser(){},
		setUser(state,action){


			const userData = action.payload;
			return {...state,...userData};

		}


	}


});


export const { getUser,setUser } = userSlice.actions;
export default userSlice.reducer;

/* what it returns
{ name : string, reducer : ReducerFunction, actions : Record<string, ActionCreator>, caseReducers: Record<string, CaseReducer>} */
