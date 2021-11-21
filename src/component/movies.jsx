import { Link } from 'react-router-dom';
import '../styles/style.css'
import Footer from './footer';
function Movies({movies}) {
    console.log(movies);
    return ( 
        <main className="mainContanerMovies">
            <div className="mainMoviesContainer">
            {
                movies && movies.map(singleData =>(
                    <Link to={`/movies/${singleData.id}`} ><div key={singleData.id} className="datahanler">
                        <img className="movieImage" src={singleData.pic} alt="" />
                        <h2 className="dataName ">{singleData.name}</h2>
                    </div></Link>
                ))
            }
            </div>
            <Footer />
        </main>
     );
}

export default Movies;