import AlbumForm from "./AlbumForm";

export default function AlbumList( ) {
    return(<>
    <section className=" my-6 ">

        {/* Album Form */}
        <AlbumForm/>
        {/* Album List */}
        <div className=" flex justify-between items-center px-4">
            <h2 className=" text-xl font-bold">Album List</h2>
            <button className=" border-2 bg-blue-500 p-2 rounded-md text-lg">Add Album</button>
        </div>

    </section>
    </>)
};
