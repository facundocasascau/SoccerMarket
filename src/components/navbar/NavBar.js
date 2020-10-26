import React, {useContext} from 'react';
import 'fontsource-roboto';
import logo from '../multimedia/logo.png';
import CartIcon from "./CartIcon";
import MiniCart from "../cart/MiniCart";
import {NavLink} from 'react-router-dom';

import {CartContext} from '../context/CartContext'

function Nav(){

    const [cart, setCart] = useContext(CartContext);

   

    return(
        <div>
        <nav className="navbar" >
            <NavLink to={"/"}>
              <img className="logo" alt="logo" src={logo} />
            </NavLink>
            <div className="collapse navbar-collapse menu" id="basicExampleNav1">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={"/arqueros"}>
                        Arqueros
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={"/defensores"}>
                        Defensores
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={"/mediocampistas"}>
                        Mediocampistas
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={"/delanteros"}>
                        Delanteros
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="cartIcon">
                <NavLink to="/cart" >
                    <CartIcon/>
                    <span className="cartItems"> {cart.length} </span>                    
                </NavLink>
                    <MiniCart/>

            </div>

        </nav>
      </div>
    )
}

export default Nav;