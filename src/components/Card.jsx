function Card({value, onClick}) {
    return (
            <button className="text-2xl bg-red-200
             h-[100px] w-[100px] text-center
             border-2 border-black
             hover:bg-gray-200" onClick={onClick}>
                {value}
            </button>
        

    )
}

export default Card;