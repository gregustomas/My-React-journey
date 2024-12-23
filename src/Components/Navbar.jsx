import {Link} from 'react-router-dom'

export function Navbar() {


    return(
        <>
            <nav className="nav">
                <Link to={"/"}>
                    <span className='logo'>
                        <img src="./src/assets/react.svg" alt="Logo" />
                        <span>React Router</span>
                    </span>
                </Link>
                <div className="menu">
                <Link to={"/"}>
                    Home
                </Link>
                <Link to={"/about"}>
                    About
                </Link>
                <Link to={"/contact"}>
                    Contact
                </Link>
                <Link to={"/products"}>
                    Products
                </Link>
                </div>
            </nav>
        </>
    )
}