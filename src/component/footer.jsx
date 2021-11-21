import '../styles/style.css'
import { Link } from 'react-router-dom';
function Footer() {
    return ( 
        <footer className="footer">
            <h2 className="footerLinks">footer</h2>
            <Link className="footerLinks" to="/">
                Home
            </Link>
            <Link className="footerLinks" to="/movies" >
                Movie
            </Link>
        </footer>
     );
}

export default Footer;