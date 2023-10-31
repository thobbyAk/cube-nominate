import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducers";
import { createLogger } from "redux-logger";

const logger = createLogger();

const middlewares = [logger];

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }).concat(middlewares)
})

export type AppDispatch = typeof store.dispatch
export default store