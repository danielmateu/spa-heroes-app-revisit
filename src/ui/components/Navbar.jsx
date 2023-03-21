
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { Lupa } from '../icons/Lupa';

export const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    // console.log(user);

    const navigate = useNavigate()

    const onLogout = () => {
        logout()
        navigate('/login', { replace: true })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4">

            <Link
                className="navbar-brand"
                to="/"
            >
                Comics App 
            </Link>

            <div className="navbar-collapse flex">
                <div className="navbar-nav">
                    {/* if is className is active change the styles*/}
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>

                <div className="navbar-nav ml-auto flex items-center">
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        <Lupa/>
                    </NavLink>
                    <span
                        className="nav-item nav-link text-info"
                    >
                        {user?.name}
                    </span>
                    <button
                        onClick={onLogout}
                        className="nav-item nav-link btn"
                    >Logout</button>
                </div>
            </div>


        </nav>
    )
}
