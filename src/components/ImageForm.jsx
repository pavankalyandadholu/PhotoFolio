export default function ImageForm(props) {
const {album}=props;
    return(<>
        <div className=" max-w-xl mx-auto mt-6 p-4 border-2 rounded-md">
            <h1 className=" text-xl font-semibold">Add image to {album}</h1>
            <form  className=" text-lg flex flex-col items-center justify-center gap-5 py-5">
                <input className=" border-2 w-full p-1 border-black rounded-md" placeholder="Title" type="text" />
                <input className=" border-2 w-full p-1 border-black rounded-md" type="url" placeholder="Image url" name="imageUrl" id="imageUrl  " />
               <div className=" flex items-center gap-6 justify-center">
                <button type="reset" className="  border-2 p-2  px-3 rounded-md bg-red-600 hover:bg-red-700">Clear</button>
                <button  className=" border-2 p-2 rounded-md bg-blue-600 hover:bg-blue-700">Submit</button>

               </div>
            </form>
        </div>
    </>)
};
