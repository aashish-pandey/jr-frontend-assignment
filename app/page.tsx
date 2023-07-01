import { title } from "process";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import DisplaySongGrid from './components/DisplaySongGrid'

async function getList(){
  const url = 'https://billboard-api2.p.rapidapi.com/billboard-global-200?date=2020-09-26&range=1-10';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5fc5443a79mshb7fd1878fbf292cp117f10jsn43749cdc43b0',
      'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    
    const result = await response.json();

    let items = result["content"];
    var listSongs = [];

    for (var i in items){
      listSongs.push([i, items[i]])
    }

    return listSongs;
    
  } catch (error) {
    console.error(error);
    let err = ["404"];
    return err;
  }
}

export default async function Home() {

  const list = await getList();

  return (
    <div>
      <div className=" mx-auto flex flex-row flex-wrap justify-around">
        {list?.map((data)=>{
          return(
            <DisplaySongGrid key={data[0]} data={data}/>
          )
        })}
      </div>
    </div>
  );
}
