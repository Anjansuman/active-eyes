
import { useState } from "react"
import { IMG_URL } from "../../config"
import { MoviePanel } from "./MoviePanel"
import { Link } from "react-router-dom"

interface MoviePosterProps {
    id: number
    title: string,
    poster: string,
    rating: string,
    description: string,
    onClick?: () => void
}

export const MoviePoster = ({ id, poster, title, rating, description, onClick }: MoviePosterProps) => {


    return <Link to={`/${id}`}>
        <div
            className={`h-min mb-[1em] bg-gray-900 relative p-3 rounded-lg border border-gray-800 cursor-pointer transition-all duration-500 ease-in-out`}
            style={{ breakInside: "avoid" }}
            onClick={onClick}
        >
            <img src={IMG_URL + poster} alt="" className="rounded-lg border border-gray-800 mb-3"/>
            <div className="flex justify-between items-center text-xl font-bold mb-2">
                {title}
                <div className={`bg-gray-800 px-3 py-1 rounded-3xl text-sm font-semibold ml-2`}
                    style={{ color: `#${ratingColor(rating)}` }}
                >
                    {rating}
                </div>
            </div>
            {/* <div className="flex justify-center text-sm bg-gray-800 rounded-lg p-2">
                {description}
            </div> */}
        </div>
    </Link>
}

function ratingColor(rating: string) {

    const rate = parseFloat(rating);

    if (rate >= 8) {
        return '01d28e';
    } else if (rate >= 6) {
        return 'ffff00';
    } else if (rate >= 4) {
        return 'ffc93c';
    } else if (rate >= 2) {
        return 'FFA500';
    } else {
        return 'FF0000';
    }
}