import React from "react";
import Search from "./Search";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectCart } from "../redax/slices/cartSlice";



function Header() {
    const {items} = useSelector(selectCart)

    return (
        
        <header  className="header">
            <div className="container">
                <div className="header__menu">
                <Link to="/">
                    <div className="header__title">QPICK</div>
                </Link>
                    <Search/>
                    <div className="header-logo">
                        <Link to="/favorite">
                            <div className="header-logo__favorite">
                                <img src="./img/logo__favorite.svg" alt="logo" />
                            </div>
                        </Link>
                        <Link to="/cart">
                            <div className="header-logo__cart">
                                <img src="./img/logo_cart.svg" alt="logo" />
                            </div>
                            <span>{items.length}</span>
                        </Link>
                    </div>
                </div>
            </div>     
        </header>
    )
};

export default Header;