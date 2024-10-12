import { useEffect, useState } from "react"

export default function Carousel({images,carouselOn,closecarousel,startIndex}) {

    
    const [index, setIndex] = useState(0);
    useEffect(() => {
      setIndex(startIndex)
    }, [startIndex])
    
    function increaseIndex(){
        if(index>=images.length-1){
            setIndex(0);
            
        }else{
            setIndex(index+1);
            
        }
    }
    function decreaseIndex(){
            if(index<=0){
                setIndex(images.length-1)
            }else{
                setIndex(index-1)
            }
    }
    return(<>
        <section  className={`${!carouselOn  && "hidden"}  rounded-md  z-10 absolute top-auto left-1/2 -translate-x-1/2 bg-gray-400 w-4/5 h-4/5 `}>
            <div className=" flex  float-end pt-4 pr-4">
                <button onClick={closecarousel} className=" border-2 rounded-full border-black p-1">
                    <img className=" w-8 " src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" alt="" />
                </button>
            </div>
            <div className=" w-full absolute top-1/2 -translate-y-1/2 flex  items-center justify-between">
                <button className=" flex items-center justify-center border-2 rounded-full  p-1 bg-red-600  " onClick={decreaseIndex}>
                    <img className=" w-10" src="https://cdn-icons-png.flaticon.com/128/81/81037.png" alt="" />
                </button>
                <button className=" flex items-center justify-center border-2 rounded-full  p-1 bg-blue-600  " onClick={increaseIndex}>
                    <img className="  w-10" src="https://cdn-icons-png.flaticon.com/128/81/81068.png" alt="" />
                </button>
            </div>
            <div className=" h-full w-full ">
                <img className=" w-full h-full object-contain" src={images.length>0? images[index].imageUrl:""} alt="" />
            </div>
        </section>
    </>)
};
