import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { tracksReducer } from "./features/tracksSlice";

export const makeStore = () => {
    return configureStore({
        reducer: combineReducers({
            auth: authReducer,
            tracks: tracksReducer,
        }),
    });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];