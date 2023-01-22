import React from "react";
import Search from "./Search";
import {Link} from 'react-router-dom';

function Header() {
    const list = ['Iphone 12', 'Iphone 12 Max', 'Iphone 13', 'Iphone 13 Max', 'Iphone 13 Pro Max', 'Iphone 14']
    

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
                        </Link>
                    </div>
                </div>
            </div>     
        </header>
    )
};

export default Header;