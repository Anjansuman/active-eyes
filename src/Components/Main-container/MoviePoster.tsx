
import { useState } from "react"
import { IMG_URL } from "../../config"

interface MoviePosterProps {
    title: string,
    poster: string,
    rating: string,
    description: string
}

export const MoviePoster = ({ poster, title, rating, description }: MoviePosterProps) => {

    const [active, setActive] = useState(false);

    function hoverDiv() {
        setActive(true);
    }

    return <div
        onClick={hoverDiv}
        className={`h-min mb-[1em] bg-gray-900 relative p-3 rounded-lg border border-gray-800 cursor-pointer transition-all duration-500 ease-in-out`}
        style={{ breakInside: "avoid" }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
    >
        <img src={IMG_URL + poster} alt="" className="rounded-lg border border-gray-800 mb-3"/>
        <div className="flex justify-between items-center text-xl font-bold mb-2">
            {title}
            <div className={`bg-gray-800 text-[${ratingColor(rating)}] px-3 py-1 rounded-3xl text-sm font-semibold`}>
                {rating}
            </div>
        </div>
        <div className="flex justify-center text-sm bg-gray-800 rounded-lg p-2">
            {description}
        </div>
    </div>
}

function ratingColor(rate: string) {

    const rating = parseInt(rate);

    if (rating > 8) {
        return '#00ff00';
    } else if (rating > 6) {
        return '#80ff00';
    } else if (rating > 4) {
        return '#ffff00';
    } else if (rating > 2) {
        return '#ff8000';
    } else {
        return '#ff0000';
    }
}