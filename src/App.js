import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import Layout from './components/Layout';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';

const apikey = '05a204294453d9d18689f24088233147';
const ts = '29/07/2022, 13:52:07';
const hash = '2402a1413666472ba43491dda4a70a8c';
const URL = `http://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${apikey}&hash=${hash}`


function App() {
  
  const [movies, setMovies] = useState();
  const [images, setImages] = useState();

  const getMovies = () =>{
    
    

      fetch(URL)
      .then(response=>response.json())
      .then((json)=>{
          console.log(json)
          const response = json.data.results;
          setMovies(response);
          
      })
      //
      //setImages(response.data.results)
      

   
  }

  console.log(movies);

  useEffect(() => {
    getMovies();
  },[])


  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home movies={movies}/>}></Route>
      </Route>
    </Routes>
      
    </div>
  );
}

export default App;
