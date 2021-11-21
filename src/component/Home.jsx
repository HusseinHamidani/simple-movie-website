import { Link } from 'react-router-dom';
import '../styles/style.css'
import AboutProject from './aboutproject';
import Footer from './footer';
function Home() {
    return ( 
        <main className="mainHome">
        <div className="mainHomecontainer">
            <header className="head">
                <div className="title-text-hanler">
                <h2>enjoy youre best time</h2>
                <h2>and get fat!!!</h2>
                </div>
            <div className="inputHanler">
                <Link className="inputLink" to="/movies">
                    go to movies
                </Link>
            </div>
            </header>
        </div>
        <AboutProject />
        <Footer />
        </main>
     );
}

export default Home;