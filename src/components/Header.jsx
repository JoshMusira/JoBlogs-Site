import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Header = () =>{
    return(
        <div className="home">
        <img id="logo" src={logo} alt="logo" />
        <div className="header">
            <Link id="navbar" to= "/">Home</Link>
            <Link id="navbar" to="/Blogs">Blogs</Link>
            <Link id="navbar" to="contact">Contact</Link>
        </div>
       
         </div>
    )
}
export default Header