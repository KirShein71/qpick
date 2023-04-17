import {Link} from 'react-router-dom';
import React from 'react'

const Footer: React.FC = () => {
    return (
        <div className="footer">
                <div className="footer__content">
                    <Link to='/'>
                        <div className="footer__title">QPICK</div>
                    </Link>
                    <div className="footer__contacts">
                            <div className="footer__favorite">Избранное</div>
                        <Link to='/cart'>
                            <div className="footer__cart">Корзина</div>
                        </Link>
                            <div className="footer__contact">Контакты</div>
                    </div>
                    <div className="footer__service">
                            <div className="footer__guarantee">Условия сервиса</div>
                        <div className="footer-language">
                            <div className="footer-language__logo">
                                <img src="./img/logo_language.svg" alt="logo" />
                            </div>
                            <div className="footer-language__rus">Рус</div>
                            <div className="footer-language__eng">Eng</div>
                        </div>
                    </div>
                    <div className="footer__social">
                        <ul>
                            <li className="footer__list">
                                
                                    <img src="./img/VK.svg" alt="vk"/>
                               
                            </li>
                            <li className="footer__list">
                               
                                    <img src="./img/Instagram.svg" alt="instagram"/>
                               
                            </li>
                            <li className="footer__list">
                                
                                    <img src="./img/Telegram.svg" alt="Telegram"/>
                               
                            </li>
                            <li className="footer__list">
                                
                                    <img src="./img/Whatsapp.svg" alt="Whatsapp"/>
                               
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
};

export default Footer;