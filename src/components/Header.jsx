import React from "react";
import {Link} from 'react-router-dom';

function Header() {
    const [openPopup, setOpenPopup] = React.useState(false)
    const list = ['Iphone 12', 'Iphone 12 Max', 'Iphone 13', 'Iphone 13 Max', 'Iphone 13 Pro Max', 'Iphone 14']
    return (
        
        <header className="header">
            <div className="container">
                <div className="header__menu">
                <Link to="/">
                    <div className="header__title">QPICK</div>
                </Link>
                    <div className="header__choice">
                        <div className="header__choice_logo">
                            <img src="./img/logo_choice.svg" alt="logo"/>
                        </div>
                        <div>
                            <span onClick={()=> setOpenPopup(!openPopup)} className="header__choice_title">Выбрать модель телефона</span>
                            {openPopup && (
                                    <div className="header__choice_pop-up">
                                    <ul>
                                        {list.map((name) => (
                                            <li key={name}>{name}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) }
                        </div>
                    </div>
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