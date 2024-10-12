import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseInIt";
import { useRef, useState } from "react";

export default function ImageForm(props) {
const {album}=props;
const [formData, setFormData] = useState({title:"",imageUrl:""})
const titleInput = useRef(null)
 async   function handelForm(e){
    e.preventDefault()
    const docRef=collection(db,'PhotoFolio',album.id,'photos')
        await addDoc(docRef,{
            imageName:formData.title,imageUrl:formData.imageUrl
        });
        setFormData({title:"",imageUrl:""});
        titleInput.current.focus();
    }
    return(<>
        <div className=" max-w-xl mx-auto mt-6 p-4 border-2 rounded-md">
            <h1 className=" text-xl font-semibold">Add image to {album.name}</h1>
            <form onSubmit={handelForm}  className=" text-lg flex flex-col items-center justify-center gap-5 py-5">
                <input value={formData.title} ref={titleInput} id="title" className=" border-2 w-full p-1 border-black rounded-md" placeholder="Title" type="text"  onChange={(e)=>{
                    setFormData({title:e.target.value,imageUrl:formData.imageUrl})
                }}/>
                <input value={formData.imageUrl} className=" border-2 w-full p-1 border-black rounded-md" type="url" placeholder="Image url" name="imageUrl" id="imageUrl  "  onChange={(e)=>{
                    setFormData({title:formData.title,imageUrl:e.target.value})
                }}/>
               <div className=" flex items-center gap-6 justify-center">
                <button type="reset" className="  border-2 p-2  px-3 rounded-md bg-red-600 hover:bg-red-700">Clear</button>
                <button  className=" border-2 p-2 rounded-md bg-blue-600 hover:bg-blue-700">Submit</button>

               </div>
            </form>
        </div>
    </>)
};
