import AlbumForm from "./AlbumForm";

export default function AlbumList( props) {
    const {isalbumFormVisible,toggleAlbumForm}=props
    return(<>
    <section className=" my-6 ">

        {/* Album Form */}
        {isalbumFormVisible && <AlbumForm/>}
        {/* Album List */}
        <div className=" flex justify-between items-center px-4">
            <h2 className=" text-xl font-bold">Album List</h2>
            <button className={isalbumFormVisible?`border-2 bg-red-500 p-2 rounded-md text-lg`:`border-2 bg-blue-500 p-2 rounded-md text-lg`} onClick={toggleAlbumForm}>{!isalbumFormVisible?"Add Album":"Cancle"}</button>
        </div>


        {/* Album List contianer */}


        <div className=" container flex flex-wrap items-center justify-center p-3 my-6 md:mt-8 gap-12 ">
            <div className="card  max-w-sm p-3 flex flex-col items-center justify-center rounded-md border-2 border-black cursor-pointer hover:shadow-2xl">
            <img className=" w-16 h-16 mb-4" src="https://mellow-seahorse-fc9268.netlify.app/assets/photos.png" alt="" />
            <div className=" text-center p-2 ">
                <h2 className=" text-lg font-medium">First Album</h2>
            </div>
            </div>
            
           
           
        </div>

    </section>
    </>)
};
