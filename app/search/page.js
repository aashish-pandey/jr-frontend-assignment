"use client"
import { useEffect, useState } from "react";
import React from "react";

import DisplaySongGrid from "../components/DisplaySongGrid";


import { useSelector , useDispatch} from "react-redux";

import {addSongsList} from '../GlobalRedux/Features/counter/counterSlice'



export default function Search() {
  const count = useSelector((state)=>state.songLists.songs)
  const dispatch = useDispatch()
  
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");

  console.log(count)
  const handleSearch = (e)=>{
    setQuery(e.target.value);
  }

  // useEffect(()=>{

  //   async function fetchData(){
  //     const url = 'https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?per_page=10&page=1';
  //       const options = {
  //         method: 'GET',
  //         headers: {
  //           'X-RapidAPI-Key': '5fc5443a79mshb7fd1878fbf292cp117f10jsn43749cdc43b0',
  //           'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
  //         }
  //       };

  //       try {
  //         const response = await fetch(url, options);
  //         const result = await response.json();
          
  //         var res = result["chart_items"];

  //         for(var i in res){
  //           dispatch(addSongsList({
  //             id: Number(i),
  //             song_name: res[i]["item"]["full_title"],
  //             artist_name: res[i]["item"]["artist_names"],
  //             artist_url: res[i]["item"]["song_art_image_url"],
  //             release_date: res[i]["item"]["release_date_for_display"],
  //           }))
  //         }


  //         console.log(result);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //   }
  //   fetchData();

  //  console.log(count)
  // }, [])
    
    return (
      <div className="my-[2%]">
         <div className="my-[2%]">
           <form className="w-[60%] ml-[20%]">   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" stroke="white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" value={query} onChange={(e)=>handleSearch(e)} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
               </div>
          </form>
         </div>
        
        {(query != "") && <div className="flex overflow-x-auto space-x-8 w-[80%] mx-[10%] bg-red-200">
          {count?.filter((dt)=>{
              return dt["song_name"]?.toLowerCase().includes(query.toLowerCase())}
          ).map((data)=>{
            return(
              <DisplaySongGrid key={data["id"]} data={data}/>
            )
          })}
         </div>}
    </div>
    )
  
}
