"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type songItem = {
    id: number,
    song_name:string,
    artist_name: string,
    artist_url: string,
    release_date: string,

}

type songItemState = {
    songs: songItem[]
}

const initialState : songItemState = {
    songs: []
}


// {id: 8, song_name: 'Patience by Lil Uzi Vert (Ft. Don Toliver)', artist_name: 'Lil Uzi Vert (Ft. Don Toliver)', artist_url: 'https://images.genius.com/03f086f3454a02678d479c4651d8af39.999x999x1.png', release_date: 'June 30, 2023'}, 
// {id: 9, song_name: 'Cupid (Twin Version) by FIFTY FIFTY (피프티피프티)', artist_name: 'FIFTY FIFTY (피프티피프티)', artist_url: 'https://images.genius.com/d383c213dfdcede4fd45fa7c1570463e.1000x1000x1.jpg', release_date: 'February 24, 2023'},
// {id: 0, song_name: '​​​vampire by Olivia Rodrigo', artist_name: 'Olivia Rodrigo', artist_url: 'https://images.genius.com/4ed882736282fcf77a994fc1fbcc777c.1000x1000x1.png', release_date: 'June 30, 2023'},


export const counterSlice = createSlice({
    name: "songLists",
    initialState,
    reducers:{
        addSongsList: (state, action: PayloadAction<songItem>)=>{
            state.songs.push(action.payload)
            console.log(state.songs, "state songs")
        }
    }
})

export const { addSongsList } = counterSlice.actions;
export default counterSlice.reducer;