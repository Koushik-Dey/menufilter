const Btns = ({categories , filterItems}) => {
    return (
        <div>
            <div className="max-w-[30%] mx-auto flex justify-evenly text-black mt-5">
                {categories.map((category ,index) => {
                    return <button key={index} onClick={()=>filterItems(category)} className="px-4 py-1 bg-yellow-400 rounded-lg text-xl hover:bg-yellow-300 transition-all duration-300">
                    {category}
                </button>
                }) }
                
            </div>
        </div>
    );
}

export default Btns;