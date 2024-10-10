export default function AlbumForm() {
    return(<>
        <div className=" mx-auto max-w-md p-5 mb-5 bg-slate-200">
            <h1 className=" text-2xl font-bold mb-3">
                Create an album
            </h1>
            <form  className=" flex items-center gap-5">
                <input type="text" className=" p-2 rounded-md text-lg outline-none" />
               <button  className=" border-2 rounded-md p-2 px-4 text-lg bg-red-500" type="reset">Clear</button>
               <button className=" border-2 rounded-md p-2 text-lg bg-blue-500" type="button">Create</button>
            </form>
        </div>
    </>)
};
