import { MoviePoster } from "./MoviePoster"


interface HomeProps {
    data: any
}

export const Home = ({ data }: HomeProps) => {


    return <div>

        {data.map((movie: {id: number, poster_path: string, title: string, vote_average: string, overview: string}) => (
            <MoviePoster id={movie.id} poster={movie.poster_path} title={movie.title} rating={movie.vote_average} description={movie.overview}></MoviePoster>
        ))}

    </div>
}

/*
        <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this."} />
        <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. jgoase0 wefiwjf oqehgid fjsaf  w fj4i0qwja w 203ijf0qw eif20r2efowqf"} />
        <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fjweiq cworji wj ew jfewpjwpq[ rejwa epwq rlfkj lsd ajdsjf  fj fsd hoah shf wefh sdjf iofjfosj ojsiodfjos ao jdfioehgqowfq"} />
        <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf oifwa qowierjf  roqjr a;kf fiqjr lk woqjf "} />
        <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf foais fa fowjfa ofwejfiqwrrj fjiweafj lsjrf 0wl fjifj oas jfosafj foaw fjlfj jfweq f aj ojf23j2 oewjr23 r982 wor woeir qop ff20j ff 2209ur 0r23ru 902urw0 2ir90 urjr023 rwir 293r kjf290ru9 irj90ur r"} />
        <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf f9q 3sd f2q 34ur o2u38 jf 93u rjnbviqe guawf h gwh f9ware  9qo sjq 84u ojdf8 94t89 qwejfw uw fq9whg9wsfi jsahdf woaslfjqoawif"} />
        <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sffj s48twqu 0t 24"} />
        <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf j qwogjq09u 42ofjwi wojet iawjfwJFAIOWFJ"} />
        <MoviePoster description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla temporibus ex placeat non, enim eveniet assumenda et optio! Assumenda, consequatur earum dolor at ullam tenetur explicabo ut ea sed nobis accusantium aliquam doloribus voluptatem a, iste quisquam amet nesciunt? Sit amet dolorem eligendi at."} />
*/