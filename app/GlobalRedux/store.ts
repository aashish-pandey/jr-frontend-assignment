"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Features/counter/counterSlice'

export const store = configureStore({
    reducer:{
        songLists: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch