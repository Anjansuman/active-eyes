import './App.css'
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import { Nav } from "./Components/Nav-bar/Nav";
import { Home } from './Components/Main-container/Home';
import { MoviePanel } from './Components/Main-container/MoviePanel';

import { API_KEY, POPULAR_URL } from './config';

function App() {


  return <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path={`/:id`} element={<MoviePanel />} />
    </Routes> 
  </BrowserRouter>
}

function HomePage() {
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
      <Home data={data}/>
    </div>

    <div className='h-60 px-28 py-10 '>
      <div className='h-0.5 w-full bg-gray-900 rounded-2xl mb-3'></div>
      <div className='h-full w-full bg-gray-900 rounded-2xl flex justify-center items-center'>
        All rights are reserved.
      </div>
    </div>
  </div>
}

// function MoviePage() {
//   return <div className='h-screen w-full p-8'>
//     {/* <MoviePanel data={data} /> */}
//   </div>
// }

export default App
