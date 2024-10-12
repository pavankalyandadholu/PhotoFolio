import { useEffect, useState } from "react";
import AlbumForm from "./AlbumForm";
// import firebase methiods
import {  collection,onSnapshot } from "firebase/firestore";
import {db} from '../firebaseInIt';
export default function AlbumList(props ) {
  const [albumFormVisible, setAlbumFormVisible] = useState(false);
const [albumNames, setAlbumNames] = useState([]);

  useEffect(()=>{
        const snapShot= onSnapshot(collection(db,'PhotoFolio'),(snap)=>{
       const data= snap.docs.map((i)=>{
            return {
                id:i.id,...i.data()
            }
        })
        setAlbumNames(data)
        })
        return snapShot;
  },[])
    const {addAlbum}= props;
    // const albumNames=["First Album","Second Album", "Third Album"]
    return(<>
    <section className=" my-6 ">

        {/* Album Form */}
        {albumFormVisible && <AlbumForm/>}
        {/* Album List */}
        <div className=" flex justify-between items-center px-4">
            <h2 className=" text-xl font-bold">Album List</h2>
            <button className={albumFormVisible?`border-2 bg-red-500 p-2 rounded-md text-lg`:`border-2 bg-blue-500 p-2 rounded-md text-lg`} onClick={()=>{
                setAlbumFormVisible(!albumFormVisible)
            }}>{!albumFormVisible?"Add Album":"Cancle"}</button>
        </div>


        {/* Album List contianer */}


        <div className=" container flex flex-wrap items-center justify-center p-3 my-6 md:mt-8 gap-12 ">
            {
                albumNames.map((album)=>{
                    return (<div key={album.id}  className="card  max-w-sm p-3 flex flex-col items-center justify-center rounded-md border-2 border-black cursor-pointer hover:shadow-2xl" onClick={()=>{
                        addAlbum(album)
                    }}>
                        <img className=" w-16 h-16 mb-4" src="https://mellow-seahorse-fc9268.netlify.app/assets/photos.png" alt="" />
                        <div className=" text-center p-2 ">
                            <h2 className=" text-lg font-medium">{album.name}</h2>
                        </div>
                        </div>)
                })
            }

         
            
           
           
        </div>

    </section>
    </>)
};
