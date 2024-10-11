import { useState } from "react"
import AlbumList from "./components/AlbumList"
import Navbar from "./components/Navbar"
function App() {
  const [albumFormVisible, setAlbumFormVisible] = useState(false);
  function toggleAlbumForm(){
    setAlbumFormVisible(!albumFormVisible);
  }
  return (
    <>
    <Navbar/>
    <AlbumList isalbumFormVisible={albumFormVisible} toggleAlbumForm={toggleAlbumForm}/>
    </>
  )
}

export default App
