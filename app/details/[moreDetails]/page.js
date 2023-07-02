"use client"
import { useParams} from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading'

import { useSelector, useDispatch } from "react-redux";

export default function MoreDetails() {

  const count = useSelector((state)=>state.songLists.songs)
  const [song, setSong] = useState();
  const id = useParams().moreDetails;
  const dispatch = useDispatch()
  console.log(id)
  
  
  useEffect(()=>{
    // console.log(count, "data + id")
    if(id){
      count?.map((data)=>{
        // console.log(data['id'])
        // console.log(data, id)
        // console.log(data['id'] == Number(id))
         if(data['id'] === Number(id)){
          setSong(data)
          console.log("accessed")
         }
      })
    }


  }, [id, count])

  console.log(song)

if(song){

  return (
    <>
    {song && (<div className='justify-center m-[5rem] ml-[30%] mt-[10%]'>

      <a href="#"  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={song["artist_url"]} alt="artist image"/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{song["song_name"]}</h5>
              <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white">{song["artist_name"]}</h6>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Release Date: {song["release_date"]}</p>
          </div>
      </a>

    </div>)}
    </>
  )
  }
  else{
    return(
      <div>
        <Loading/>
      </div>
    )
  }

}
