import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../styles/style.css'
import useFetch from '../useFetch';
function MovieDetails() {
    const {id} = useParams()
    const {data:moviesD , error , loading} = useFetch("http://localhost:8000/data/" + id)
    console.log(moviesD);
        let moviesDetails
    if(moviesD){
        moviesDetails = moviesD.detiles
    }

    return ( 
        <div className="movieDetails">
            {loading && <h2>loading...</h2>}
            {error && <div>{error }</div>}
            {moviesD && (
                <div className="moviesDetailHanler">
                    <img className="movieImage" src={moviesD.pic} alt="" />
                    <div className="movieInfo">
                        <h2 className="movieTitle">{moviesD.name}</h2>
                        {
                            moviesDetails.map(singleD =>(
                                <div className="Dhanlder">
                                    <h4>{singleD.star}</h4>
                                    <p>{singleD.story}</p>
                                    <a href={singleD.netflix} >watch on netflix</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
     );
}

export default MovieDetails;