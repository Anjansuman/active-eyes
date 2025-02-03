import './App.css'
import { useState, useEffect } from "react";

import { Nav } from "./Components/Nav-bar/Nav";
import { Home } from './Components/Main-container/Home';

import { API_KEY, IMG_URL, POPULAR_URL } from './config';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(POPULAR_URL + API_KEY)
    .then(res => res.json())
    .then(json => {
      console.log(json.results)
      setData(json.results)
    })
    .catch(error => console.log("Error fetching movies: ", error))

    return () => {

    }
  }, [])

  return <div className='h-screen text-white '>
    <Nav />
    <div className='mx-20 mt-20 columns-[200px] '>
    {/* {data.map((movie: { poster_path: string }) => (
      <img src={IMG_URL + movie.poster_path} alt="" />  
    ))} */}
      <Home data={data}/>
    </div>

    <div className='h-60 w-screen px-28 py-10 '>
      <div className='h-0.5 w-full bg-gray-800 rounded-2xl'></div>
      <div className='h-full w-full flex justify-center items-center'>
        All rights are reserved.
      </div>
    </div>

  </div>
}

export default App
