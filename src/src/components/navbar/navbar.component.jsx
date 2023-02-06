import "./navbar.scss"

const Navbar = () => {


    return (
        <div className="navbar-container">
            <div className="navbar-second-container">
            <div className="logo-container">MyLogo</div>
            <div className="menu-container">
                <ul className="my-list-container">
                    <li className="homies">Home</li>
                    <li className="not-homies">About</li>
                    <li className="not-homies">Projects</li>
                    <li className="not-homies">Contact</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar