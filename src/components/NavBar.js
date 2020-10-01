import React from 'react';
import 'fontsource-roboto';
import logo from './multimedia/logo.png';
import CartIcon from "./CartIcon";


function Nav(){
    return(
        <div>
        <nav className="navbar" >
            <a className="navbar-brand" href="#!">
              <img className="logo" alt="logo" src={logo} />
            </a>

            <div className="collapse navbar-collapse menu" id="basicExampleNav1">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a href="#!" className="nav-link">
                        Categorías
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#!" className="nav-link">
                        Contacto
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#!" className="nav-link">
                        Sección 3
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#!" className="nav-link">
                        Sección 4
                    </a>
                    </li>
                </ul>
            </div>
            <div className="cartIcon">
                <a href="#">
                    <CartIcon/>
                </a>
            </div>
        </nav>
      </div>
    )
}

export default Nav;