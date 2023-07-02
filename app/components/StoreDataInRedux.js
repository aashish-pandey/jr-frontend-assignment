"use client"
import React from 'react'
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { addSongsList } from '../GlobalRedux/Features/counter/counterSlice'
import DisplaySongGrid from './DisplaySongGrid';

export default function StoreDataInRedux() {
  const list = useSelector((state) => state.songLists.songs)
  const dispatch = useDispatch()

  useEffect(() => {

    async function fetchData() {
      const url = 'https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?per_page=10&page=1';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5fc5443a79mshb7fd1878fbf292cp117f10jsn43749cdc43b0',
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        var res = result["chart_items"];

        for (var i in res) {
          dispatch(addSongsList({
            id: Number(i),
            song_name: res[i]["item"]["full_title"],
            artist_name: res[i]["item"]["artist_names"],
            artist_url: res[i]["item"]["song_art_image_url"],
            release_date: res[i]["item"]["release_date_for_display"],
          }))
        }


        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

  }, [])

  return (
    <div>

      <div className=" mx-auto flex flex-row flex-wrap justify-around">
        {list?.map((data) => {
          return (
            <DisplaySongGrid key={data["id"]} data={data} />
          )
        })}
      </div>
    </div>

  )

}
