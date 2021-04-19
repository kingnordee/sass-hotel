import navImg1 from "../media/images/nav-img-1.jpeg"
import navImg2 from "../media/images/nav-img-2.jpeg"
import navImg3 from "../media/images/nav-img-3.jpeg"

const NavBar = () => {
    return(
        <nav className="navbar">
            <input type="checkbox" id="check" className="checkbox"/>
            <div className="hamburger-menu">
                <label htmlFor="check" className="menu">
                    <div className="menu-line menu-line-1">{}</div>
                    <div className="menu-line menu-line-2">{}</div>
                    <div className="menu-line menu-line-3">{}</div>
                </label>
            </div> {/* HAMBURGER LINES ONLY */}

            <div className="navbar-navigation">
                <div className="navbar-navigation-left">
                    <img src={navImg1} alt="" className="left-img left-img-1"/>
                    <img src={navImg2} alt="" className="left-img left-img-2"/>
                    <img src={navImg3} alt="" className="left-img left-img-3"/>
                </div>
                <div className="navbar-navigation-right">
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <a href="" className="nav-list-link">Home</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-list-link">About Us</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-list-link">Gallery</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-list-link">Reservation</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-list-link">Services</a>
                        </li>
                        <li className="nav-list-item">
                            <a href="" className="nav-list-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
