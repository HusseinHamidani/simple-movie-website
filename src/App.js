import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import AboutProject from './component/aboutproject';
import Home from './component/Home';
import MovieDetails from './component/movieDetails';
import Movies from './component/movies';
import Navbar from './navbar/navbar';
import './styles/style.css'
import useFetch from './useFetch';
function App() {
  const {data:movies , error , loading} = useFetch("http://localhost:8000/data")
  console.log(movies);
  return (
    <Router>
        <div className="mainApp">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/movies" element={<Movies movies={movies}/>}></Route>
            <Route path="/movies/:id" element={movies && <MovieDetails />}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
