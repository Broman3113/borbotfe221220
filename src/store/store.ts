import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "./usersSlice";

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
