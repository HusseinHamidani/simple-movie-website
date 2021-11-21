import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/style.css'
function Navbar() {
    const [openUlBar , setOpenUlBar ] = useState("ulbar");
    const [isopen , setIsOpen ] = useState(false)
    const [hamp , setHamp ] = useState('hampLine')
    function ulbarOpen(){
        const openulbar = ()=>{
            setIsOpen(true)
            setHamp("hamblineOpen")
            setOpenUlBar("ulbar ulbarOpen")
        }
        const closeulbar = ()=>{
            setIsOpen(false)
            setOpenUlBar("ulbar")
            setHamp("hampLine")
        }
        if(isopen === false){
            openulbar()
        }else{
            closeulbar()
        }
    }
    function linkClick(){
        setOpenUlBar("ulbar")
        setHamp("hampLine")
        setIsOpen(false)
    }

    return ( 
        <nav className="navbar">
            <Link className="website-title" to="/">H&<span>Movie</span></Link>
            <div onClick={ulbarOpen} className="hamp">
                <span className={hamp}></span>
                <span className={hamp}></span>
                <span className={hamp}></span>
            </div>
            <ul className={openUlBar}>
                <li className="ulLi">
                    <Link onClick={()=>linkClick()} className="ulbar-links" to="/">
                        Home
                    </Link>
                </li>
                <li className="ulLi">
                    <Link onClick={()=>linkClick()} className="ulbar-links" to="movies">
                        Movies
                    </Link>
                </li>

            </ul>
            
        </nav>
     );
}

export default Navbar;