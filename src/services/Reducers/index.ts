import { combineReducers } from "@reduxjs/toolkit";
import { nominationSlice } from "./nominationsReducer";
import { authenticationSlice } from "./authReducer";

const rootReducer = combineReducers({
    nominationState: nominationSlice.reducer,
    authState: authenticationSlice.reducer
});

export default rootReducer

export type IRootState = ReturnType<typeof rootReducer>