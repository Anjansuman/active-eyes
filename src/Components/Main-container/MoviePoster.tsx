
interface MoviePosterProps {
    description: string
}

export const MoviePoster = ({ description }: MoviePosterProps) => {
    return <div className="h-min w-[100%] mb-[1em] bg-gray-800 relative p-3 rounded-lg">
        <img src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2022/12/drishyam-2-7-1670642571.jpg" alt="" className="rounded-lg border border-white mb-3"/>
        <div className="flex justify-center">
            {description}
        </div>
    </div>
}