
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_KEY, BASE_URL, IMG_URL, VIDEO_URL } from "../../config";
import { BackArrow } from "../icons/BackArrow";
import { Nav } from "../Nav-bar/Nav";

interface Movie {
    poster_path: string;
    title: string;
    overview: string;

    // add other properties as needed
}


export const MoviePanel = () => {

    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/movie/${id}?${API_KEY}`)
        .then(res => res.json())
        .then(json => setMovie(json))
        .catch(error => console.log("Error fetching: ", error));
    }, [id])

    // ab bas data show krna h

    if(!movie) return <div>Loading...</div>

    console.log(movie);

    return <div>
        <Nav />
        <div className="h-screen w-full p-7">
            <div className="h-full w-full mt-10 bg-gray-900 rounded-3xl border p-6 border-gray-800 overflow-y-scroll">
                <div className="h-16 text-white text-[34px] font-bold flex items-center mb-6">
                    <div className="flex items-center mr-3 py-1 rounded-bl-xl rounded-tl-xl hover:bg-gray-800 transition-colors duration-150 cursor-pointer">
                        <BackArrow />
                    </div>
                    {movie.title}
                </div>
                <div>
                    <img src={IMG_URL + movie.poster_path} alt="" className="h-96 ml-2 rounded-2xl border border-gray-800 " />
                </div>
                <div>
                    {/* extract the video from the url and find trailer, and in that trailer there will be a key that will give you the text that is written after youtube so use it and play the video with customs here in your website */}
                    <video src={`${VIDEO_URL}/${id}/videos?${API_KEY}`} className="h-96"></video>
                </div>
            </div>
        </div>
    </div>
}