import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";

// import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { tracksReducer } from "./features/playlistSlice";

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