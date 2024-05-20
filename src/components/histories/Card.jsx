import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function Card({ name, message }) {
    const [liked, setLiked] = useState(false);

    const like = () => {
        setLiked(!liked);
    }

    return (
        <div className="flex flex-col gap-1 p-4 bg-cream">
            <h3 className="text-xl font-semibold text-primary">{name}</h3>
            <p className="">{message}</p>
            <div className="flex items-center gap-8 mt-3">
                {liked ? (
                    <FaHeart onClick={like} size={24} className="text-red-500 cursor-pointer" />
                ) : (
                    <FaRegHeart onClick={like} size={24} className="text-primary cursor-pointer" />
                )}

                <button className="primary">Comentar</button>
            </div>
        </div>
    )
}