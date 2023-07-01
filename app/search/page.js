import DisplaySongGrid from "../components/DisplaySongGrid";


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
    // console.error(error);
    let err = ["404"];
    return err;
  }
}


export default async function Search() {
  const list = await getList();
    return (
      <div className="my-[2%]">
         <div className="my-[4%]">
           <form className="w-[60%] ml-[20%]">   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
                  <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
          </form>
         </div>

         <div className="flex overflow-x-auto space-x-8 w-[80%] mx-[10%] bg-red-200">
          {list?.map((data)=>{
            return(
              <DisplaySongGrid key={data[0]} data={data}/>
            )
          })}
         </div>
    </div>
    )
  
}
