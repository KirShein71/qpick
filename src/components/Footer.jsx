import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__content">
                    <Link to='/'>
                        <div className="footer__title">QPICK</div>
                    </Link>
                    <div className="footer__contacts">
                        <Link to="/favorite">
                            <div className="footer__favorite">Избранное</div>
                        </Link>
                        <Link to='/cart'>
                            <div className="footer__cart">Корзина</div>
                        </Link>
                        <Link to="/contact">
                            <div className="footer__contact">Контакты</div>
                        </Link>
                    </div>
                    <div className="footer__service">
                        <Link to="/condition">
                            <div className="footer__guarantee">Условия сервиса</div>
                        </Link>
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
                                <a href="#">
                                    <img src="./img/VK.svg" alt="vk"/>
                                </a>
                            </li>
                            <li className="footer__list">
                                <a href="#">
                                    <img src="./img/Instagram.svg" alt="instagram"/>
                                </a>
                            </li>
                            <li className="footer__list">
                                <a href="#">
                                    <img src="./img/Telegram.svg" alt="Telegram"/>
                                </a>
                            </li>
                            <li className="footer__list">
                                <a href="#">
                                    <img src="./img/Whatsapp.svg" alt="Whatsapp"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;