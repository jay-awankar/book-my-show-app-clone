import './App.css';
import axios from "axios";

//Routers
import { Routes, Route } from 'react-router-dom';

//React slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

//Axios
axios.defaults.params = {}
axios.defaults.params["api_key"] = "38858108da13da79e7cf650a5cd7c46c";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movie/:id/' element={<MoviePage/>}/>
      <Route path='/plays' element={<PlayPage/>}/>
    </Routes>
  );
}

export default App;
