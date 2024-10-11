import { useState } from "react"
import AlbumList from "./components/AlbumList"
import Navbar from "./components/Navbar"
import ImageList from "./components/ImageList";
function App() {
  const [album, setAlbum] = useState(null);
  function addAlbum(albumName){
    setAlbum(albumName);
  }
  function resetAlbum(){
    setAlbum(null);
  }
  return (
    <>
    <Navbar/>
    {album ? <ImageList album={album} resetAlbum={resetAlbum}/>:<AlbumList addAlbum={addAlbum}/>}
  
    </>
  )
}

export default App
