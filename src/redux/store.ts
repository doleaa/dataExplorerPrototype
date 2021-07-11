import {combineReducers} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import testReducer, {TestStateInterface} from "./test";
import {configureStore} from "@reduxjs/toolkit";

export interface OverallStateInterface {
    test: TestStateInterface
}

const store: any = configureStore({
    reducer: combineReducers(
        {
            test: testReducer
        }
    ),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk).concat(logger)
});

export default store;