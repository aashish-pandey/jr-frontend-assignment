
import { title } from "process";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import DisplaySongGrid from './components/DisplaySongGrid'
import Error from './components/Error'
import StoreDataInRedux from './components/StoreDataInRedux'



export default async function Home() {

 return(
  <>
    <StoreDataInRedux/>
  </>
 )

}
