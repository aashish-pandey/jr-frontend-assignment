"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type songItem = {
    id: number,
    song_name: string,
    artist_name: string,
    artist_url: string,
    release_date: string,

}

type songItemState = {
    songs: songItem[]
}

const initialState: songItemState = {
    songs: []
}

export const counterSlice = createSlice({
    name: "songLists",
    initialState,
    reducers: {
        addSongsList: (state, action: PayloadAction<songItem>) => {
            state.songs.push(action.payload)
            console.log(state.songs, "state songs")
        }
    }
})

export const { addSongsList } = counterSlice.actions;
export default counterSlice.reducer;