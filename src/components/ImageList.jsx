import { useEffect, useState } from "react"
import ImageForm from "./ImageForm"
import { db } from "../firebaseInIt"
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"
import Carousel from "./Carousel"

export default function ImageList(props ) {
    const [isSearching, setIsSearching] = useState(true)
    const [isAddImage, setIsAddImage] = useState(false);
    const [updateImage, setUpdateImage] = useState(null);
    const [carouselOn, setcarouselOn] = useState(false);
    const [index, setIndex] = useState(0)
    const {resetAlbum,album}= props;
    
    const [images, setImages] = useState([])
    const [filteredImages , setFilteredImages ] = useState([]);
    const [searchValue , setSearchValue ] = useState('')
    
    useEffect(()=>{
        const snapShot= onSnapshot(collection(db,'PhotoFolio',album.id,'photos'),(snap)=>{
            const data= snap.docs.map((item)=>{
                return {id:item.id,...item.data()}
            })
            setImages(data);
            setFilteredImages(data)
        })
         return snapShot;
    },[])
    useEffect(()=>{
        const filteredValues=images.filter((image)=>image.imageName.includes(searchValue.trim()));
        setFilteredImages([...filteredValues])
    },[searchValue])

    function handleSearch(e){
        e.preventDefault()
    }
    function handleChange(e){
        setSearchValue(e.target.value)
    }
    function handleUpdateImageComponent(image){
        setUpdateImage(image);
        setIsAddImage(true);
    }
        function resetUpdateImageValue(){
            setUpdateImage(null);
        }
  async  function handleDelete(id){
        const photoRef= doc(db,'PhotoFolio',album.id,'photos',id);
        try{
          await  deleteDoc(photoRef);
        }catch(err){
            console.log(err);
        }
        
    }
    // function to close carousel
    function closecarousel(){
        setcarouselOn(false);
    }
    
    return (<>
        <section className="  w-full">
            <Carousel images={images} carouselOn={carouselOn} closecarousel={closecarousel} startIndex={index}/>
            {/* image Form */}
            {isAddImage && <ImageForm album={album} updateImage={updateImage}  resetUpdateImageValue={resetUpdateImageValue}/>}
            
            {/* image list */}
            <div className=" container">
                <div className=" text-lg mx-auto max-w-4xl w-full flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between mt-6 p-3">
                    <div className=" flex items-center justify-center gap-2">
                    <button onClick={resetAlbum}>
                        <img className=" w-8 border-2 border-black rounded-full p-1" src="https://cdn-icons-png.flaticon.com/128/2099/2099238.png" alt="" />
                    </button>
                    <h1 className=" text-3xl font-semibold">Images in {album.name} </h1>

                    </div>
                    <div className=" flex items-center gap-6">

                        {/* Search Form */}
                    <form  onSubmit={handleSearch}  className=" flex items-center">
                        <input onChange={handleChange} className={` p-1 border-2 ${isSearching && "hidden"}  border-black rounded-md mr-2 `} type="text" />
                        <button type="button" onClick={()=>{
                            setIsSearching(!isSearching)
                        }}>
                            <img className="w-8 h-8 rounded-full p-1 border-2 border-black" src={isSearching?"https://cdn-icons-png.flaticon.com/128/10385/10385257.png" :"https://cdn-icons-png.flaticon.com/128/1828/1828778.png"}alt="" />
                        </button>
                    </form>
                    <button className={ ` border-2 ${isAddImage?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"}  p-1 rounded-md`} onClick={()=>{
                        setIsAddImage(!isAddImage)
                    }}>{isAddImage?"Cancel":"Add image"}</button>
                    </div>
                </div>
                <div className="imageContainer flex gap-6 items-center justify-center flex-wrap ">
                    {
                      filteredImages.length>0 &&  filteredImages.map((image,i)=>{
                            return (
<div key={image.id} className="image border-2 p-3 rounded-md hover:shadow-lg w-48 relative group cursor-pointer transition-all  ">                  
    <div onClick={()=>{
        setcarouselOn(true);
        setIndex(i);
    }}>
    <img className=" object-cover rounded-t-md w-full h-40" src={image.imageUrl} alt="" />
    <h3 className=" text-center text-xl font-medium mt-2">{image.imageName}</h3>
    </div>
                       
                        <div className="buttons absolute top-0 right-0 p-2 hidden group-hover:block">
                            <button onClick={()=>handleUpdateImageComponent(image)}  className=" mr-3">
                                <img className=" w-8  border-2 rounded-full" src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png" alt="" />
                            </button>
                            <button onClick={()=>handleDelete(image.id)}>
                                <img className=" w-8  border-2 rounded-full" src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png" alt="" /></button>
                        </div>
                    </div>

                            )
                        })
                    }
                    
                    
                   

                </div>
            </div>
        </section>
    </>)
};
