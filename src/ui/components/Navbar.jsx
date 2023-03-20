
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {/* if is className is active change the styles*/}
                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}   
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>


                </div>

                <div className="navbar-nav ml-auto">
                    <span
                        className="nav-item nav-link text-info"
                    >
                        Dani
                    </span>
                    <button 
                        className="nav-item nav-link btn"
                    >Logout</button>
                </div>
            </div>


        </nav>
    )
}
