import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/menu">Menu</Link></li>
            </ul>

        </nav>
    )
}
export default Navbar;