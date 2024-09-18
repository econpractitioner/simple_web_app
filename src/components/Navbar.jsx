import { Link } from "react-router-dom"
import "./Navbar.css"

export function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><button className="navbutton">Home</button></Link>
            <Link to="/Products"><button className="navbutton">Product</button></Link>
            <Link to="/About"><button className="navbutton">About</button></Link>
            <Link to="/Contact"><button className="navbutton">Contact</button></Link>
        </div>
    )
}