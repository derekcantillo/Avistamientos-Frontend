import React from 'react'
import { Link, NavLink} from 'react-router-dom'


export const Navbar = () => {

 
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark padding">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
               INVEMAR | Avistamientos de Especies Marinas 
            </Link>

            <div className="navbar-collapse justify-content-md-end">
                <div className="navbar-nav ">

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/"
                    >
                        Avistamientos
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/especies"
                    >
                        Especies
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/lugares"
                    >
                        Lugares
                    </NavLink>
                </div>
            </div>

            
        </nav>
    )
}