import React from "react";
import Search from "./Search";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectCart } from "../redax/slices/cartSlice";



function Header () {
    const {items} = useSelector(selectCart)
    const isMounted = React.useRef(false)

    React.useEffect(()=>{
        if(isMounted.current) {
            const json = JSON.stringify(items);
            localStorage.setItem('cart', json);
        }
        isMounted.current = true
    },[items])

    return (
        
        <header  className="header">
            
                <div className="header__menu">
                <Link to="/">
                    <div className="header__title">QPICK</div>
                </Link>
                    <Search/>
                    <div className="header-logo">
                        <Link to="/cart">
                            <div className="header-logo__cart">
                                <img src="./img/logo_cart.svg" alt="logo" />
                            </div>
                            <span className="header__number">{items.length}</span>
                        </Link>
                    </div>
                </div>
                 
        </header>
    )
};

export default Header;