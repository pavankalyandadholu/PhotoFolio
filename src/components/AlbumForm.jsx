import { useRef, useState } from "react";
import { db } from "../firebaseInIt";
import { addDoc, collection } from "firebase/firestore";
export default function AlbumForm() {
    const [albumName, setAlbumName] = useState('');
    const nameInput = useRef(null);
 async function  handleForm(e){
    e.preventDefault()
  const res=  await addDoc(collection(db,"PhotoFolio"),{name:albumName});
  console.log(res.id)
  setAlbumName('');
  nameInput.current.focus()
    }
    return(<>
        <div className=" mx-auto max-w-md p-5 mb-5 bg-slate-200">
            <h1 className=" text-2xl font-bold mb-3">
                Create an album
            </h1>
            <form onSubmit={handleForm}  className=" flex items-center gap-5">
                <input ref={nameInput} type="text" className=" p-2 rounded-md text-lg outline-none" value={albumName} onChange={(e)=>setAlbumName(e.target.value)} />
               <button  className=" border-2 rounded-md p-2 px-4 text-lg bg-red-500" type="reset">Clear</button>
               <button className=" border-2 rounded-md p-2 text-lg bg-blue-500"  >Create</button>
            </form>
        </div>
    </>)
};
