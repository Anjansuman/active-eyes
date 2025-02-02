import './App.css'
import { Nav } from "./Components/Nav-bar/Nav";
import { MoviePoster } from './Components/Main-container/MoviePoster';

function App() {

  return <div className='h-screen bg-black text-white '>
    <Nav />
    <div className='mx-4 mt-20 columns-[300px] '>
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this."} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. jgoase0 wefiwjf oqehgid fjsaf  w fj4i0qwja w 203ijf0qw eif20r2efowqf"} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fjweiq cworji wj ew jfewpjwpq[ rejwa epwq rlfkj lsd ajdsjf  fj fsd hoah shf wefh sdjf iofjfosj ojsiodfjos ao jdfioehgqowfq"} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf oifwa qowierjf  roqjr a;kf fiqjr lk woqjf "} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf foais fa fowjfa ofwejfiqwrrj fjiweafj lsjrf 0wl fjifj oas jfosafj foaw fjlfj jfweq f aj ojf23j2 oewjr23 r982 wor woeir qop ff20j ff 2209ur 0r23ru 902urw0 2ir90 urjr023 rwir 293r kjf290ru9 irj90ur r"} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf f9q 3sd f2q 34ur o2u38 jf 93u rjnbviqe guawf h gwh f9ware  9qo sjq 84u ojdf8 94t89 qwejfw uw fq9whg9wsfi jsahdf woaslfjqoawif"} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sffj s48twqu 0t 24"} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf j qwogjq09u 42ofjwi wojet iawjfwJFAIOWFJ"} />
    </div>
  </div>
}


/*
      <img src="https://i.pinimg.com/736x/ce/07/dc/ce07dc80dbadd4467ef1e3f669b015a0.jpg" alt="" />
      <img src="https://i.pinimg.com/564x/ac/2f/7c/ac2f7cd6e4b827678071ecac383ed7db.jpg" alt="" />
      <img src="https://i.pinimg.com/564x/91/a2/8a/91a28aa569576bd6d7b0ca6fd3a0b536.jpg" alt="" />
      <img src="https://i.pinimg.com/564x/93/84/1c/93841c8501c7698e66c691fb06b44110.jpg" alt="" />
      <img src="https://i.pinimg.com/564x/97/31/3e/97313ed7d2a3d88de6e0452f299a5793.jpg" alt="" />
      <img src="https:771.pinimg.com/564x/1d7a3/07/1da30f6cd88c14b7faa1c0d0f9c9de06.jpg" alt="" />
      <img src="https://i.pinimg.com/564x/18/e9/9c/18e99c325fd42e4a1d77bc5425eba60c.jpg" alt="" />
      <img src="https:77i.pinimg.com/736x/877d6/67/8fd66f12baf75003f9dcb386c2ca50ef.jpg" alt="" />
      <img src="https://i.pinimg.com/564x/b67b2/e3/b6b2e32153b2af1ca6dca52bde9e1711.jpg" alt="" />
      <img src="https://i.pinimg.com/564x/58/02/64/5803648a9cd57b38fc195ed551d44d69.jpg" alt="" />
      <img src="https://i.pinimg.com/736x/b6779/4a/b6794a71f74491ad1b6eec8be826e14c.jpg" alt="" />
*/

/*
<div className='gridy'>
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this."} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. jgoase0 wefiwjf oqehgid fjsaf  w fj4i0qwja w 203ijf0qw eif20r2efowqf"} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fjweiq cworji wj ew jfewpjwpq[ rejwa epwq rlfkj lsd ajdsjf  fj fsd hoah shf wefh sdjf iofjfosj ojsiodfjos ao jdfioehgqowfq"} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf oifwa qowierjf  roqjr a;kf fiqjr lk woqjf "} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf foais fa fowjfa ofwejfiqwrrj ojf23j2 oewjr23 r982 wor woeir qop ff20j ff 2209ur 0r23ru 902urw0 2ir90 urjr023 rwir 293r kjf290ru9 irj90ur r"} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf f9q 3sd f2q 34ur o2u38 jf 93u rjnbviqe guawf h gwh f9ware  9qo sjq 84u ojdf8 94t89 qwejfw uw fq9whg9wsfi jsahdf woaslfjqoawif"} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sffj s48twqu 0t 24"} />
      <MoviePoster description={"This is one of the best movies out there, If you wanna get some thrilling you can go with this. fosdjf ofsjf fl sfj oa sf j qwogjq09u 42ofjwi wojet iawjfwJFAIOWFJ"} />
    </div>
*/

export default App
