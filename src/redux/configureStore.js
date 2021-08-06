import createSagaMiddleware from "redux-saga";
import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import { watcherSaga } from "./sagas/rootSaga.js";
import userReducer from "./ducks/userSlice.js";

const sagaMiddleware = createSagaMiddleware();



const reducer = ({

	user:userReducer,


});


const store = configureStore({

	reducer:reducer,
	middleware: [ ...getDefaultMiddleware({thunk:false}),sagaMiddleware]


});


sagaMiddleware.run(watcherSaga);

export default store;

